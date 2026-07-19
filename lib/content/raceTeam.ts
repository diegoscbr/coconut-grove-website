// Racing Teams page content — exact copy ported from prototype/programs/race-team.html.
// Single source of truth — edit this file to change the page's copy.
export const RACE_TEAM_CONTENT = {
  hero: {
    breadcrumbHome: { label: "Home", href: "/" },
    breadcrumbPrograms: { label: "Programs", href: "/programs" },
    breadcrumbCurrent: "Racing Teams",
    h1: "Racing Teams",
    subheadPre: "The CGSC competitive pathway — junior to high performance. ",
    subheadEmphasis: "Discover. Develop. Race. Beyond.",
    subheadPost: " Director-led, year-round, on Biscayne Bay.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#team", label: "The Team" },
    { href: "#methodology", label: "Methodology" },
    { href: "#pathway", label: "Pathway" },
    { href: "#coaches", label: "Coaches" },
    { href: "#regattas", label: "Regattas" },
    { href: "#faq", label: "FAQ" },
    { href: "#inquire", label: "Inquire" },
  ],
  intro: {
    eyebrow: "The Racing Teams",
    headline: "A pipeline, not a program.",
    prose1:
      "The CGSC Racing Teams are the **competitive spine of the Instructional Center**. Sailors enter as juniors, develop through fleet racing on Biscayne Bay, and exit into college, national, or Olympic-track competition. Four rungs, one ladder, the same coaches all the way up.",
    prose2: `We race **30+ regattas a season** — Miami, the Keys, the Bahamas, and the regatta circuits that feed US Sailing's youth and college pipelines. The High Performance Center, **Director-led by Maru Urban**, sits at the top of the ladder as the next chapter — for the sailor who is no longer asking "should I race?" but "how far can I take this?"`,
  },
  bay: {
    eyebrow: "The Bay",
    headline: "Year-round water, year-round training.",
    prose1:
      "Biscayne Bay gives us **365 sailable days**, water that averages **76°F**, and no off-season. The same chop that produced David Hughes runs the same line today, every week of the year.",
    prose2Pre:
      "Our home dock at 2990 S. Bayshore Drive is a short reach from the windward marks of every major South Florida regatta. Racing Teams practice on the same water we race on. There is no ",
    prose2Em: "training pond",
    prose2Post: ".",
  },
  methodology: {
    eyebrow: "Methodology",
    headline: "How we coach.",
    intro:
      "CGSC's Racing Teams method rests on **five fundamentals**. They aren't slogans. They are how every practice, every debrief, and every regatta brief is structured.",
    methods: [
      {
        text: "**Watermanship first.** Reading the Bay — wind clocks, tide shifts, current eddies — comes before tactics. The boat follows if the water doesn't surprise you.",
      },
      {
        text: "**Coach the sailor, not the rule book.** Every sailor's path is different. We adjust the rig, the goals, and the pressure to who's actually in the boat.",
      },
      {
        text: "**Race the curriculum.** Tactics aren't chalkboard exercises. From a first regatta to Olympic trials, racing is how we teach.",
      },
      {
        text: "**Results in the boat.** Talk is for the dock. Wins, fleet-relative finishes, position improvements — we measure where it counts.",
      },
      {
        text: "**The best still trim sails.** Olympic medalists drill the basics. So do our juniors. Mastery is a return, not an arrival.",
      },
    ],
  },
  pathway: {
    eyebrow: "The Pathway",
    headline: "Four rungs, one ladder.",
    sub: "Click a rung to see where it leads — ages, training cadence, fleet, and what comes next. Default: Race.",
    activeRung: "race",
    rungs: [
      {
        rung: "discover",
        name: "Discover",
        age: "Age 6–9",
        desc: "First time on the water. Optimist dinghies, calm Bay days, learning by playing. The dock becomes a familiar place; sailing becomes a thing you do.",
        meta: ["1× / Week", "Coach-led", "Year-round"],
        img: "/assets/pathway/discover.jpg",
        tint: "#1A3A8A",
      },
      {
        rung: "develop",
        name: "Develop",
        age: "Age 10–13",
        desc: "Sailors take ownership of the boat. Tactics, weather, first overnight regattas. The transition from \"sailing class\" to \"I am a sailor.\"",
        meta: ["2× / Week", "Coach-led", "Year-round"],
        img: "/assets/pathway/develop.jpg",
        tint: "#2A5179",
      },
      {
        rung: "race",
        name: "Race",
        age: "Age 14–18",
        desc: "Where the team years pay off. Sailors take the skills built on the Racing Teams to national and international regattas — representing the club and the United States, and coming home with results.",
        meta: ["3× / Week", "Coach-led", "Year-round"],
        img: "/assets/pathway/race.jpg",
        tint: "#0F2660",
      },
      {
        rung: "beyond",
        name: "Beyond",
        age: "After the program",
        desc: "Sailors leave the program with the skills to compete at the highest levels of the sport — should they choose to. And with the club's history of hosting major international and Olympic-class events, that level of racing happens on their home waters.",
        meta: ["Alumni", "Olympic-class regattas", "Home waters"],
        img: "/assets/pathway/beyond.jpg",
        tint: "#142A66",
        link: {
          label: "ISAF Sailing World Cup Miami — raced on Biscayne Bay →",
          href: "https://www.yachtsandyachting.com/news/167796/ISAF-Sailing-World-Cup-Miami-overall",
        },
      },
    ],
  },
  coaches: {
    eyebrow: "Coaches",
    headlinePre: "Coached at ",
    headlineEm: "every level",
    headlinePost: " of the sport.",
    prose1:
      "The Racing Teams' coaching staff has seen every level of the sport — youth fleets, college nationals, World Sailing circuits, and Olympic campaigns — and coaches on the same waters our sailors race.",
    prose2:
      "We don't rotate coaches by program. **The same staff that runs the Racing Teams also coaches the High Performance Center.** Continuity from a sailor's first regatta through their last is the point.",
    rosterLabel: "Meet the coaches →",
    rosterHref: "/about#coaches",
  },
  regattas: {
    eyebrow: "Selected regattas",
    headline: "Where we race.",
    sub: "A slice of the 30+ regatta season. See the full calendar for everything else — Racing Teams sailors typically compete in 12–18 events per year.",
    cards: [
      {
        datePre: "April 10–12, 2026",
        dateTbd: "",
        name: "Don Q Rum Keg Regatta",
        meta: "Snipe class · Hosted by CGSC · Biscayne Bay",
        verified: "Confirmed",
      },
      {
        datePre: "Late December ",
        dateTbd: "date TBD",
        name: "Orange Bowl International Youth",
        meta: "Optimist / 420 / Laser / 29er · Coral Reef Yacht Club & CGSC",
        verified: "",
      },
      {
        datePre: "Summer ",
        dateTbd: "date TBD",
        name: "Optimist Red, White & Blue",
        meta: "National Optimist regatta · CGSC host weekend",
        verified: "",
      },
      {
        datePre: "Fall ",
        dateTbd: "date TBD",
        name: "CGSC Team Race Invitational",
        meta: "3-on-3 team racing · College & high-school fleets",
        verified: "",
      },
    ],
    ctaLabel: "See the full calendar →",
    ctaHref: "/calendar",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions.",
    items: [
      {
        q: "Who are the Racing Teams for?",
        a: "Sailors ages 10–18 who want to compete. Entry is by tryout, but we hold an open practice each season — anyone interested can come sail with the team and find out if it's the right fit before committing.",
      },
      {
        q: "What boats do you sail?",
        a: "Optimist for younger juniors. 420 and Laser through the Race rung. High Performance Center sailors campaign Olympic-class equipment (49er, ILCA, FX) and travel boats where the campaign requires it.",
      },
      {
        q: "How does year-round training work?",
        a: "Practices run 3–4 days per week year-round. Sessions adjust to school schedules during the year and step up to longer days during summer and winter breaks. Race weekends are roughly two per month.",
      },
      {
        q: "How is it different from the Junior Academy?",
        a: "There is no separate Junior Academy. The Racing Teams are the junior development program at CGSC — every sailor enters here. Younger and entry-level sailors start on the Discover and Develop rungs; the Youth Sailing program offers casual or seasonal alternatives.",
      },
      {
        q: "Can my child try before committing?",
        a: "Yes. Open practices happen multiple times a season, and we run discovery weeks during school breaks. Use the inquiry form below and Maru or Rosa will be in touch.",
      },
      {
        q: "What's the path beyond CGSC?",
        a: "College sailing recruitment, US Sailing youth and senior teams, and beyond the program, Olympic and professional campaigns. The High Performance Center is built specifically to shepherd this transition.",
      },
    ],
  },
  manifesto: {
    ariaLabel: "Racing Teams manifesto",
    lines: [
      { text: "Read the wind.", accent: false },
      { text: "Trim your sails.", accent: true },
      { text: "Win the race.", accent: false },
    ],
  },
  inquiry: {
    eyebrow: "Join the team",
    headline: "Ready to race?",
    sub: "Tell us a bit about the sailor and a coach will be in touch within two days. Open practices and discovery weeks are scheduled regularly — we'll find the right entry point.",
    ctaLabel: "Contact us to get started →",
    ctaHref: "/contact",
  },
};

export type RaceTeamContent = typeof RACE_TEAM_CONTENT;
