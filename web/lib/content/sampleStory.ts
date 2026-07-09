// Sample story / article detail — exact copy ported from
// prototype/calendar/sample-story.html.
// Single source of truth: renders as a fallback (1:1 replica with zero setup)
// AND seeds Sanity.

// An inline run inside a paragraph or blockquote. Plain text renders through
// <Rich> (so **bold** becomes <b>); `href` makes it a link; `em` wraps in <em>.
type Part = { text: string; href?: string; em?: boolean };

// A block in the article body. `kind` discriminates the wrapper element.
type Block = { kind: "p" | "h2" | "quote"; text?: string; parts?: Part[]; cite?: string };

type SampleStory = {
  hero: {
    crumbs: { label: string; href: string }[];
    crumbSep: string;
    crumbCurrent: string;
    title: string;
    subheadEm: string;
    subheadRest: string;
  };
  article: {
    meta: { cat: string; byline: string; info: string };
    leadImgLabel: string;
    body: Block[];
    backLabel: string;
    backHref: string;
  };
  related: {
    eyebrow: string;
    headline: string;
    cards: {
      href: string;
      mediaClass: string;
      eyebrow: string;
      eyebrowClass: string;
      title: string;
      meta: string;
    }[];
  };
};

export const SAMPLE_STORY_CONTENT: SampleStory = {
  hero: {
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Calendar", href: "/calendar" },
    ],
    crumbSep: "→",
    crumbCurrent: "Story",
    title: "Maru Urban joins as Director of Sailing Performance",
    subheadEm: "The next chapter of the CGSC pathway begins.",
    subheadRest: " A note from the dock on what changes — and what doesn't.",
  },
  article: {
    meta: {
      cat: "Feature",
      byline: "By Lauren Simpson · General Manager",
      info: "2026 · 4 min read",
    },
    leadImgLabel: "Maru Urban on the Coconut Grove dock — placeholder image",
    body: [
      {
        kind: "p",
        parts: [
          {
            text:
              "Coconut Grove Sailing Club has been the training ground for sailors at every level for the better part of a century. We were founded in 1946 by a small group of Miami sailors who wanted a place built for sailing, not for show. That ethos hasn't moved. What's moving is the ambition.",
          },
        ],
      },
      {
        kind: "p",
        parts: [
          { text: "This season, the Instructional Center is opening its next chapter with the addition of " },
          { text: "Maru Urban", href: "/about#coaches" },
          {
            text:
              " as our incoming Director of Sailing Performance & Development. Maru brings a depth of coaching that connects junior racing to Olympic-level competition — the full ladder our pathway has always pointed toward.",
          },
        ],
      },
      { kind: "h2", text: "What changes" },
      {
        kind: "p",
        parts: [
          { text: "The biggest change is structural. The High Performance Center, formerly a stand-alone idea, is now the " },
          { text: "**apex of a unified Racing Teams pathway**" },
          {
            text:
              ". Junior racers, club racers, and campaign-level competitors all feed the same ladder, with the same staff coaching them through every rung.",
          },
        ],
      },
      {
        kind: "quote",
        parts: [
          {
            text:
              "We don't separate programs by ambition; we separate them by stage. Wherever you start, the next rung is one practice away.",
          },
        ],
        cite: "— Maru Urban, Director of Sailing Performance & Development",
      },
      { kind: "h2", text: "What doesn't" },
      {
        kind: "p",
        parts: [
          {
            text:
              "Practically everything else. We still teach watermanship before tactics. We still hold open practices for anyone curious about the team. The Adult Sailing program is unchanged in shape (and in some places gets ",
          },
          { text: "more", em: true },
          {
            text:
              " coach attention from the new structure). The camps run on the same calendar; the dock is in the same place; coffee shows up Saturday mornings whether or not anyone planned it.",
          },
        ],
      },
      {
        kind: "p",
        parts: [
          {
            text:
              "If you're a current CGSC sailor or family, you won't see anything go away. You'll see the ladder you're already on get taller — and the rungs get clearer.",
          },
        ],
      },
      { kind: "h2", text: "What's next" },
      {
        kind: "p",
        parts: [
          { text: "We're hosting an open practice for prospective Racing Teams families on a date in the coming weeks — sign up via the " },
          { text: "inquiry form", href: "/contact" },
          { text: " or call the office. The full 2026 calendar is on the " },
          { text: "calendar page", href: "/calendar" },
          { text: " as dates firm up." },
        ],
      },
      {
        kind: "p",
        parts: [
          {
            text:
              'And if you\'ve never sailed at CGSC — or anywhere — this is a good moment to start. We have beginner cohorts running in Adult Sailing every season, and the Youth Sailing team can take a six-year-old from "never on a boat" to "running a regatta" in less time than you think.',
          },
        ],
      },
    ],
    backLabel: "← Back to the calendar",
    backHref: "/calendar",
  },
  related: {
    eyebrow: "Read next",
    headline: "More from the dock.",
    cards: [
      {
        href: "/calendar/sample-story",
        mediaClass: "race",
        eyebrow: "Race result",
        eyebrowClass: "race",
        title: "CGSC sailors finish top-5 in regional 420 series",
        meta: "Racing Teams · 2026 spring",
      },
      {
        href: "/calendar/sample-story",
        mediaClass: "feature",
        eyebrow: "Coach's notebook",
        eyebrowClass: "",
        title: "Reading the Bay: a coach's guide for the first season",
        meta: "By Raul Ramos · 2026",
      },
      {
        href: "/calendar/sample-story",
        mediaClass: "",
        eyebrow: "Program news",
        eyebrowClass: "",
        title: "2026 schedule: registration opens for adult cohorts",
        meta: "Adult Sailing · By Rosa Lamela",
      },
    ],
  },
};

export type SampleStoryContent = typeof SAMPLE_STORY_CONTENT;
