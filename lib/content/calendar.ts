// Calendar page content — exact copy ported from prototype/calendar/index.html.
// Single source of truth — edit this file to change the page's copy.
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
  embed: {
    eyebrow: "Schedule",
    headline: "What's happening on the water.",
    // Google Calendar drop-in: paste the embed URL here and the calendar
    // renders automatically. Get it from Google Calendar → Settings → (your
    // calendar) → "Integrate calendar" → copy the src="..." URL from the
    // embed code (looks like https://calendar.google.com/calendar/embed?src=...).
    src: "",
    placeholderTag: "Coming soon",
    placeholderNote:
      "The event calendar will appear here — regattas, open practices, and Center events.",
  },
  newsletter: {
    tag: "Coming soon",
    headline: "The Instructional Center newsletter.",
    sub: "Monthly updates from the dock — program news, results, and what's ahead. Sign-up opens soon.",
  },
};

export type CalendarContent = typeof CALENDAR_CONTENT;
