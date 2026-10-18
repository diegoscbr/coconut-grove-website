// Giving page content — "Giving Page: Build Specification", updated 15 Oct 2026,
// prepared by Rosa Lamela. The specification says of its copy: "Do not edit,
// reword or shorten it." Every string below is hers, verbatim, except where a
// comment says otherwise.
//
// Campaign-dependent pieces carry `campaignOnly` comments: the page hides them
// after November 19 (lib/giveMiamiDay.ts decides when).
//
// Single source of truth — edit this file to change the page's copy.
import { GIVE_MIAMI_DAY_URL } from "@/lib/giveMiamiDay";

const DONATE_LABEL = "Donate · Give Miami Day →";

export const GIVING_CONTENT = {
  seo: {
    canonical: "https://www.cgscic.org/giving",
    // The specification's canonical is https://cgscic.org/giving, but the apex
    // domain 308-redirects to www. A canonical that redirects is a mixed signal
    // to Google, so this uses the address the page is actually served from.
    campaign: {
      title: "Give to Youth and Adult Sailing | Give Miami Day 2026",
      description:
        "Give Miami Day is November 19, 2026, with early giving November 14-18. Help the Coconut Grove Sailing Club Instructional Center reach its $50,000 goal.",
      socialDescription:
        "Give Miami Day is November 19, 2026, with early giving November 14-18. Help us reach our $50,000 goal for youth and adult sailing in Miami.",
    },
    afterCampaign: {
      title: "Give to Youth and Adult Sailing in Miami | CGSCIC",
      description:
        "Support youth and adult sailing at the Coconut Grove Sailing Club Instructional Center in Miami. Gifts fund sailing instruction, scholarships and equipment.",
    },
    // Interim. The specification wants the hero photo here once supplied
    // ("not a logo"); until then this is the photo already behind the hero.
    ogImage: "https://www.cgscic.org/assets/heroes/giving.jpg",
    ogImageAlt:
      "A young sailor on Biscayne Bay with the Coconut Grove Sailing Club Instructional Center in Miami.",
  },
  hero: {
    eyebrow: "Giving · Biscayne Bay, Miami",
    headline: "Every generation deserves to sail on Biscayne Bay.",
    body: "Help us make sure the next one gets the chance.",
    // campaignOnly
    goal: "Our Give Miami Day goal this year is $50,000.",
    // campaignOnly
    dateBlock: [
      "Give Miami Day is Thursday, November 19, 2026.",
      "Early giving opens Saturday, November 14 and runs through Wednesday, November 18 — an early gift counts toward our goal and helps us build momentum before the day itself.",
    ],
    // campaignOnly
    ctaLabel: DONATE_LABEL,
    ctaHref: GIVE_MIAMI_DAY_URL,
  },
  mission: {
    label: "Our Mission",
    statement:
      "Expanding access and opportunity in sailing and racing for people of every age and background — fostering excellence and character on and off the water.",
    headline: "We believe sailing brings out the best in people.",
    // [text](href) links the specification asks for ("Link out to Youth
    // Sailing, Adult Sailing and Racing Teams from the mission or impact copy
    // where natural"). The words themselves are unchanged.
    body: [
      "For eighty years, this club has watched it happen. A kid arrives unsure of themselves and discovers they're capable of more than they imagined. An adult steps onto a sailboat for the first time and finds a community that anchors them. We teach people to sail — [kids on Optimists](/programs/camps-coaching), [adults at the helm of a keelboat](/programs/adult-sailing). But that's only the beginning.",
      "What really matters comes next: the confidence, the friendships, the mentorship, the person they become. The skills matter. The relationships matter more. And we're committed to ensuring that every person who falls in love with sailing — regardless of their background or circumstance — gets the opportunity to pursue it.",
    ],
    pullOut:
      "This is our mission. This is why we're here. And this is why we need you.",
  },
  impact: {
    eyebrow: "On the water each year",
    headline: "Impact by the numbers",
    figures: [
      {
        figure: "1,200+",
        caption: "kids a year in youth programs — camps, after-school, and [racing](/programs/race-team)",
      },
      { figure: "200+", caption: "adults a year take our adult sailing courses" },
      {
        figure: "500+",
        caption: "adults on the water each year through free community sailing",
      },
      {
        figure: "35+",
        caption: "full and partial youth scholarships awarded last year",
      },
    ],
    // campaignOnly
    closingLine:
      "This Give Miami Day, your gift puts the next generation on Biscayne Bay.",
  },
  levels: {
    headline: "Here's how your gift goes to work.",
    items: [
      {
        amount: "$50",
        does: "Buys a Coast Guard-approved life jacket, worn by a young sailor on day one and every day after.",
      },
      {
        amount: "$100",
        does: "Outfits a young sailor with the protective clothing and gear that keeps them safe through sun, salt, and wind.",
      },
      {
        amount: "$250",
        does: "Puts a new rudder on a learn-to-sail Optimist and keeps it teaching instead of sitting on the rack.",
      },
      {
        amount: "$500",
        does: "Sends a child who couldn't otherwise afford it to a full week of summer sailing camp.",
        // Developer note: the only level that funds a person, not equipment.
        featuredTag: "Funds a sailor",
      },
      {
        amount: "$1,000",
        does: "Sponsors a season of sailing for one young sailor — half a school year of coaching, practice, and weekends on Biscayne Bay.",
      },
      {
        amount: "$1,500",
        does: "Sends a young racer to a national or international regatta — the entry, the travel, the shot at competing against the best sailors in the world.",
      },
      {
        amount: "$2,000",
        does: "Buys a new set of sails for a keelboat, where adults learn the sport from scratch.",
      },
      {
        amount: "Any amount",
        does: "Give at whatever level speaks to you. Your gift helps make all of it possible.",
      },
    ] as { amount: string; does: string; featuredTag?: string }[],
    // Stays after November 19: the specification's list of campaign-only
    // items does not include it ("gift levels ... stay"). Once Rosa supplies
    // the year-round donation link, point this at it.
    ctaLabel: DONATE_LABEL,
    ctaHref: GIVE_MIAMI_DAY_URL,
  },
  // campaignOnly (whole section)
  matching: {
    eyebrow: "For businesses and individual donors",
    headline: "Fund a matching grant.",
    body: [
      "Individuals, business owners and companies can put up a matching grant in any amount, and every dollar of it doubles somebody else's gift. A $500 match can turn someone considering $150 into someone who gives $250, because their gift arrives as $500.",
      "At $2,500 and above it changes the whole campaign. We can tell every donor their gift is being doubled, hold the match open through early giving, and come back on the day itself with a deadline that is real.",
    ],
    ctaLabel: "Talk to us about a match",
    ctaHref: "mailto:icmanager@cgsc.org",
  },
  otherWays: {
    // Added by the specification's own developer note so the H3s below do not
    // skip a level; visually hidden.
    headline: "Other ways to give",
    check: {
      headline: "Prefer to mail a gift?",
      intro: "Make checks payable to CGSCIC and mail to:",
      address: [
        "Coconut Grove Sailing Club Instructional Center",
        "2990 S. Bayshore Drive",
        "Miami, FL 33133",
        "Attn: Rosa Lamela",
      ],
    },
    sponsorship: {
      headline: "Let's talk it through.",
      body: "Interested in sponsoring a regatta, underwriting equipment, or making a planned gift? We would welcome the conversation.",
      name: "Rosa Lamela",
      role: "Director of Programs & Development",
      email: "icmanager@cgsc.org",
      phoneText: "305.747.2600",
      phoneHref: "tel:+13057472600",
    },
  },
};

/**
 * Section 7 of the specification: the Florida solicitation disclosure
 * (s. 496.411, F.S.). "A legal requirement and must be reproduced exactly",
 * placed in the global footer so it is on every page. Rendered by
 * components/chrome/Footer.tsx.
 *
 * ONE DELIBERATE OMISSION: the specification's tax line reads
 * "Donations are tax-deductible as allowed by law. EIN [EIN TO BE ADDED]."
 * The EIN has not been supplied, and a bracketed placeholder must not reach a
 * public legal notice, so the EIN sentence is left out until it arrives. Add it
 * here, after the first tax sentence, word for word.
 */
export const GIVING_DISCLOSURE = {
  purpose:
    "The Coconut Grove Sailing Club Instructional Center is a 501(c)(3) charitable organization with its principal place of business in Florida. Contributions support youth and adult sailing instruction, scholarships, equipment maintenance and capital purchases.",
  tax: [
    "Donations are tax-deductible as allowed by law.",
    "Donor information is kept confidential and is never shared or sold.",
  ],
  financialStatementLead:
    "A written financial statement for the preceding fiscal year is available on request from Rosa Lamela, Director of Programs & Development — 2990 South Bayshore Drive, Miami, FL 33133 · ",
  email: "icmanager@cgsc.org",
  phoneText: "305.747.2600",
  phoneHref: "tel:+13057472600",
  organization:
    "Coconut Grove Sailing Club Instructional Center · 2990 South Bayshore Drive, Miami, FL 33133 · A 501(c)(3) nonprofit organization.",
  floridaRegistration:
    "A COPY OF THE OFFICIAL REGISTRATION (#CH46226) AND FINANCIAL INFORMATION MAY BE OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE (800-435-7352) WITHIN THE STATE OR AT 800HELPFLA.COM. REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.",
};

export type GivingContent = typeof GIVING_CONTENT;
