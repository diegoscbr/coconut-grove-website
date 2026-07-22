// Adult Sailing page content — hero + subnav only.
// The page body is the adult program copy in lib/content/adultProgram.ts
// (client draft "CGSCIC — Adult Sailing Page", 2026-07-23), rendered by
// components/AdultProgram.tsx. The pre-2026-07-23 sections (intro, course
// grids, seasonal note, where-we-sail, inquiry form) were replaced at the
// client's request; the old copy lives in git history.
// Single source of truth — edit this file to change the hero copy.
export const ADULT_SAILING_CONTENT = {
  hero: {
    breadcrumbHome: "Home",
    breadcrumbPrograms: "Programs",
    breadcrumbCurrent: "Adult Sailing",
    h1: "Adult Sailing",
    subheadPre:
      "A US Sailing-accredited school. Courses and clinics for every level — ",
    subheadEmphasis: "first-timers to cruising and racing",
    subheadPost: " — taught by US Sailing-certified instructors.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#about", label: "The Program" },
    { href: "#pathway", label: "Certification Pathway" },
    { href: "#flying-scot", label: "Flying Scot" },
    { href: "#clinics", label: "Clinics" },
    { href: "#register", label: "Register" },
  ],
};

export type AdultSailingContent = typeof ADULT_SAILING_CONTENT;
