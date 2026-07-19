// Programs (index) page content — exact copy ported from prototype/programs/index.html.
// Single source of truth — edit this file to change the page's copy.
export const PROGRAMS_INDEX_CONTENT = {
  hero: {
    breadcrumbLabel: "Home",
    breadcrumbHref: "/",
    breadcrumbCurrent: "Programs",
    headline: "Three ways to sail with us",
    subhead:
      "From a first time on the water to international competition — three programs cover every level of the CGSC pathway, taught by the same coaches, on the same Bay.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  cards: {
    items: [
      {
        href: "/programs/adult-sailing",
        mediaClass: "adult",
        eyebrow: "No racing required",
        title: "Adult Sailing",
        line: "Get on the water, build the skill, no pressure. Weekly sessions for adults of all levels — bring you, we'll bring the boat.",
      },
      {
        href: "/programs/race-team",
        mediaClass: "race",
        eyebrow: "The new chapter",
        title: "Racing Teams",
        line: "The competitive pipeline — junior to high performance. Director-led by Maru Urban. Discover, Develop, Race, Beyond.",
      },
      {
        href: "/programs/camps-coaching",
        mediaClass: "camps",
        eyebrow: "Seasonal & private",
        title: "Youth Sailing",
        line: "Holiday camps, discovery weeks, private coaching. The entry point — and the way to keep sailing through every break.",
      },
    ],
  },
  fit: {
    eyebrow: "Where do you fit?",
    headline: "The CGSC pathway.",
    prose1:
      "All three programs feed the same pathway: **Discover → Develop → Race → Beyond.** Youth Sailing and Adult Sailing are entry points; Racing Teams is the competitive ladder; the High Performance Center is the apex.",
    prose2:
      "Wherever you start, the same coaches see you all the way up. **No re-onboarding, no switching languages** — the next rung is always one practice away.",
    ctaLabel: "See the Pathway visualization →",
    ctaHref: "/programs/race-team#pathway",
  },
  coaches: {
    eyebrow: "The same coaches, every program",
    headline: "Continuity is the point.",
    subPre:
      "We don't rotate coaches by program. The staff that runs Racing Teams also coaches the High Performance Center and the adult classes. ",
    subEm: "Wherever you enter, you stay with the same people.",
    people: [
      { name: "Maru Urban", role: "Director · Sailing Performance & Development" },
      { name: "Steve Mitchell", role: "High Performance Lead" },
      { name: "Rosa Lamela", role: "Director of Programs Development" },
      { name: "Orlando Gonzalez", role: "ILCA Coach" },
      { name: "Lauren Simpson", role: "General Manager" },
    ],
    ctaLabel: "Meet the full team →",
    ctaHref: "/about#coaches",
  },
  inquiry: {
    eyebrow: "Not sure which program?",
    headline: "We'll help you figure it out.",
    sub: "Tell us about the sailor — age, experience, what you're after. A coach will be in touch within two days with a suggested entry point.",
    ctaLabel: "Inquire →",
    ctaHref: "/contact",
  },
};

export type ProgramsIndexContent = typeof PROGRAMS_INDEX_CONTENT;
