// Giving page content — exact copy ported from prototype/giving.html.
// Single source of truth — edit this file to change the page's copy.
export const GIVING_CONTENT = {
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbSep: "→",
    breadcrumbCurrent: "Giving",
    headline: "Support the Center",
    subhead:
      "A 501(c)(3) nonprofit keeping sailing open to every sailor on Biscayne Bay.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  whyGive: {
    eyebrow: "Why give",
    headline: "Every sailor, on the water.",
    prose1:
      "CGSC Instructional Center (CGSCIC) is a **501(c)(3) nonprofit organization** dedicated to expanding access to sailing and youth development on the water. Your gift directly supports our youth sailing program through scholarships, equipment maintenance and capital purchases that make it possible for CGSCIC to empower the next generation of sailors.",
    legalLines: [
      "Donations are tax-deductible as allowed by law.",
      "No goods or services were provided in exchange for this contribution.",
      "Donor information is kept confidential and will never be shared or sold.",
    ],
  },
  checks: {
    eyebrow: "Give by check",
    intro:
      "For those who prefer to make check donations, please make checks payable to **CGSCIC** and send to:",
    address: [
      "Coconut Grove Sailing Club",
      "2900 S. Bayshore Drive",
      "Miami, FL 33133",
      "Attn: ROSA LAMELA",
    ],
  },
  comingSoon: {
    tag: "Coming soon",
    headline: "Online donations are on the way.",
    sub: "We're partnering with Bloomerang to launch a secure donation page. Until it's live, contact us to give, or to talk about sponsorship and planned gifts.",
    ctaLabel: "Contact us to give →",
    ctaHref: "/contact",
  },
};

export type GivingContent = typeof GIVING_CONTENT;
