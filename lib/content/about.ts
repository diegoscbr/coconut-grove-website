// About page content — exact copy ported from prototype/about.html.
// Single source of truth — edit this file to change the page's copy.
export const ABOUT_CONTENT = {
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbSep: "→",
    breadcrumbCurrent: "About",
    headline: "About the Instructional Center",
    subheadPre: "Eighty years on Biscayne Bay. ",
    subheadEm: "The story, the coaches, the standards.",
    subheadPost: " One scroll covers the club.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: {
    items: [
      { href: "#coaches", label: "Coaches", active: true },
      { href: "#heritage", label: "Mission", active: false },
    ],
  },
  coaches: {
    eyebrow: "The coaches",
    // Roster, titles, and tiering follow the client's "CGSCIC Coaching Staff"
    // organizational chart, 2026–2027 season. The chart's boxes collapse into
    // four bands by seniority: leadership, the coaches who head a fleet
    // ("Head" in their chart title), the rest of the coaching staff, and
    // Fleet Operations — which the chart keeps separate from coaching.
    // `lead` renders the band as a wider grid with larger portraits.
    // Nicknames stay inline in the name: that string is the lookup key for
    // lib/coachPhotos.ts, so the two must match byte for byte.
    tiers: [
      {
        label: "Leadership",
        lead: true,
        people: [
          { name: "Lauren Simpson", role: "General Manager" },
          {
            name: "Maru Urban",
            role: "Director · Sailing Performance & Development · ILCA Coach · High School Head Coach & C420 Instructor",
          },
          {
            name: "Rosa Lamela",
            role: "Director · Programs & Development · Opti Learn to Sail Coach",
          },
        ],
      },
      {
        label: "Head Coaches",
        lead: false,
        people: [
          { name: 'Diunieski "Koki" Gutierrez', role: "Head Opti RWB Coach" },
          { name: "Aish Nedunchezhiyan", role: "Head Green Fleet Coach" },
          { name: "Orlando Gonzalez", role: "Head ILCA Coach" },
          { name: "Justin Louden", role: "Head C420 Coach & High School Coach" },
          { name: "Norlem Garcia", role: "Head Windsurf & Wing Foil Coach" },
        ],
      },
      {
        label: "Coaching Staff",
        lead: false,
        people: [
          { name: "Steve Mitchell", role: "High Performance Coach · ILCA/RWB" },
          { name: "Raul Ramos", role: "Opti RWB Coach" },
          { name: 'Luis Orlando "Kope" Novoa', role: "Green Fleet Coach" },
          { name: "Halsey Richartz", role: "High School Regatta Coach" },
          { name: "Sebastian Lopez", role: "Opti Learn to Sail Coach" },
          { name: "Alastar Cook", role: "Opti Learn to Sail Coach" },
          { name: "Oscar Sanchez Barreto", role: "Opti Intermediate Development Coach" },
          { name: "Michelle Perera", role: "Opti Intermediate Coach" },
          { name: "Alex Figueroa", role: "ILCA Development Coach" },
          { name: "Erick Demario", role: "C420 Development Coach" },
        ],
      },
      {
        label: "Fleet Operations",
        lead: false,
        people: [
          { name: "Jonathan Rodriguez", role: "Powerboat Fleet Operations Manager" },
        ],
      },
    ],
    ctaLabel: "Schedule a coach conversation →",
    ctaHref: "/contact",
  },
  heritage: {
    eyebrow: "Heritage",
    headline: "A legacy born on Biscayne Bay.",
    prose1:
      "Founded in **1946** by a small group of passionate Miami sailors, the Coconut Grove Sailing Club began as little more than a dream — and a shack. With no clubhouse or moorings, early members anchored their boats in the bay and operated entirely on **volunteer spirit**, united by a love for sailing, a deep connection to Biscayne Bay, and a commitment to community service.",
    prose2:
      "Their mission was simple but powerful: to create a **safe, welcoming space to teach sailing** — especially to children — and to organize regattas that brought the community together on the water.",
    prose3:
      "Today, CGSC has grown into a **world-renowned sailing hub** with a full-service mooring field and a reputation for excellence in instruction and racing. Thousands have learned to sail here, and whether you're hoisting your first sail or returning for another season, there's no better place to begin your journey than right here on the bay.",
  },
  mission: {
    eyebrow: "The mission",
    headline: "Sailors at every level.",
    prose1:
      "As a nonprofit organization dedicated to championing the sport of sailing, we are committed to **advancing the sport and expanding its accessibility** by delivering exceptional, standards-based instruction at every level. We are passionately devoted to welcoming new sailors, preserving Coconut Grove's rich sailing tradition, and driven to delivering instruction that meets the **highest national standards** for safety, instruction and seamanship.",
    prose2:
      "The CGSC Instructional Center exists to take a sailor — at any level, of any age — and **move them up the ladder**. Sometimes that ladder ends at a Friday-night cruise; sometimes at an Olympic campaign. The slope between those two outcomes is what we coach.",
    prose3:
      "We don't separate programs by ambition; we separate them by stage. **The Racing Teams feed the High Performance Center. Youth Sailing feeds the Racing Teams. Adult Sailing parallels the whole ladder** — same coaches, same standards, different pace.",
  },
  inquiry: {
    eyebrow: "Come see the dock",
    headline: "Open houses, drop-ins, demo sails.",
    sub: "Open houses are scheduled regularly; demo sails are by appointment. Eighty years tells you what we've been; come see what we're doing now.",
    ctaLabel: "Visit / Inquire →",
    ctaHref: "/contact",
  },
};

export type AboutContent = typeof ABOUT_CONTENT;
