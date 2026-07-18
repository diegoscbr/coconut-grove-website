import Link from "next/link";

// Mobile sticky "Give" CTA. Requires <body class="has-sticky-cta">.
export function StickyCTA() {
  return (
    <Link href="/giving" className="mobile-sticky-cta">
      Give →
    </Link>
  );
}
