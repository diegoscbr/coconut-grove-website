// Parent guide — punch list P1 (safety and instruction) and P2 (one table
// comparing every youth program by age, days and fee).
//
// SCOPE RULE, set by Diego 2026-10-09: no "TBD" copy anywhere. If a fact is not
// settled, the section does not exist. That is why this page has no weather
// cancellation section, no refund section, and no day-one packing list: P3 and
// P4 are still unanswered by Maru and Rosa. Add the section when the fact
// arrives, not a placeholder now.
//
// Settled and therefore included:
//   - US Sailing Accredited School + certified instructors. Not new copy; this
//     is already live and client-approved at lib/content/adultProgram.ts:46.
//   - USCG-approved life jackets. Confirmed by Diego as the whole life jacket
//     policy and cleared for copy.
// Explicitly dropped by Diego, do not add back without asking:
//   - coach-to-sailor ratios (not needed)
//   - safety boat counts (not needed)
//   - swim test language (none for now)
import { FALL_YOUTH_CONTENT, FALL_YOUTH_REGISTRATION_URL } from "@/lib/content/fallYouth";

export type ComparisonRow = {
  program: string;
  /** Age range as the club states it. Source noted per row below. */
  ages: string;
  /** Days per week on the water. Authored, not parsed: "Saturdays or Sundays"
   *  is one day and "Saturdays and Sundays" is two, which no regex gets right. */
  days: string;
  memberFee: string;
  nonMemberFee: string;
};

/**
 * Ages and days per program. Authored deliberately rather than parsed out of the
 * schedule prose. Sources:
 *   6–12  group heading "For beginner and novice sailors, ages 6–12"
 *   6+    FAQ, "Windsurfing also starts at age 6"
 *   9+    Wing Foiling description, "Ages 9+ welcome"
 *   12+   FAQ, "our bigger-boat development programs (ILCA and C420) begin at age 12"
 *   6–17  Home School Sailing description, "Ages 6–17 welcome"
 */
const PROGRAM_FACTS: Record<string, { ages: string; days: string }> = {
  "Discover Opti Sailing": { ages: "6–12", days: "1" },
  "After School Opti Sailing": { ages: "6–12", days: "2" },
  "After School + Weekend Combo": { ages: "6–12", days: "2" },
  "Intermediate Level Opti": { ages: "6–12", days: "2" },
  "Discover Windsurfing": { ages: "6+", days: "1" },
  "Learn to Windsurf": { ages: "6+", days: "2" },
  "Windsurfing Intermediate": { ages: "6+", days: "2 or 3" },
  "Wing Foiling": { ages: "9+", days: "1" },
  "Wing Foil + Windsurf": { ages: "9+", days: "2" },
  "ILCA (Laser) Development": { ages: "12+", days: "2" },
  "C420 Development": { ages: "12+", days: "1 or 2" },
  "Home School Sailing": { ages: "6–17", days: "1 or 2" },
};

const MEMBER_FEE_RE = /Member \$([\d,]+)\s*\|\s*Non-Member \$([\d,]+)/;
const FLAT_FEE_RE = /^\$([\d,]+)$/;

function toNumber(text: string): number {
  return Number(text.replace(/,/g, ""));
}

function format(values: number[]): string {
  const low = Math.min(...values);
  const high = Math.max(...values);
  const money = (n: number) => `$${n.toLocaleString("en-US")}`;
  return low === high ? money(low) : `${money(low)}–${money(high)}`;
}

/**
 * Builds the comparison table from the youth page's own content so a fee edit
 * there cannot leave this table showing last season's price. Throws during
 * prerender on drift, the same guard style as lib/schema.ts: every route here
 * is static, so a mismatch fails `npm run build` instead of misquoting a fee
 * to a parent.
 */
function buildComparison(): ComparisonRow[] {
  // The youth page keeps programs in three named sections rather than one array.
  // Listed in reading order so the table matches the page a parent just left.
  const programs = [
    ...FALL_YOUTH_CONTENT.optiSection.programs,
    ...FALL_YOUTH_CONTENT.beyondSection.programs,
    ...FALL_YOUTH_CONTENT.moreWaysSection.programs,
  ];
  const rows = programs.map((program) => {
    const facts = PROGRAM_FACTS[program.name];
    if (!facts) {
      throw new Error(
        `[parent-guide] "${program.name}" is on the youth page but has no age ` +
          `or schedule entry in PROGRAM_FACTS. Add one (no blank table cells).`,
      );
    }

    const memberPrices: number[] = [];
    const nonMemberPrices: number[] = [];
    for (const option of program.options) {
      const split = MEMBER_FEE_RE.exec(option.fee);
      const flat = FLAT_FEE_RE.exec(option.fee.trim());
      if (split) {
        memberPrices.push(toNumber(split[1]));
        nonMemberPrices.push(toNumber(split[2]));
      } else if (flat) {
        // One price for everyone, e.g. Home School Sailing. Footnoted below the table.
        memberPrices.push(toNumber(flat[1]));
        nonMemberPrices.push(toNumber(flat[1]));
      } else {
        throw new Error(
          `[parent-guide] "${program.name}": fee "${option.fee}" does not match ` +
            `"Member $X | Non-Member $Y" or "$X". Update the parser or the fee copy.`,
        );
      }
    }

    return {
      program: program.name,
      ages: facts.ages,
      days: facts.days,
      memberFee: format(memberPrices),
      nonMemberFee: format(nonMemberPrices),
    };
  });

  const known = new Set(programs.map((p) => p.name));
  const orphans = Object.keys(PROGRAM_FACTS).filter((name) => !known.has(name));
  if (orphans.length) {
    throw new Error(
      `[parent-guide] PROGRAM_FACTS lists programs that are no longer on the ` +
        `youth page: ${orphans.join(", ")}. Remove them so the table matches.`,
    );
  }

  return rows;
}

export const PARENT_GUIDE_CONTENT = {
  registrationUrl: FALL_YOUTH_REGISTRATION_URL,
  seo: {
    title: "A Parent's Guide to Youth Sailing | Coconut Grove Sailing Club",
    description:
      "Safety, instruction and a side-by-side comparison of every youth sailing program at the Coconut Grove Sailing Club Instructional Center — ages, days per week and fees in one table.",
  },
  hero: {
    breadcrumbCurrent: "Parent Guide",
    headline: "A Parent's Guide",
    subhead:
      "The questions parents ask us first, answered in one place — and every program side by side.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  intro: {
    eyebrow: "Before the first day",
    headline: "Who is teaching, and how we keep it safe.",
    prose: [
      "Handing your child a boat is a big ask, and most families want the same two things settled before anything else: who is doing the teaching, and what happens on the water.",
      "As a **US Sailing Accredited School**, the CGSC Instructional Center holds every course to the highest national standards for safety, instruction and seamanship. Our instructors are **US Sailing certified**, and they teach with the patience and care of people who remember their own first day at the helm.",
      "**Every sailor wears a US Coast Guard approved life jacket whenever they are on the water.** That applies to every program on this page, every session, without exception.",
    ],
  },
  comparison: {
    eyebrow: "Every program, side by side",
    headline: "Ages, days and fees.",
    lead: "One table for the whole fall season, so you can compare without opening ten pages. Programs with more than one schedule option show a fee range; the exact options are on each program's section of the youth sailing page.",
    columns: ["Program", "Ages", "Days / week", "Member", "Non-Member"],
    rows: buildComparison(),
    footnotes: [
      "Home School Sailing is a single price for members and non-members.",
      "Fees are per season. The registration page is authoritative if anything here disagrees with it.",
    ],
    ctaLabel: "See full schedules →",
    ctaHref: "/programs/camps-coaching",
  },
  next: {
    eyebrow: "Ready when you are",
    headline: "Register, or just ask.",
    prose:
      "If you know which program fits, registration is open now. If you are not sure, tell us your sailor's age and what they are curious about and we will point you at the right fit.",
    registerLabel: "Register for fall youth sailing →",
    contactName: "Rosa Lamela",
    contactRole: "Director of Programs Development",
    contactEmail: "icmanager@cgsc.org",
  },
};

export type ParentGuideContent = typeof PARENT_GUIDE_CONTENT;
