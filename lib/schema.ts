// JSON-LD builders. First structured data on the site, added for the Adult
// Sailing build specification (Part 3), which asks for three blocks: Course
// for every certification course, FAQPage, and SportsActivityLocation.
//
// The blocks are generated from the content objects rather than hand-written,
// so a copy edit cannot leave the schema behind. The specification is blunt
// about why: "Stale dates in schema are worse than none."

const ORG_NAME = "CGSC Instructional Center";
const ORG_URL = "https://www.cgscic.org";

export const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "2990 S Bayshore Drive",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33133",
  addressCountry: "US",
} as const;

type MetaRow = { dt: string; dd: string };

export type SchemaCourse = {
  name: string;
  desc: string;
  meta: readonly MetaRow[];
  /**
   * Concrete runs of the course, as ISO dates. Courses that recur monthly or
   * run by request carry none, and then no dates reach the schema — which the
   * specification prefers to dates that have gone stale.
   *
   * For courses whose dates are a list of evenings (Coastal and Celestial
   * Navigation), one session spans the first evening to the last.
   */
  sessions?: readonly { startDate: string; endDate: string }[];
};

/** Reads the non-member price out of a course's cost row. */
export function nonMemberPrice(meta: readonly MetaRow[]): number | null {
  for (const row of meta) {
    const nonMember = row.dd.match(/\$([\d,]+)\s*Non-Members/i);
    if (nonMember) return Number(nonMember[1].replace(/,/g, ""));
  }
  // Courses priced as a single fee rather than a member split, e.g. the
  // certification exam.
  for (const row of meta) {
    if (!/^cost$/i.test(row.dt) && !/certification cost/i.test(row.dt)) continue;
    const flat = row.dd.match(/\$([\d,]+)/);
    if (flat) return Number(flat[1].replace(/,/g, ""));
  }
  return null;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Build-time guard against the exact failure the specification warns about:
 * ISO session dates drifting away from the human-readable schedule text that
 * sits beside them. Every page on this site is prerendered, so a mismatch
 * fails `npm run build` rather than shipping wrong dates to search engines.
 */
function assertSessionsMatchCopy(course: SchemaCourse): void {
  if (!course.sessions?.length) return;
  const copy = course.meta
    .filter((row) => /^(schedule|dates)$/i.test(row.dt))
    .map((row) => row.dd)
    .join(" ");
  if (!copy) {
    throw new Error(
      `[schema] "${course.name}" has sessions but no Schedule or Dates row to check them against.`,
    );
  }
  for (const session of course.sessions) {
    for (const iso of [session.startDate, session.endDate]) {
      const [yearText, monthText, dayText] = iso.split("-");
      const month = MONTHS[Number(monthText) - 1];
      const day = String(Number(dayText));
      const hasMonth = copy.includes(month);
      // Match the day as a whole number so "5" does not satisfy itself via "15".
      const hasDay = new RegExp(`\\b${day}\\b`).test(copy);
      const hasYear = copy.includes(yearText);
      if (!hasMonth || !hasDay || !hasYear) {
        throw new Error(
          `[schema] "${course.name}": session date ${iso} is not in its schedule copy ` +
            `(${JSON.stringify(copy)}). Update both, or drop the session.`,
        );
      }
    }
  }
}

export function courseSchema(course: SchemaCourse) {
  assertSessionsMatchCopy(course);
  const price = nonMemberPrice(course.meta);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.desc,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: ORG_URL,
    },
    ...(price === null
      ? {}
      : {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: "USD",
            category: "Non-member",
            availability: "https://schema.org/InStock",
          },
        }),
    ...(course.sessions?.length
      ? {
          hasCourseInstance: course.sessions.map((session) => ({
            "@type": "CourseInstance",
            courseMode: "Onsite",
            startDate: session.startDate,
            endDate: session.endDate,
            location: {
              "@type": "Place",
              name: "Coconut Grove Sailing Club",
              address: POSTAL_ADDRESS,
            },
          })),
        }
      : {}),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function sportsActivityLocationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: ORG_NAME,
    url: ORG_URL,
    telephone: "+1-305-747-2600",
    email: "adultsailing@cgsc.org",
    address: POSTAL_ADDRESS,
  };
}

/** Serializes a block for a <script type="application/ld+json"> tag. */
export function jsonLd(block: unknown): string {
  // `<` is escaped so a stray closing tag in copy cannot break out of the
  // script element.
  return JSON.stringify(block).replace(/</g, "\\u003c");
}
