// Home page content — exact copy ported from prototype/index.html.
// Single source of truth — edit this file to change the page's copy.
import type { AnnouncementData } from "@/components/AnnouncementBanner";

export const HOME_CONTENT = {
  // Banner hidden until the client supplies fall campaign copy — the summer
  // camp message it carried was removed with the 2026 Fall Youth Sailing page.
  announcement: null as AnnouncementData | null,
  hero: {
    eyebrow: "Coconut Grove Sailing Club · Biscayne Bay · Since 1946",
    headlineLines: ["The", "Instructional", "Center"],
    modifier: "A 501(c)(3) nonprofit · Open to every sailor",
    subhead:
      "Carrying Coconut Grove's sailing legacy forward — from a first lesson on Biscayne Bay to an international racing campaign.",
    subheadEmphasis: "Eighty years of sailing, open to all.",
    // Punch list S1: registration leads, contact drops to secondary.
    // The CTA points at /programs rather than a Clubspot link because there
    // are two registrations (youth fa7vTl77ap, adult zzXFEJa92k) and one
    // button cannot choose between them. /programs routes to both.
    ctaLabel: "Register",
    ctaHref: "/programs",
    ctaNote: "Fall youth season runs through December 13 · Adult courses year-round",
    ctaSecondaryLabel: "Sail with us",
    ctaSecondaryHref: "/contact",
    posterUrl: "/assets/hero-poster.jpg",
    videoUrl: "/assets/hero.mp4",
  },
  programs: {
    eyebrow: "Programs",
    headline: "Three ways to sail with us.",
    sub: "From a first lesson to international competition — year-round programs for youth and adults alike, taught by the same coaches, on the same Bay.",
    cards: [
      {
        href: "/programs/camps-coaching",
        mediaClass: "camps",
        title: "Youth Sailing",
        line: "Year-round training and seasonal camps — the on-ramp for every young sailor, from the first time on the water up.",
      },
      {
        href: "/programs/race-team",
        mediaClass: "race",
        title: "Racing Teams",
        line: "The next chapter — our competitive pipeline, from junior fleets to high performance. Private coaching lives here too.",
      },
      {
        href: "/programs/adult-sailing",
        mediaClass: "adult",
        title: "Adult Sailing",
        line: "Get on the water. Build the skill, no racing required — the parallel track for adults.",
      },
    ],
  },
  pathway: {
    tag: "For our youth race team",
    eyebrow: "The Pathway",
    headline: "Four rungs. One ladder.",
    prose1:
      "**Discover. Develop. Race. Beyond.** Every young racer on the team follows the same ladder — Racing Teams is the spine, the High Performance Center the apex.",
    prose2:
      "See where a sailor starts, where they'd be in three years, and where the ladder leads after that.",
    ctaLabel: "Explore the Pathway →",
    ctaHref: "/programs/race-team#pathway",
    offRampPre: "Sailing as an adult? ",
    offRampLinkText: "Adults have their own track →",
    offRampHref: "/programs/adult-sailing",
  },
  about: {
    eyebrow: "About",
    headline: "Eighty years on Biscayne Bay.",
    prose1:
      "Founded in **1946** by a small group of passionate Miami sailors, CGSC has been the training ground for South Florida sailors at every level for the better part of a century.",
    prose2:
      "The Instructional Center is the next chapter. **The same standards, deeper coaching, a broader ladder** — from first sail to Olympic campaign.",
    // Punch list Y4: this reach figure was buried in Rosa's signed letter on
    // /programs/camps-coaching. Surfaced here. The letter keeps its own copy —
    // removing that sentence leaves "keep that going" with no antecedent.
    prose3:
      "**Nearly 400 children and teens** came through our doors this past summer — many of them sailing for the first time.",
    ctaLabel: "Read the story →",
    ctaHref: "/about",
  },
  leadership: {
    eyebrow: "Leadership",
    headline: "The team behind the Center.",
    sub: "Day to day, the Instructional Center is led by two people who set the standard on and off the water.",
    people: [
      { name: "Maru Urban", role: "Director of Sailing Performance & Development" },
      { name: "Rosa Lamela", role: "Director of Programs & Development" },
    ],
    ctaLabel: "Meet the full team →",
    ctaHref: "/about#coaches",
  },
};

export type HomeContent = typeof HOME_CONTENT;
