import { NextResponse } from "next/server";
import { resolveMx } from "node:dns/promises";

// Practical syntax check (full RFC 5322 is overkill for a signup form).
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

// DNS errors that mean "this domain cannot receive mail". Anything else
// (timeouts, server failures) fails open so flaky DNS never blocks a real
// person from signing up.
const NO_MAIL_DNS_CODES = new Set(["ENOTFOUND", "ENODATA", "NXDOMAIN"]);

async function domainAcceptsMail(domain: string): Promise<boolean> {
  try {
    const records = await resolveMx(domain);
    return records.length > 0;
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code ?? "";
    return !NO_MAIL_DNS_CODES.has(code);
  }
}

function failure(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return failure("invalid_request", 400);
  }

  // Honeypot: the hidden "company" field is invisible to humans. Bots that
  // fill it get a fake success so they don't retry.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return failure("invalid_email", 400);
  }
  if (!(await domainAcceptsMail(email.split("@")[1]))) {
    return failure("invalid_email", 400);
  }

  const webhook = process.env.NEWSLETTER_SHEET_WEBHOOK;
  if (!webhook) {
    console.error(
      "NEWSLETTER_SHEET_WEBHOOK is not set — newsletter signup dropped",
    );
    return failure("not_configured", 503);
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email, source: "site-footer" }),
    });
    if (!res.ok) {
      throw new Error(`sheet webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("newsletter capture failed:", err);
    return failure("upstream_error", 502);
  }

  return NextResponse.json({ ok: true });
}
