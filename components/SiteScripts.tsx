"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { COACH_PHOTOS } from "@/lib/coachPhotos";

/**
 * Client-side chrome behavior, ported 1:1 from prototype/js/site.js:
 * mobile drawer, newsletter placeholder, in-page scrollspy, and coach photos.
 * Runs against the same markup/attributes the prototype used. Re-binds on
 * route change so it works across the App Router.
 */
export function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const drawer = document.getElementById("mobile-drawer");
    const openBtn = document.querySelector('[data-action="open-drawer"]');
    const closeBtn = document.querySelector('[data-action="close-drawer"]');

    const setDrawer = (open: boolean) => {
      if (!drawer) return;
      drawer.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    };

    const onOpen = () => setDrawer(true);
    const onClose = () => setDrawer(false);
    openBtn?.addEventListener("click", onOpen);
    closeBtn?.addEventListener("click", onClose);

    const drawerLinks = Array.from(
      document.querySelectorAll("[data-drawer-link]"),
    );
    drawerLinks.forEach((link) => link.addEventListener("click", onClose));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawer?.classList.contains("open")) {
        setDrawer(false);
      }
    };
    document.addEventListener("keydown", onKey);

    // Newsletter · validate, then capture via /api/newsletter (Google Sheet)
    const newsletterForm = document.querySelector("[data-form-newsletter]");
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLElement;
      const button = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      const input = form.querySelector<HTMLInputElement>('input[type="email"]');
      const msg = form.querySelector<HTMLElement>("[data-news-msg]");
      if (!button || !input) return;

      const setMsg = (text: string) => {
        if (msg) msg.textContent = text;
      };
      const email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        setMsg("Please enter a valid email address.");
        return;
      }

      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = "Adding…";
      setMsg("");

      const honeypot =
        form.querySelector<HTMLInputElement>('input[name="company"]')?.value ??
        "";
      const restore = () => {
        button.textContent = originalText;
        button.disabled = false;
      };

      fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company: honeypot }),
      })
        .then(async (res) => {
          const data = (await res.json().catch(() => ({}))) as {
            ok?: boolean;
            error?: string;
          };
          if (res.ok && data.ok) {
            button.textContent = "On the list ✓";
            input.value = "";
            setTimeout(restore, 3500);
            return;
          }
          restore();
          setMsg(
            data.error === "invalid_email"
              ? "That email doesn't look deliverable — check for typos."
              : "Something went wrong — please try again.",
          );
        })
        .catch(() => {
          restore();
          setMsg("Something went wrong — please try again.");
        });
    };
    newsletterForm?.addEventListener("submit", onSubmit);

    // In-page anchor scrollspy for long interior pages
    let observer: IntersectionObserver | undefined;
    const scrollspy = document.querySelector("[data-scrollspy]");
    if (scrollspy && "IntersectionObserver" in window) {
      const links = Array.from(scrollspy.querySelectorAll('a[href^="#"]'));
      const byHash = new Map<string, Element[]>();
      links.forEach((a) => {
        const hash = a.getAttribute("href");
        if (!hash) return;
        if (!byHash.has(hash)) byHash.set(hash, []);
        byHash.get(hash)!.push(a);
      });
      const targets = Array.from(byHash.keys())
        .map((h) => document.getElementById(h.slice(1)))
        .filter((el): el is HTMLElement => Boolean(el));
      if (targets.length) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const id = `#${entry.target.id}`;
              links.forEach((a) => a.classList.remove("active"));
              (byHash.get(id) || []).forEach((a) => a.classList.add("active"));
            });
          },
          { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
        );
        targets.forEach((el) => observer!.observe(el));
      }
    }

    // Coach headshots · apply real photos by name
    document.querySelectorAll(".coach").forEach((card) => {
      const nameEl = card.querySelector(".coach-name");
      const portrait = card.querySelector<HTMLElement>(".coach-portrait");
      if (!nameEl || !portrait) return;
      const photo = COACH_PHOTOS[(nameEl.textContent || "").trim()];
      if (!photo) return;
      portrait.classList.add("has-photo");
      portrait.style.backgroundImage = `url("${photo}")`;
    });

    return () => {
      openBtn?.removeEventListener("click", onOpen);
      closeBtn?.removeEventListener("click", onClose);
      drawerLinks.forEach((link) => link.removeEventListener("click", onClose));
      document.removeEventListener("keydown", onKey);
      newsletterForm?.removeEventListener("submit", onSubmit);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
