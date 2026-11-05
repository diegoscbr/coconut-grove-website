// Winter Break Camp page — "Winter Break Camp Page — Build Specification"
// (prepared 22 Sept 2026). "Copy is ready to use as written." Every string below
// is the specification's, verbatim, except where a comment says otherwise.
//
// The URL is permanent (/winter-camp, never /winter-camp-2026). Each January the
// specification has the dates and prices replaced in place: edit `sessions`,
// the FAQ answers that repeat them, and `lastUpdated` together. The build
// checks the first two agree (see assertSessionsInCopy below).
//
// Single source of truth — edit this file to change the page's copy.

export const WINTER_CAMP_REGISTRATION_URL =
  "https://theclubspot.com/register/camp/euGCmzrjBY/class";

/** Shown on the page and sent as dateModified. Bump on every edit. */
export const WINTER_CAMP_LAST_UPDATED = { iso: "2026-10-18", text: "October 18, 2026" };

export type WinterSession = {
  name: string;
  /** Schema name suffix, from Section 6 of the specification. */
  schemaName: string;
  dates: string;
  startDate: string;
  endDate: string;
  tuition: number;
  note: string;
};

const SESSIONS: WinterSession[] = [
  {
    name: "Session 1",
    schemaName: "Winter Break Sailing Camp - Session 1",
    dates: "December 21–24, 2026",
    startDate: "2026-12-21",
    endDate: "2026-12-24",
    tuition: 425,
    note: "Four days, Monday through Thursday.",
  },
  {
    name: "Session 2",
    schemaName: "Winter Break Sailing Camp - Session 2",
    dates: "December 28–31, 2026",
    startDate: "2026-12-28",
    endDate: "2026-12-31",
    tuition: 425,
    note: "Four days, Monday through Thursday.",
  },
  {
    name: "Session 3",
    schemaName: "Winter Break Sailing Camp - Both Sessions",
    dates: "December 21–31, 2026",
    startDate: "2026-12-21",
    endDate: "2026-12-31",
    tuition: 800,
    note: "Both sessions, eight days on the water. Saves $50 over booking them separately.",
  },
];

const FAQ = [
  {
    question: "When is winter break camp?",
    answer:
      "Winter break camp runs as two four-day sessions: December 21 to 24 and December 28 to 31, 2026. Each session runs Monday through Thursday, 8:30 AM drop-off to 3:30 PM pickup. Camp is closed on Christmas Day and New Year’s Day.",
  },
  {
    question: "How much does winter camp cost?",
    answer:
      "A single four-day session is $425. Both sessions together are $800, which saves $50 over booking them separately. Registration is open on ClubSpot.",
  },
  {
    question: "Can my child do just one week?",
    answer:
      "Yes. Most campers do one session. You can register for December 21 to 24, for December 28 to 31, or for both at the combined rate. All three options appear on the same registration page.",
  },
  {
    question: "What age is winter camp for?",
    answer:
      "Ages 6 to 16. Children ages 6 to 11 sail Optimists, teens ages 12 to 16 sail in their own group, and windsurfing is open to ages 6 to 16. You choose the group at registration.",
  },
  {
    question: "Does my child need sailing experience?",
    answer:
      "No. Every group has room for complete beginners, and beginners are coached separately from returning sailors.",
  },
  {
    question: "Is lunch provided?",
    answer:
      "No. Campers bring their own lunch and snacks each day. There is no refrigeration at the club, so pack accordingly.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Camp is not cancelled for rain or heavy winds. When there is heavy rain or lightning, campers move to rainy-day activities on land. On the rare day when weather persists, parents are notified through the camp announcements group and given the option to pick up early.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Cancellation requests must be emailed to icmanager@cgsc.org before the session begins; refunds are issued minus the registration platform fees. Once a session has started there are no refunds, except for withdrawal for a medical reason with a doctor’s note, which is refunded for the unused portion of the session, prorated by day and minus platform fees.",
  },
];

/**
 * The tuition figures appear twice: in the session cards (from `tuition`) and
 * inside the FAQ prose, which assistants quote. The specification: "Conflicting
 * numbers across pages make a model hedge or skip you." Fail the build if a
 * session's price ever stops appearing in the cost answer. Every route is
 * prerendered, so this throws during `npm run build`, never at a visitor.
 */
function assertSessionsInCopy(sessions: WinterSession[], faq: typeof FAQ): WinterSession[] {
  const cost = faq.find((item) => item.question === "How much does winter camp cost?");
  for (const session of sessions) {
    if (!cost?.answer.includes(formatTuition(session.tuition))) {
      throw new Error(
        `[winter-camp] ${session.name} tuition ${formatTuition(session.tuition)} is not in ` +
          `the "How much does winter camp cost?" answer. Update both together.`,
      );
    }
  }
  return sessions;
}

export function formatTuition(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export const WINTER_CAMP_CONTENT = {
  registrationUrl: WINTER_CAMP_REGISTRATION_URL,
  seo: {
    title: "Winter Break Sailing Camp in Miami | Coconut Grove Sailing Club",
    description:
      "Four-day winter break sailing camps for kids and teens ages 6-16 on Biscayne Bay, December 21-24 and December 28-31, 2026. Learn to sail Optis, teen sailing and windsurfing in Coconut Grove, Miami.",
    canonical: "https://www.cgscic.org/winter-camp",
    // Interim. The specification lists "No photographs yet" as open; this is
    // the youth sailing photo already used across the site. Not 1200x630.
    ogImage: "https://www.cgscic.org/assets/heroes/camps.jpg",
  },
  hero: {
    // Breadcrumb links back to Youth Sailing, one of the specification's
    // internal links (/winter-camp → /youth-sailing, anchor "Youth Sailing").
    breadcrumbCurrent: "Winter Break Camp",
    h1: "Winter Break Sailing Camp in Miami",
    subhead: "Ages 6 to 16 · December 21–24 and December 28–31, 2026 · on Biscayne Bay",
  },
  sessions: {
    headline: "Two Four-Day Sessions Over the Holidays",
    intro:
      "Winter break is a good time to try sailing for the first time, or to keep skills sharp between seasons. Our winter camp runs as two four-day sessions during the holiday weeks, with no experience required. Campers are grouped by age and by what they want to sail, and spend the day on Biscayne Bay with our coaches. Camp is closed on Christmas Day and New Year’s Day.",
    label: "Sessions and tuition",
    items: assertSessionsInCopy(SESSIONS, FAQ),
    ctaLabel: "Register for Winter Camp",
    ctaNote: "Registration is open. All three session options are on the registration page.",
  },
  groups: {
    headline: "What Your Child Will Sail",
    intro:
      "Choose the group at registration. Beginners and returning sailors are coached separately, so a first-timer is never trying to keep up with a child who has been sailing for three years.",
    items: [
      {
        name: "Learn to Sail Optis",
        ages: "Ages 6–11",
        body: "The Optimist is the boat nearly every young sailor starts in. Campers learn to rig it, steer it, tack and handle themselves on the water.",
      },
      {
        name: "Teen Sailing",
        ages: "Ages 12–16",
        body: "Teens starting out sail boats sized for them, in a group of their own age rather than alongside much younger children.",
      },
      {
        name: "Learn to Windsurf",
        ages: "Ages 6–16",
        body: "A different way onto the water, for the child who would rather stand up than sit down. No experience needed here either.",
      },
    ],
  },
  day: {
    headline: "A Day at Camp",
    columns: ["Time", "What happens"],
    rows: [
      { time: "8:30–9:00 AM", what: "Drop-off" },
      { time: "9:00–11:45 AM", what: "Rigging, chalk talk, land drills and sailing" },
      { time: "11:45 AM–12:45 PM", what: "Lunch" },
      { time: "12:45–3:25 PM", what: "Back on the water, then derig and debrief" },
      { time: "3:30–4:00 PM", what: "Pickup" },
    ],
    note: "After care is offered during summer camp only. Winter camp days end at pickup.",
  },
  bring: {
    headline: "What to Bring",
    body: "Each day your camper needs a properly fitted US Coast Guard-approved life jacket, a labeled water bottle, lunch and snacks, closed-toe water shoes, sun protection, a towel and a dry change of clothes. Please label everything with your child’s name.",
    // The specification's link "Please read the full camp policies here"
    // points at /camp-policies, which does not exist yet (its own Open Items).
    // Left out rather than shipped as a dead link. Add it when the page lands:
    //   policiesLabel: "Please read the full camp policies here",
    //   policiesHref: "/camp-policies",
  },
  faq: {
    // The heading structure (Section 2) and mobile requirements both call
    // this "Common Questions"; the copy section's "Frequently Asked
    // Questions" reads as a label for the section, not a heading.
    headline: "Common Questions",
    items: FAQ,
  },
  contact: {
    headline: "Questions About Winter Camp",
    body: "Not sure which group fits your child, or whether one session or both makes more sense? Get in touch before you register and we will help you decide.",
    name: "Rosa Lamela",
    role: "Director of Programs & Development",
    email: "icmanager@cgsc.org",
    phoneText: "305.747.2600",
    phoneHref: "tel:+13057472600",
  },
};

export type WinterCampContent = typeof WINTER_CAMP_CONTENT;
