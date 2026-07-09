// About page content — exact copy ported from prototype/about.html.
// This is the single source of truth: it renders as a fallback (so the page is
// a 1:1 replica with zero setup) AND seeds Sanity (initialValue on the schema).
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
    people: [
      { name: "Maru Urban", role: "Director · Sailing Performance & Development" },
      { name: "Steve Mitchell", role: "High Performance Lead" },
      { name: "Rosa Lamela", role: "Director of Programs Development" },
      { name: "Orlando Gonzalez", role: "ILCA Coach" },
      { name: "Lauren Simpson", role: "General Manager" },
      { name: "Raul Ramos", role: "Racing Teams Coach" },
      { name: "Aish Nedunchezhiyan", role: "Race Coach" },
      { name: "Oscar Sanchez Barreto", role: "Optimist Coach" },
      { name: "Kope Alfonso", role: "Opti Green Fleet Coach" },
      { name: "Norlem Garcia", role: "Foil & Windsurf Coach" },
      { name: "Sebastian Lopez", role: "Sailing Coach" },
      { name: "Jonathan Rodriguez", role: "Boat Maintenance" },
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
