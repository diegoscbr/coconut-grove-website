// Youth Sailing page content — exact copy ported from prototype/programs/camps-coaching.html.
// (The page reads as "Youth Sailing"; the route/file stays camps-coaching.)
// Single source of truth — edit this file to change the page's copy.
export const CAMPS_COACHING_CONTENT = {
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbProgramsLabel: "Programs",
    breadcrumbProgramsHref: "/programs",
    breadcrumbCurrent: "Youth Sailing",
    h1: "Youth Sailing",
    subheadBefore: "Seasonal camps, holiday clinics, and private coaching. ",
    subheadEmphasis: "Year-round entry points",
    subheadAfter:
      " for first-time sailors and the not-yet-decided-if-they're-serious.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#about", label: "The Program" },
    { href: "#camps", label: "Available Camps" },
    { href: "#private", label: "Private Coaching" },
    { href: "#faq", label: "FAQ" },
    { href: "#inquire", label: "Inquire" },
  ],
  intro: {
    eyebrow: "Youth Sailing",
    headline: "The entry point — and the way to keep sailing.",
    prose1:
      "Camps and Coaching are **how new sailors start at CGSC** and how members fill the gaps between weekly programs. School breaks, holiday weeks, summer afternoons, last-minute one-on-ones — if you want to sail and there isn't a class meeting tomorrow, this is the way.",
    prose2:
      "Every camp is led by the same coaches who run the Racing Teams and Adult Sailing. **Same boats, same coaches, same standards — just a different schedule.**",
  },
  camps: {
    countNumber: "6",
    countLabel: "available camps",
    filters: {
      label: "Filter",
      selects: [
        { ariaLabel: "Duration", options: ["Any duration", "1 day", "Weekend", "1 week", "2 weeks"] },
        { ariaLabel: "Age", options: ["Any age", "Ages 6–9", "Ages 10–13", "Ages 14–18", "Adults"] },
        { ariaLabel: "Level", options: ["Any level", "Beginner", "Intermediate", "Advanced"] },
      ],
    },
    cards: [
      {
        mediaClass: "camps",
        chips: [
          { label: "Ages 6–9", cls: "" },
          { label: "1 week", cls: "" },
          { label: "Summer", cls: "rust" },
        ],
        title: "Optimist Discovery Week",
        meta: "First-time sailors. Optimist dinghies. Calm Bay days.",
      },
      {
        mediaClass: "",
        chips: [
          { label: "Ages 10–13", cls: "" },
          { label: "2 weeks", cls: "" },
          { label: "Summer", cls: "rust" },
        ],
        title: "Junior Intensive",
        meta: "Develop-rung sailors. 420s, tactics, first race weekends.",
      },
      {
        mediaClass: "race",
        chips: [
          { label: "Ages 14–18", cls: "" },
          { label: "1 week", cls: "" },
          { label: "Winter break", cls: "" },
        ],
        title: "Racing Teams Prep",
        meta: "Pre-season conditioning. Open to Racing Teams prospects.",
      },
      {
        mediaClass: "event",
        chips: [
          { label: "Adults", cls: "" },
          { label: "Weekend", cls: "" },
          { label: "Beginner", cls: "" },
        ],
        title: "Adult Discovery Weekend",
        meta: "Two-day adult intro. No experience required.",
      },
      {
        mediaClass: "",
        chips: [
          { label: "All ages", cls: "" },
          { label: "1 day", cls: "" },
          { label: "Spring break", cls: "rust" },
        ],
        title: "Spring Break Sail Day",
        meta: "One-day camps each day of the week. Drop-in welcome.",
      },
      {
        mediaClass: "camps",
        chips: [
          { label: "Ages 10–13", cls: "" },
          { label: "1 week", cls: "" },
          { label: "Holiday week", cls: "" },
        ],
        title: "Holiday Junior Camp",
        meta: "For school-break weeks. Half-day mornings on the water.",
      },
    ],
  },
  private: {
    eyebrow: "Private Coaching",
    headline: "One coach, one sailor, one boat.",
    prose1:
      "Private coaching is on-demand and one-on-one — for sailors who need to **fix a specific thing**, prep for a specific regatta, or get unstuck. Schedule is flexible. The coach you work with is the one with the right specialty.",
    prose2Pre: "Booked through Maru or Rosa. ",
    prose2Bold: "Hourly rates are ",
    prose2Tbd: "TBD",
    prose2Post: " — being finalized for the 2026 season. Email for current rates.",
    ctaHref: "mailto:icmanager@cgsc.org",
    ctaLabel: "Email to book →",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions.",
    items: [
      {
        summary: "How do camps differ from the Racing Teams or Adult programs?",
        bodyPre:
          "Camps are **time-bound** — a week, a weekend, a single day. Racing Teams and Adult Sailing are **ongoing year-round programs**. Same coaches teach both; camps are how you try the water before committing.",
        linkHref: "",
        linkText: "",
        bodyPost: "",
      },
      {
        summary: "Does my kid need to know how to sail to come to a camp?",
        bodyPre:
          "No. We run discovery-level camps for absolute beginners every season. Ages 6–9 typically start in Optimist dinghies on calm Bay days with two coaches per group.",
        linkHref: "",
        linkText: "",
        bodyPost: "",
      },
      {
        summary: "How does private coaching get scheduled?",
        bodyPre: "Email ",
        linkHref: "mailto:icmanager@cgsc.org",
        linkText: "icmanager@cgsc.org",
        bodyPost:
          " with what you're working on and when you want to sail. Maru or Rosa will match you with the right coach and confirm available dates within two days.",
      },
      {
        summary: "What's the equipment situation?",
        bodyPre:
          "Boats and gear are included for all camps. Sailors bring their own sun protection, water, and shoes that can get wet. Everything else is on the dock.",
        linkHref: "",
        linkText: "",
        bodyPost: "",
      },
      {
        summary: "How do I know if a camp is the right fit?",
        bodyPre:
          "Open practices happen multiple times each season — free, no commitment, just come by the dock. Use the form below or call the office and we'll point you to the next one.",
        linkHref: "",
        linkText: "",
        bodyPost: "",
      },
    ],
  },
  inquire: {
    eyebrow: "Sign up",
    headline: "Pick a camp, or ask which one.",
    sub: "Tell us a bit about the sailor — we'll send back the next available camp dates and any open spots.",
    form: {
      eyebrow: "Youth Sailing — inquire",
      headlinePre: "Tell us about the sailor — ",
      headlineEmphasis: "we'll suggest a camp.",
      helper:
        "No commitment. We'll send back upcoming camps that fit, with dates and open-spot counts.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Email",
      agePlaceholder: "Sailor's age",
      campTypeOptions: [
        "Camp type",
        "Summer camp (week)",
        "Spring / winter break",
        "Weekend camp",
        "Single-day drop-in",
        "Private coaching",
        "Not sure — help me figure it out",
      ],
      notesPlaceholder: "Experience level, dates that work, anything else (optional)",
      submitLabel: "Send →",
    },
    info: {
      eyebrow: "Direct line",
      phoneLabel: "Phone",
      phoneHref: "tel:+13054444571",
      phoneText: "(305) 444-4571",
      emailLabel: "Email",
      emailHref: "mailto:icmanager@cgsc.org",
      emailText: "icmanager@cgsc.org",
      visitLabel: "Visit the dock",
      addressLine1: "2990 S. Bayshore Drive",
      addressLine2: "Miami, FL 33133",
      footPre:
        "Camps fill quickly during school breaks — inquire early. Spots posted on the ",
      footLinkHref: "/calendar",
      footLinkText: "calendar",
      footPost: " as cohorts open.",
    },
  },
};

export type CampsCoachingContent = typeof CAMPS_COACHING_CONTENT;
