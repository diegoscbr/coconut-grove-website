// Youth Sailing page content — hero only.
// (The page reads as "Youth Sailing"; the route/file stays camps-coaching.)
// The page body is the Summer Camp 2026 section (lib/content/summerCamp.ts).
// The pre-2026-07-21 sections (intro, camps grid, private coaching, FAQ,
// inquire) were removed at the client's request; copy lives in git history.
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
};

export type CampsCoachingContent = typeof CAMPS_COACHING_CONTENT;
