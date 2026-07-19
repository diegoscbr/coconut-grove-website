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
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=cgscic.org_t2d3e52a6eeia107198lt3orf0%40group.calendar.google.com&src=c_31c8750d3e8c2b896801c4ba8bf29ef8ad5f3860e17f09bf278e016075a0f283%40group.calendar.google.com&src=c_eedabf8a2d11479b9dd53faaaf6670b245ee3b0a9396d221993a35a3d8bb34cf%40group.calendar.google.com&src=c_fdf90ffa2383c2295d32fdedade09bf2967fd16e8b96587fd062f2fa4af9c87c%40group.calendar.google.com&src=c_08b26d5b9c58746fd032fc7abcef826a7a4eb699b7a8885fd979f15b163e8bb5%40group.calendar.google.com&src=c_c4dde58e1364dc6e876a690e373137e7b8c7c6ca06dcbf1dcaf547d52909cf21%40group.calendar.google.com&src=c_0581d4ababb7a8f2d06181b73adb417bd107b1da7ce3889a28cc15f0db0d9a9f%40group.calendar.google.com&src=c_e6a3f5e65584ab6e93e88ec469633031f97a26c997dda6636972ad60edea7495%40group.calendar.google.com&src=c_2a35d510b472e1e95682125614b11e69196572a00fb7b7d376bc1ec5ef6fd573%40group.calendar.google.com&src=c_9923de1b8ff273a26965720fc94763096f31249b84d8415ae92dcf68be5de81c%40group.calendar.google.com&color=%230C0969&color=%231B887A&color=%230D7813&color=%23FF8B5E&color=%23A32929&color=%234E4ACF&color=%23856508&color=%2329527A&color=%23616161&color=%23B08B59",
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
