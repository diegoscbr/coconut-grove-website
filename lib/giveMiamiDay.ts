// Give Miami Day 2026 — the one place that knows the campaign dates.
//
// Giving page specification (Rosa Lamela, 15 Oct 2026), "Date control": drive
// the site-wide Give button off dates "so nobody has to remember to switch
// them", and take the campaign-only copy down "automatically on the date".
//
// Every route is otherwise static, so app/(site)/layout.tsx sets an hourly
// revalidate: the switch reaches visitors within an hour of the cutoff,
// without a redeploy.
//
// The cutoff is the end of November 19 in Miami (EST, UTC-5 in November).

export const GIVE_MIAMI_DAY_URL = "https://givemiamiday.org/organization/cgscic";

const CAMPAIGN_ENDS = Date.parse("2026-11-20T00:00:00-05:00");

/** True through the end of Give Miami Day, November 19, 2026. */
export function isGiveMiamiDayLive(now: number = Date.now()): boolean {
  return now < CAMPAIGN_ENDS;
}

export type GiveButton = { label: string; href: string };

/**
 * The site-wide Give button: navigation, mobile menu, sticky bar and footer.
 *
 * Before November 14 this already points at the campaign page, as in the
 * mockup. The specification leaves that open ("Rosa to confirm which applies
 * for the days before November 14"); if she chooses /giving until early giving
 * opens, add a start date here.
 */
export function giveButton(now: number = Date.now()): GiveButton {
  return isGiveMiamiDayLive(now)
    ? { label: "Give Miami Day · Nov 14–19", href: GIVE_MIAMI_DAY_URL }
    : { label: "Give →", href: "/giving" };
}
