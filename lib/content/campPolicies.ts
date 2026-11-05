// Camp Policies page — "Camp Policies & What to Expect" (CGSCIC Camp Policies,
// October 2026). The body copy is the client's PDF, verbatim, em dashes and
// all (client copy keeps its wording). Headings in `toc` are ours.
//
// Single source of truth — edit this file to change the page's copy.

export const CAMP_POLICIES_LAST_UPDATED = { iso: "2026-10-01", text: "October 2026" };

/**
 * The PDF links "CGSCIC Sailor Code of Conduct" to an Acrobat share ID, which
 * is not a document. Until the client sends the text this points at the
 * planned on-site path and 404s on purpose (agreed 2026-11-05).
 */
export const CODE_OF_CONDUCT_HREF = "/camp-policies/code-of-conduct";

export const CAMP_POLICIES_CONTENT = {
  seo: {
    title: "Camp Policies and What to Expect | Coconut Grove Sailing Club",
    description:
      "A typical camp day, what to bring, how we stay in touch, drop-off and pickup, bad weather, refunds and the Sailor Code of Conduct for Instructional Center camps.",
    canonical: "https://www.cgscic.org/camp-policies",
  },
  hero: {
    breadcrumbCurrent: "Camp policies",
    h1: "Camp policies and what to expect",
    subhead:
      "A typical day, what to pack, how we stay in touch, and the few rules that keep the dock safe.",
  },
  tocLabel: "On this page",
  day: {
    id: "day",
    tocLabel: "A typical camp day",
    headline: "A Typical Camp Day",
    rows: [
      { time: "8:30 – 9:00 AM", what: "Drop-off" },
      { time: "9:00 – 11:45 AM", what: "Rigging, chalk talk, land drills, sailing" },
      { time: "11:45 AM – 12:45 PM", what: "Lunch" },
      {
        time: "12:45 – 3:25 PM",
        what: "Chalk talk, land drills as needed, sailing, return to dock, derig, debrief",
      },
      { time: "3:30 – 4:00 PM", what: "Pickup" },
      { time: "4:00 – 6:00 PM", what: "After care (summer camp only)" },
    ],
  },
  bring: {
    id: "bring",
    tocLabel: "What to bring",
    headline: "What to Bring",
    intro:
      "To keep your child safe, comfortable, and ready for the water, please send them each day with:",
    required: {
      label: "Required",
      items: [
        "US Coast Guard–approved life jacket, properly fitted",
        "Reusable water bottle, labeled with your child's name",
        "Lunch and snacks — no refrigeration available",
        "Closed-toe water shoes — no flip-flops or bare feet",
      ],
      sunLabel: "Sun protection:",
      sun: [
        "Sunscreen, applied before camp and packed for reapplication",
        "Hat or cap with a brim",
        "Sunglasses with a strap (recommended)",
      ],
    },
    clothing: {
      label: "Clothing",
      items: [
        "Lightweight, quick-drying clothes or UV-protective swimwear",
        "Towel",
        "A dry change of clothes in a labeled bag",
      ],
    },
    callout:
      "Please label everything with your child's name — especially life jackets, water bottles, and bags.",
  },
  touch: {
    id: "touch",
    tocLabel: "How we stay in touch",
    headline: "How We Stay in Touch",
    intro:
      "We keep it simple: two WhatsApp groups and a Google Photos album for each fleet. Links are sent before each session begins — please join both groups before the first day.",
    groups: [
      {
        name: "Camp Announcements",
        body: "Our official channel for the must-knows: weather calls, pickup reminders, and Parent's Day details. Only staff post here, so it stays clutter-free. Fleet photo albums are shared here too.",
      },
      {
        name: "Camp Logistics",
        body: "For late arrivals, lunchtime drop-offs and pickups, and absences. Please post here rather than texting a coach directly, so all your child's coaches see it.",
      },
    ],
    callout:
      "Use this quick format: child's name – fleet – what's happening. For example: \"Mia R – Optis – out sick today.\"",
    photos: {
      headline: "Photos & Videos",
      body: "Our coaches post photos and videos to a Photo album for each fleet at the end of each day — a lovely way to peek at your sailor's day. Album links are shared in the Announcements group each week and pinned to the top of the chat.",
    },
  },
  dropoff: {
    id: "dropoff",
    tocLabel: "Drop-off and pickup",
    headline: "Drop-Off & Pickup",
    blocks: [
      {
        headline: "Check-In and Check-Out",
        body: "Camper safety is our top priority, and knowing who is on the dock and who is leaving with whom is a big part of that. Every camper is checked in by a staff member at drop-off and checked out at pickup. We need your help to keep this process safe: please check in with us each morning before you leave, and check out with us each afternoon before your camper goes home. Teens permitted to leave on their own, with your written permission, must also check out with staff. We will send details on how check-in and check-out works before camp begins.",
      },
      {
        headline: "Please Don't Arrive Before 3:30 PM",
        body: "Responsibility is part of learning to sail. At the end of each day, campers help their coaches and fellow sailors rinse, derig, and put away the boats and equipment. When a camper spots a parent waiting, the tendency is to drop everything and leave friends to finish the job. If you arrive early, please wait upstairs on the balcony or in your car — out of sight of the dock — until 3:30.",
      },
      {
        headline: "Late Arrivals & Early Pickups",
        body: "Once we're out on the water, bringing a camper back to shore disrupts the whole group. Late drop-offs and early pickups are therefore during lunch only — usually 11:45 AM to 12:45 PM. Please post these to the Logistics chat group so we know when to expect your camper.",
      },
    ],
  },
  parking: {
    id: "parking",
    tocLabel: "Parking",
    headline: "Parking",
    body: "Parking inside the club is strictly for members. There is a Pay by Phone lot just outside the club. If metered parking isn't available, you're welcome to drop off or pick up at the gate — just let us know in the Logistics group so we can send your child out to meet you.",
  },
  weather: {
    id: "weather",
    tocLabel: "Bad weather",
    headline: "Bad Weather",
    strong: "Camp is not cancelled for rain or heavy winds.",
    body: "When there's heavy rain or lightning, we move to our rainy-day activities on land. On the rare day when weather persists, we'll let you know through the Announcements group and give you the option to pick up early. Campers may not call to request an early pickup on their own.",
  },
  refund: {
    id: "refund",
    tocLabel: "Refund policy",
    headline: "Refund Policy",
    paragraphs: [
      "Cancellation requests must be emailed to Rosa Lamela, Director of Programs & Development, at icmanager@cgsc.org before the session begins. Refunds are issued minus the registration platform fees.",
      "Once a session has started, no refunds are given. The one exception is withdrawal for a medical reason: submit a doctor's note and we'll refund the unused portion of the session, prorated by day, minus the platform fees.",
    ],
  },
  conduct: {
    id: "conduct",
    tocLabel: "Sailor Code of Conduct",
    headline: "Sailor Code of Conduct",
    body: "Before camp begins, please read our Sailor Code of Conduct together with your camper. Reviewing it as a family sets clear expectations from day one and helps every sailor feel safe and respected at camp.",
    linkLabel: "CGSCIC Sailor Code of Conduct",
    linkHref: CODE_OF_CONDUCT_HREF,
  },
  parents: {
    id: "parents",
    tocLabel: "Parent do's and don'ts",
    headline: "Parent Do's and Don'ts",
    dont: {
      label: "Please don't",
      items: [
        "Linger at the club past 9:00 AM. If your camper is nervous or teary at drop-off, the kindest thing you can do is give a hug, wish them a great day, and go. Once they see you've left, we can redirect their attention and get them connecting with other kids. We promise the tears pass quickly.",
        "Wait for your camper at the dock. We need that area completely clear to move boats safely through a narrow space.",
      ],
    },
    do: {
      label: "Please do",
      items: [
        "Introduce yourself to our coaches and director. We love getting to know you and sharing a little in-person feedback whenever we can.",
        "Contact Rosa Lamela immediately with any concern you or your child has about camp.",
        "Encourage your camper to speak up to any coach or to the director whenever something doesn't feel right, for any reason at all.",
        "Be patient with parking and with drop-off and pickup. Parking in the Grove is a challenge, and these things can take longer than they should.",
      ],
    },
  },
  contact: {
    id: "questions",
    tocLabel: "Questions",
    headline: "Questions?",
    name: "Rosa Lamela",
    role: "Director of Programs & Development",
    email: "icmanager@cgsc.org",
    phoneText: "305.747.2600",
    phoneHref: "tel:+13057472600",
  },
};

export type CampPoliciesContent = typeof CAMP_POLICIES_CONTENT;

/** In-page jump list, in page order. */
export function campPoliciesToc() {
  const c = CAMP_POLICIES_CONTENT;
  return [c.day, c.bring, c.touch, c.dropoff, c.parking, c.weather, c.refund, c.conduct, c.parents, c.contact].map(
    (s) => ({ id: s.id, label: s.tocLabel }),
  );
}
