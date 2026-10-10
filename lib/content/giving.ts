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
      "2990 S. Bayshore Drive",
      "Miami, FL 33133",
      "Attn: ROSA LAMELA",
    ],
  },
  // Punch list F1 + F2 + the /giving half of F4. Interim by Diego's call
  // (2026-10-09): online gifts route to CGSCIC's own Give Miami Day page rather
  // than waiting on the Zeffy-vs-Givebutter decision, which is with Peter and
  // Steve. This also replaces copy that still named Bloomerang, a vendor the
  // club is explicitly no longer pursuing.
  //
  // URL verified 2026-10-09: returns 200 and the page title reads "Coconut
  // Grove Sailing Club Instructional Center | Give Miami Day".
  // When a direct platform is chosen, swap this block, not the whole page.
  giveOnline: {
    eyebrow: "Give online",
    headline: "Give through Give Miami Day.",
    sub: "Our gifts are processed by The Miami Foundation through our Give Miami Day page. It is secure, the receipt is immediate, and 100% of your gift reaches the Instructional Center.",
    tiers: [
      { amount: "$75", line: "A week of after-school sailing" },
      { amount: "$825", line: "One child, one full season" },
      { amount: "$1,500", line: "A season for two, plus gear" },
    ],
    tiersNote:
      "Any amount helps. These are the numbers behind our programs, if it helps to picture where a gift goes.",
    ctaLabel: "Donate on Give Miami Day →",
    ctaHref: "https://givemiamiday.org/organization/cgscic",
    aside:
      "Prefer to talk it through, or interested in sponsorship or a planned gift?",
    asideCtaLabel: "Contact us",
    asideCtaHref: "/contact",
  },
};

export type GivingContent = typeof GIVING_CONTENT;
