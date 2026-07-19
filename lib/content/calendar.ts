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
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=Y181OTc0MGJkZjgwYjc4MGZjYWM3Yjg5NjBmMTA4NDVkMWY5OTg3YWVlNjNhYWYwZTM5ZWYwMzc5ZTAyYzczMjA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19iNzQyNDFlY2NlNDk0MjI0MGRmMzQwOWMyODQ4OWMxZGIwNjljMWVhOTUxZjI3M2Q2OWUwNjI1NTE4YjY4YzI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23a32929&color=%23a32929",
    placeholderTag: "Coming soon",
    placeholderNote:
      "The event calendar will appear here — regattas, open practices, and Center events.",
  },
  newsletter: {
    tag: "Coming soon",
    headline: "The Instructional Center newsletter.",
    sub: "Monthly updates from the dock — program news, results, and what's ahead. Add your email in the footer below to be first on the list.",
  },
};

export type CalendarContent = typeof CALENDAR_CONTENT;
