// Youth Regattas page content — exact copy ported from prototype/youth-regattas.html.
// Single source of truth — edit this file to change the page's copy.
export const YOUTH_REGATTAS_CONTENT = {
  hero: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Youth Regattas",
    h1: "Youth Regattas",
    subhead:
      "CGSC hosts several major youth regattas each year on Biscayne Bay. ",
    subheadEmphasis:
      "Sponsors, logistics, photos, and results — all in one place.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#sponsors", label: "Sponsors" },
    { href: "#logistics", label: "Logistics" },
    { href: "#results", label: "Photos & Results" },
  ],
  sponsors: {
    eyebrow: "Sponsors",
    headline: "Our regatta partners.",
    sub: "The sponsors who make our youth regattas possible. Partner logos and details will live here.",
    tbd: "Content coming soon",
  },
  logistics: {
    eyebrow: "Logistics",
    headline: "Dates, registration & the dock.",
    sub: "Schedules, notice of race, registration links, and on-site logistics — posted here as each regatta is confirmed.",
    tbd: "Content coming soon",
  },
  results: {
    eyebrow: "Photos & Results",
    headline: "After the racing.",
    sub: "Final standings, regatta recaps, and photo galleries — linked here once each event wraps.",
    tbd: "Content coming soon",
  },
};

export type YouthRegattasContent = typeof YOUTH_REGATTAS_CONTENT;
