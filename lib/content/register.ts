// Registration landing page — punch list S1.
//
// Peter's 9 October revision chose this over a direct Clubspot link on the
// homepage: "build a /register landing page routing to youth, adult, and
// racing registration with season dates, not just a direct link to the current
// Fall registration, more durable across seasons."
//
// THREE ROUTES, NOT THREE CLUBSPOT LINKS. Only two Clubspot registrations
// exist (youth fa7vTl77ap, adult zzXFEJa92k). Racing has never had one: the
// Race Team page's own call to action is "Contact us to get started", because
// placing a sailor on a racing team is a conversation about level, not a
// checkout. This page says that plainly rather than inventing a third link or
// leaving a dead card.
//
// Season dates below are the ones already live in lib/content/home.ts, so the
// homepage and this page cannot disagree. When the fall season ends, both
// change together.
import { FALL_YOUTH_REGISTRATION_URL } from "@/lib/content/fallYouth";
import { ADULT_CLASSES_REGISTRATION_URL } from "@/lib/content/adultProgram";

export type RegisterRoute = {
  eyebrow: string;
  title: string;
  who: string;
  season: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  /** true when the CTA leaves the site for Clubspot */
  external: boolean;
  detailLabel: string;
  detailHref: string;
};

export const REGISTER_CONTENT = {
  seo: {
    title: "Register | Coconut Grove Sailing Club Instructional Center",
    description:
      "Register for youth sailing, adult certification courses, or racing at the Coconut Grove Sailing Club Instructional Center on Biscayne Bay in Miami.",
  },
  hero: {
    breadcrumbCurrent: "Register",
    headline: "Register",
    subhead:
      "Three ways to sail with us. Pick the one that fits, or tell us about the sailor and we will point you at it.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  routes: [
    {
      eyebrow: "Youth",
      title: "Youth Sailing",
      // "Ages 6 and up" is the youth page's own framing (seo + section headings).
      // 6-17 appears there only for Home School Sailing, so it is not the general bound.
      who: "Ages 6 and up",
      season: "Fall season runs through December 13",
      body: "Optimist lessons, after-school sailing, windsurfing and wing foiling, plus the development classes that follow them. Registration is handled on Clubspot.",
      ctaLabel: "Register for youth sailing →",
      ctaHref: FALL_YOUTH_REGISTRATION_URL,
      external: true,
      detailLabel: "See programs, schedules and fees",
      detailHref: "/programs/camps-coaching",
    },
    {
      eyebrow: "Adult",
      title: "Adult Sailing",
      who: "18 and over, complete beginners welcome",
      season: "Courses run year round",
      body: "US Sailing certification courses from a first sail through Bareboat Cruising and Celestial Navigation, plus the Flying Scot program and clinics. Registration is handled on Clubspot.",
      ctaLabel: "Register for adult classes →",
      ctaHref: ADULT_CLASSES_REGISTRATION_URL,
      external: true,
      detailLabel: "See courses, dates and instructors",
      detailHref: "/programs/adult-sailing",
    },
    {
      eyebrow: "Racing",
      title: "Racing Teams",
      // Sourced from the Race Team FAQ: "Sailors ages 10-18 who want to
      // compete. Entry is by tryout". The tryout is why there is no checkout.
      who: "Ages 10 to 18, entry by tryout",
      season: "Teams run on their own season",
      body: "Entry is by tryout rather than checkout, and there is an open practice each season so a sailor can come sail with the team before committing. Tell us about them and a coach will take it from there.",
      ctaLabel: "Talk to a coach →",
      ctaHref: "/contact",
      external: false,
      detailLabel: "See the teams and the pathway",
      detailHref: "/programs/race-team",
    },
  ] satisfies RegisterRoute[],
  help: {
    eyebrow: "Not sure which?",
    headline: "Start with the comparison table.",
    prose:
      "The parent guide puts every youth program side by side (ages, days per week and fees in one table), along with how we handle safety and who does the teaching.",
    ctaLabel: "Read the parent guide →",
    ctaHref: "/programs/parent-guide",
    contactPre: "Still stuck? ",
    contactLinkText: "Tell us about the sailor",
    contactHref: "/contact",
    contactPost: " and we will reply within two days.",
  },
};

export type RegisterContent = typeof REGISTER_CONTENT;
