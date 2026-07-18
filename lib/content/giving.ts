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
      "The Coconut Grove Sailing Club Instructional Center is a **501(c)(3) nonprofit**. Your support keeps sailing accessible on Biscayne Bay — funding boats, coaching, and scholarships so that cost is never the reason a young sailor stays on shore.",
    prose2:
      "We're setting up a dedicated, secure donation page. In the meantime, reach out and we'll make sure your gift counts.",
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
