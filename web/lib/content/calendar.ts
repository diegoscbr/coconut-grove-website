// Calendar page content — exact copy ported from prototype/calendar/index.html.
// This is the single source of truth: it renders as a fallback (so the page is
// a 1:1 replica with zero setup) AND seeds Sanity.
export const CALENDAR_CONTENT = {
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbSep: "→",
    breadcrumbCurrent: "Calendar",
    headline: "What's happening at CGSC",
    subhead:
      "Regattas, training, open houses, and stories from the dock. ",
    subheadEm: "Events and news, one place.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
};

export type CalendarContent = typeof CALENDAR_CONTENT;
