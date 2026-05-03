# Fact-verification agent prompt

Self-contained prompt for an agent that reads `BRAND_DECISIONS.md`, verifies the unverified-facts table at the bottom, and produces a corrections file + PR. Designed to run as a one-shot — paste the entire fenced section below into a fresh Claude Code session.

## How to run

1. Open a fresh Claude Code or Claude.ai cloud session pointed at this repo (`diegoscbr/coconut-grove-website`).
2. Paste the prompt below verbatim.
3. The agent should produce `BRAND_DECISIONS.corrections.md` and open a PR titled `fact-verification: corrections to BRAND_DECISIONS.md`.
4. Review the PR. Apply the corrections to `BRAND_DECISIONS.md` manually after review.

A scheduled remote agent (id `trig_01BNDi9FFQ2DF5TM9SYqKtPW`) is also queued to run this same prompt on **2026-05-04 09:00 ET**. If you run it manually first, disable the scheduled run at https://claude.ai/code/routines/trig_01BNDi9FFQ2DF5TM9SYqKtPW.

---

## The prompt

```
You are a fact-verification agent for the Coconut Grove Sailing Club Instructional Center website (cgscic.org).

## Context

A brand-spec brainstorm completed on 2026-05-02 produced `BRAND_DECISIONS.md` in the repo root. The doc is the source of truth for the homepage, but most concrete numbers, names, dates, and contact details in it were placeholders inserted to render visual mocks during the brainstorm. The user (Diego, agency-side at PMG, building this for the CGSC client) explicitly flagged that "a lot of these facts are just wrong." Your job is to figure out the right ones.

## Step 1 — Read the unverified-facts table

Open `BRAND_DECISIONS.md`. Scroll to the section titled "⚠ Unverified facts — DO NOT SHIP UNTIL CORRECTED". That table is your work list. There are 14 rows. Do NOT modify `BRAND_DECISIONS.md` directly.

## Step 2 — Verify each row

Research authoritative sources for each row. Suggested sources by category:

- **Olympian count + names**: cgsc.org (parent club), cgscic.org, US Sailing alumni records, Wikipedia, regattanetwork.com archives
- **Founder names + 1946 founding details**: cgsc.org "About"/"History" pages, Miami archives, local newspaper archives, Wikipedia
- **Recent named alumni**: cgscic.org current programs/roster pages, recent regatta results on regattanetwork.com (search for CGSC)
- **Bay climate stats** (water temp, wind, sailable days): NOAA station data for Biscayne Bay, CO-OPS station 8723214 (Virginia Key) for water temp
- **Orange Bowl attendance**: regattanetwork.com event pages (search "Orange Bowl Coconut Grove")
- **2026 regatta dates**: regattanetwork.com, snipe.org, miamisailingweek.com
- **Coach names + roles + Maru Urban verification**: cgscic.org staff/coaches page, LinkedIn, recent press
- **Coach-to-sailor ratios**: cgscic.org program pages
- **Phone, email, address, hours, open-house cadence**: cgscic.org contact page (the canonical source)

Use WebSearch and WebFetch liberally. Cross-reference at least two sources for HIGH-confidence claims.

## Step 3 — Produce corrections file

Create `BRAND_DECISIONS.corrections.md` in the repo root. Format as a single markdown table with these columns:

| Field | Current placeholder | Verified value | Source URL | Date verified | Confidence |

- **Confidence values**: HIGH (official primary source like cgscic.org or NOAA), MEDIUM (multiple secondary sources agree), UNVERIFIABLE (couldn't confirm)
- For UNVERIFIABLE rows, add a follow-up note suggesting specifically who at CGSC IC should be asked (e.g., "ask Maru Urban directly", "contact cgscic.org admin", "request from CGSC archives committee")
- Above the table, write a 1-paragraph executive summary: how many facts verified HIGH vs MEDIUM vs UNVERIFIABLE, and any surprising corrections (e.g., if the placeholder "12 Olympians" turned out to be way off)

## Step 4 — Open a PR

Create a new branch (e.g., `fact-verification-2026-05-04`), commit `BRAND_DECISIONS.corrections.md`, and open a PR with:

- Title: `fact-verification: corrections to BRAND_DECISIONS.md`
- Body: Summarize what changed vs. what's still unverified. List the UNVERIFIABLE rows explicitly so a human can chase those down. Reference `BRAND_DECISIONS.md` so reviewers know the original placeholders.

Use `gh pr create` for the PR. Do NOT modify `BRAND_DECISIONS.md` itself in this branch — the corrections file is the deliverable; humans will apply it later.

## Important constraints

- The site/brand is the **Instructional Center** (cgscic.org), not "Instructional Academy" — never confuse these.
- "Sailing Academy" is a positioning phrase used only in the hero headline; everywhere else, the entity is Instructional Center.
- Don't invent names. If you can't find a real alumnus or coach name, mark UNVERIFIABLE rather than fabricate.
- Don't guess at phone/email — only report what's published on cgscic.org's contact page.
- If cgscic.org is offline or content has changed dramatically since 2026-05-02, note that in the executive summary.

Good luck. Be rigorous — this report becomes the launch checklist.
```
