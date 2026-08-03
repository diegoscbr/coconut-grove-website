// Adult Sailing page content — SEO fields, hero + subnav only.
// The page body is the adult program copy in lib/content/adultProgram.ts
// (client draft "CGSCIC-Adult-Sailing-Page - SEO Ready", 2026-08-02),
// rendered by components/AdultProgram.tsx. The pre-2026-07-23 sections
// (intro, course grids, seasonal note, where-we-sail, inquiry form) were
// replaced at the client's request; the old copy lives in git history.
// Single source of truth — edit this file to change the hero copy.
export const ADULT_SAILING_CONTENT = {
  seo: {
    title: "Adult Sailing Lessons in Miami | Coconut Grove Sailing Club",
    description:
      "Learn to sail on Biscayne Bay with US Sailing–certified instructors. Adult keelboat, cruising & navigation courses in Coconut Grove, Miami. All levels welcome.",
    // The client's "hero image alt text". The hero photo is a CSS background
    // (.hero-adult) with no element to caption, so this describes the keelboat
    // photo in the certification-pathway section — the same subject, and the
    // one place on the page it can be announced.
    heroImageAlt:
      "Adults learning to sail a keelboat on Biscayne Bay at Coconut Grove Sailing Club in Miami",
  },
  hero: {
    breadcrumbHome: "Home",
    breadcrumbPrograms: "Programs",
    breadcrumbCurrent: "Adult Sailing",
    h1: "Adult Sailing Lessons in Miami",
    subhead:
      "Adult sailing lessons and US Sailing certification courses on Biscayne Bay — for complete beginners through experienced sailors, at Coconut Grove Sailing Club in Miami.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#about", label: "The Program" },
    { href: "#pathway", label: "Certification Pathway" },
    { href: "#flying-scot", label: "Flying Scot" },
    { href: "#clinics", label: "Clinics" },
    { href: "#faq", label: "FAQ" },
    { href: "#register", label: "Register" },
  ],
};

export type AdultSailingContent = typeof ADULT_SAILING_CONTENT;
