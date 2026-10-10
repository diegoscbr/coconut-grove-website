// Adult Sailing page — SEO fields, hero + subnav only.
// The page body is the adult program copy in lib/content/adultProgram.ts
// (client build specification "CGSCIC-Adult-Sailing_Updated.docx", Sept 2026),
// rendered by components/AdultProgram.tsx.
// Single source of truth — edit this file to change the hero copy.

export const ADULT_SAILING_CONTENT = {
  // Part 3 of the specification. Title and description are its exact strings.
  seo: {
    title: "Adult Sailing Lessons in Miami | CGSC Instructional Center",
    description:
      "Adult sailing lessons and US Sailing certification courses on Biscayne Bay at Coconut Grove Sailing Club in Miami. Beginners through Bareboat Cruising and Celestial Navigation.",
    canonical: "https://www.cgscic.org/programs/adult-sailing",
    ogImage: "https://www.cgscic.org/assets/courses/basic-keelboat.jpg",
    // The hero photo is a CSS background (.hero-adult) with no element to
    // caption, so this describes the keelboat photo in the certification
    // section — the same subject, and the one place it can be announced.
    heroImageAlt:
      "An Ensign keelboat sailing on Biscayne Bay with three sailors aboard",
  },
  hero: {
    breadcrumbHome: "Home",
    breadcrumbPrograms: "Programs",
    breadcrumbCurrent: "Adult Sailing",
    h1: "Adult Sailing Lessons in Miami",
    subhead:
      "Adult sailing lessons and US Sailing certification courses on Biscayne Bay, for complete beginners through experienced sailors, at Coconut Grove Sailing Club in Miami.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  // Section IDs are fixed by Part 3 of the specification so the sections can be
  // linked to directly from other pages, emails, and social posts.
  subnav: [
    { href: "#program", label: "The Program" },
    { href: "#certification-pathway", label: "Certification Pathway" },
    { href: "#after-certification", label: "Boat Access" },
    { href: "#flying-scot", label: "Flying Scot" },
    { href: "#clinics", label: "Clinics" },
    { href: "#instructors", label: "Instructors" },
    { href: "#faq", label: "FAQ" },
    { href: "#register", label: "Register" },
  ],
};

export type AdultSailingContent = typeof ADULT_SAILING_CONTENT;
