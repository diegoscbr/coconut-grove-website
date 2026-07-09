// Racing Teams page content — exact copy ported from prototype/programs/race-team.html.
// Single source of truth: renders as a fallback (so the page is a 1:1 replica with
// zero setup) AND seeds Sanity (initialValue on the raceTeam schema).
export const RACE_TEAM_CONTENT = {
  hero: {
    breadcrumbHome: { label: "Home", href: "/" },
    breadcrumbPrograms: { label: "Programs", href: "/programs" },
    breadcrumbCurrent: "Racing Teams",
    h1: "Racing Teams",
    subheadPre: "The CGSC competitive pathway — junior to high performance. ",
    subheadEmphasis: "Develop. Race. Compete. Perform.",
    subheadPost: " Director-led, year-round, on Biscayne Bay.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#team", label: "The Team" },
    { href: "#methodology", label: "Methodology" },
    { href: "#pathway", label: "Pathway" },
    { href: "#coaches", label: "Coaches" },
    { href: "#stats", label: "Stats" },
    { href: "#regattas", label: "Regattas" },
    { href: "#faq", label: "FAQ" },
    { href: "#inquire", label: "Inquire" },
  ],
  intro: {
    eyebrow: "The Racing Teams",
    headline: "A pipeline, not a program.",
    prose1:
      "The CGSC Racing Teams are the **competitive spine of the Instructional Center**. Sailors enter as juniors, develop through fleet racing on Biscayne Bay, and exit into college, national, or Olympic-track competition. Five rungs, one ladder, the same coaches all the way up.",
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
    headline: "Five rungs, one ladder.",
    sub: "Click a rung to see where it leads — ages, training cadence, fleet, and what comes next. Default: Race.",
    activeRung: "race",
    rungs: [
      { rung: "discover", name: "Discover", age: "Age 6–9" },
      { rung: "develop", name: "Develop", age: "Age 10–13" },
      { rung: "race", name: "Race", age: "Age 14–18" },
      { rung: "compete", name: "Compete", age: "College / National" },
      { rung: "perform", name: "Perform", age: "Olympic / Pro" },
    ],
    detail: {
      name: "Race",
      age: "Age 14–18",
      desc: "Local and regional racing on 420s and Lasers. The CGSC Racing Teams compete in 30+ regattas a season — Miami, the Keys, the Bahamas.",
      meta: ["3× / Week", "Coach-led", "Year-round"],
    },
  },
  coaches: {
    eyebrow: "Coaches",
    headlinePre: "Directed by ",
    headlineEm: "Maru Urban",
    headlinePost: ".",
    prose1:
      "The Racing Teams are led by **Maru Urban**, incoming Director of Sailing Performance & Development, with a coaching team that has seen every level of the sport — youth fleets, college nationals, World Sailing circuits, and Olympic campaigns.",
    prose2:
      "We don't rotate coaches by program. **The same staff that runs the Racing Teams also coaches the High Performance Center.** Continuity from a sailor's first regatta through their last is the point.",
    rosterLabel: "Meet the full roster →",
    rosterHref: "/about#coaches",
    people: [
      { name: "Maru Urban", role: "Director · Sailing Performance & Development" },
      { name: "Steve Mitchell", role: "High Performance Lead" },
      { name: "Rosa Lamela", role: "Director of Programs Development" },
      { name: "Orlando Gonzalez", role: "ILCA Coach" },
      { name: "Lauren Simpson", role: "General Manager" },
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    headline: "Eighty years on the water.",
    sub: "The numbers behind the program. Olympian count and coach-to-sailor ratio are being verified with US Sailing records and will be locked before Phase 2.",
    tiles: [
      { num: "80", small: "", label: "Years on Biscayne Bay", tbd: false },
      { num: "—", small: "TBD", label: "Olympians in the lineage", tbd: true },
      { num: "7", small: "", label: "Full-time coaches", tbd: false },
      { num: "—", small: "TBD", label: "Coach-to-sailor ratio", tbd: true },
    ],
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
        a: "Optimist for younger juniors. 420 and Laser through the Race and Compete rungs. High Performance Center sailors campaign Olympic-class equipment (49er, ILCA, FX) and travel boats where the campaign requires it.",
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
        a: "College sailing recruitment, US Sailing youth and senior teams, and for the Perform rung, Olympic and professional campaigns. The High Performance Center is built specifically to shepherd this transition.",
      },
    ],
  },
  manifesto: {
    ariaLabel: "Racing Teams manifesto",
    lines: [
      { text: "Read the Bay.", accent: false },
      { text: "Trim the boat.", accent: true },
      { text: "Win the race.", accent: false },
    ],
  },
  inquiry: {
    eyebrow: "Join the team",
    headline: "Ready to race?",
    sub: "Tell us a bit about the sailor and a coach will be in touch within two days. Open practices and discovery weeks are scheduled regularly — we'll find the right entry point.",
    formEyebrow: "Inquire — Racing Teams",
    formHeadlinePre: "Tell us about the sailor — ",
    formHeadlineEm: "we'll find a way in.",
    formHelper:
      "No commitment, no fee. Open practices happen multiple times a season. Junior sailors can try before signing up.",
    parentNamePlaceholder: "Your name",
    emailPlaceholder: "Email",
    sailorNamePlaceholder: "Sailor's name",
    sailorAgePlaceholder: "Sailor's age",
    experienceLabel: "Sailing experience",
    experienceOptions: [
      "No experience yet",
      "Some sailing, no racing",
      "Racing in another fleet",
      "Already on a racing team elsewhere",
    ],
    rungLabel: "Which rung sounds right?",
    rungOptions: [
      "Discover (age 6–9)",
      "Develop (age 10–13)",
      "Race (age 14–18)",
      "Compete (college / national)",
      "Perform (HPC, Olympic track)",
      "Not sure — help me figure it out",
    ],
    notesPlaceholder: "Anything else we should know? (Optional)",
    submitLabel: "Send →",
    infoEyebrow: "Direct line",
    director: {
      lbl: "Racing Teams Director",
      name: "Maru Urban",
      small: "Director · Sailing Performance & Development",
    },
    phone: { lbl: "Phone", number: "(305) 444-4571", href: "tel:+13054444571" },
    email: { lbl: "Email", address: "icmanager@cgsc.org", href: "mailto:icmanager@cgsc.org" },
    visit: { lbl: "Visit the dock", line1: "2990 S. Bayshore Drive", line2: "Miami, FL 33133" },
    footPre:
      "We answer within two days. Open practices and discovery weeks are posted on the ",
    footLinkText: "calendar",
    footLinkHref: "/calendar",
    footPost: ".",
  },
};

export type RaceTeamContent = typeof RACE_TEAM_CONTENT;
