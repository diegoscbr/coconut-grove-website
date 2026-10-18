import type { GiveButton } from "@/lib/giveMiamiDay";

// Mobile sticky "Give" CTA. Requires <body class="has-sticky-cta">.
// Label and destination follow the Give Miami Day dates (lib/giveMiamiDay.ts).
export function StickyCTA({ give }: { give: GiveButton }) {
  return (
    <a href={give.href} className="mobile-sticky-cta">
      {give.label}
    </a>
  );
}
