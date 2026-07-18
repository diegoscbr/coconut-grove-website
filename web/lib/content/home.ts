// Home page content — exact copy ported from prototype/index.html.
// Single source of truth — edit this file to change the page's copy.
export const HOME_CONTENT = {
  hero: {
    eyebrow: "Coconut Grove · Biscayne Bay · Since 1946",
    headlineLines: ["The", "Instructional", "Center"],
    modifier: "A 501(c)(3) nonprofit · Open to every sailor",
    subhead:
      "Carrying Coconut Grove's sailing legacy forward — from a first lesson on Biscayne Bay to an international racing campaign.",
    subheadEmphasis: "Eighty years of sailing, open to all.",
    ctaLabel: "Sail with us",
    ctaHref: "/contact",
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
    headline: "Five rungs. One ladder.",
    prose1:
      "**Discover. Develop. Race. Compete. Perform.** Every young racer on the team follows the same ladder — Racing Teams is the spine, the High Performance Center the apex.",
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
    ctaLabel: "Read the story →",
    ctaHref: "/about",
  },
  leadership: {
    eyebrow: "Leadership",
    headline: "The team behind the Center.",
    sub: "Day to day, the Instructional Center is led by three people who set the standard on and off the water.",
    people: [
      { name: "Maru Urban", role: "Director of Sailing Performance & Development" },
      { name: "Rosa Lamela", role: "Director of Programs & Development" },
      { name: "Lauren Simpson", role: "General Manager" },
    ],
    ctaLabel: "Meet the full team →",
    ctaHref: "/about#coaches",
  },
  dock: {
    eyebrow: "What's on the dock",
    headline: "On the horizon & recent happenings.",
    sub: "Regattas, open houses, and stories from the coaches — the one place to follow life at the Instructional Center.",
    horizon: {
      label: "On the Horizon",
      count: "Upcoming",
      cards: [
        {
          href: "/calendar",
          mediaClass: "event",
          eyebrow: "Regatta · April 10–12",
          eyebrowTbd: "",
          title: "Don Q Rum Keg Snipe Regatta",
          meta: "2026 · Confirmed",
        },
        {
          href: "/calendar",
          mediaClass: "",
          eyebrow: "Open House · ",
          eyebrowTbd: "Date TBD",
          title: "Spring Discovery Week",
          meta: "Youth Sailing · Bring the kid, sail a boat",
        },
      ],
    },
    recent: {
      label: "Recent Happenings",
      count: "Latest",
      cards: [
        {
          href: "/calendar/sample-story",
          mediaClass: "feature",
          eyebrow: "Feature",
          eyebrowClass: "",
          title: "Maru Urban joins as Director of Sailing Performance",
          meta: "Story",
        },
        {
          href: "/calendar/sample-story",
          mediaClass: "race",
          eyebrow: "Race result",
          eyebrowClass: "race",
          title: "CGSC sailors finish top-5 in regional 420 series",
          meta: "Racing Teams",
        },
      ],
    },
    ctaLabel: "See the full calendar →",
    ctaHref: "/calendar",
  },
  finalCta: {
    eyebrow: "Sail with us",
    headline: "Drop by the dock or send a note.",
    sub: "Open practices and discovery weeks happen regularly — there's no commitment to come see if it's a fit.",
    ctaLabel: "Visit / Inquire →",
    ctaHref: "/contact",
  },
};

export type HomeContent = typeof HOME_CONTENT;
