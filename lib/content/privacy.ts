// Privacy Policy — punch list S4, pulled off hold by Peter on 2026-10-09 so the
// S9 SMS disclosure in the footer stops pointing at a dead anchor.
//
// WRITTEN AGAINST THE CODE, NOT FROM A TEMPLATE. Every claim below was checked:
//   - no analytics, tag manager, ad pixel, cookie or storage call exists in the
//     repo (grep for gtag/fbq/analytics/cookie/localStorage returns nothing)
//   - there are NO forms on the site. The footer newsletter and its
//     /api/newsletter route were removed 2026-10-09 because the capture
//     webhook was never configured and every signup was being dropped.
//   - registration hands off to Clubspot; contact is plain mailto:/tel: links
//
// IF ANY OF THAT CHANGES, THIS FILE CHANGES. Three known tripwires:
//   1. S8 stages a Meta advertising pixel. Activating it makes the "no tracking
//      pixels" claim below false. Update this file in the same PR.
//   2. If a donation platform (Zeffy/Givebutter, F1) is ever embedded rather
//      than linked, the Donations section needs rewriting.
//   3. Restoring the newsletter form reintroduces email collection. The
//      "no forms" and "collects nothing" claims below both become false.
import type { LegalDoc } from "@/lib/content/legalDoc";

export const PRIVACY_CONTENT: LegalDoc = {
  seo: {
    title: "Privacy Policy",
    description:
      "How the Coconut Grove Sailing Club Instructional Center handles information on cgscic.org. The short version: this website collects nothing about you.",
  },
  hero: {
    breadcrumbCurrent: "Privacy Policy",
    headline: "Privacy Policy",
    subhead:
      "What this website collects, which is nothing, and where your information does go when you sail with us.",
  },
  effective: "Effective October 9, 2026",
  intro: [
    "The Coconut Grove Sailing Club Instructional Center (**CGSCIC**) is a 501(c)(3) nonprofit organization in Miami, Florida. This policy covers **cgscic.org** and the ways this website handles information about the people who visit it.",
    "The short version: **this website collects nothing about you.** There are no forms, no cookies, no analytics, no advertising trackers and no accounts to create. You can read every page without telling us anything.",
    "You can still reach us, register and give, and those things do involve your information. This policy says where it goes.",
  ],
  sections: [
    {
      heading: "What this website does not do",
      body: [
        "Most privacy policies are long because most websites collect a lot. This one does not. As of the effective date above, cgscic.org does **not**:",
      ],
      bullets: [
        "have any forms, or any way for you to submit information to us",
        "set cookies, or store anything in your browser",
        "run Google Analytics or any other analytics service",
        "run advertising or social media tracking pixels",
        "ask you to create an account, or hold a password",
        "build a profile of you, sell information about you, or share it with advertisers",
      ],
    },
    {
      heading: "Program registration happens somewhere else",
      body: [
        "Registration for youth and adult programs is handled by **Clubspot**, a third-party registration service. When you follow a Register link from this site, you leave cgscic.org and whatever you enter there, including names, ages, contact details and payment information, is collected by Clubspot under their own privacy policy rather than this one. We receive the registration information we need to run the program your sailor is enrolled in.",
        "We do not see or store your card number. Payment is handled by Clubspot and their payment processor.",
      ],
    },
    {
      heading: "Text messages",
      body: [
        "You can text the Instructional Center for information about our programs and registration. If you do, we see your phone number and the messages you send, and we use them to answer you. We do not add your number to a marketing list because you texted a question.",
        "Reply **STOP** to any message to opt out, or **HELP** for help. Your mobile carrier's message and data rates may apply, and message frequency varies with the conversation.",
      ],
    },
    {
      heading: "Email and phone",
      body: [
        "The email addresses and phone numbers published on this site are ordinary ones. Writing or calling is not tracked by this website. If you contact a member of staff, your message sits in their mailbox or their call log, and we keep it as long as we need it to help you.",
      ],
    },
    {
      heading: "Donations",
      body: [
        "Gifts by check go directly to the Center at the address below. Gifts made online are collected on our **Give Miami Day** page, which is operated by The Miami Foundation. What you enter there is handled under the Miami Foundation's privacy policy, and they pass the gift and the donor details to us so we can thank you and issue your acknowledgement for tax purposes.",
        "Donor information is kept confidential. We do not share or sell it.",
      ],
    },
    {
      heading: "Children's privacy",
      body: [
        "We teach a lot of children, but this website is not built for them to use. Since cgscic.org has no forms at all, there is no way for a child, or anyone else, to give us information through it. Program registration is completed by a parent or guardian through Clubspot.",
        "If you believe a child has given us information through this website, write to us and we will delete it.",
      ],
    },
    {
      heading: "Links to other websites",
      body: [
        "This site links out to the parent club at cgsc.org, to Clubspot, to Give Miami Day, to US Sailing and to a handful of other useful places. Once you follow a link, you are on someone else's website under someone else's policy. We do not control those sites and this policy does not cover them.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If what we collect changes, this page changes with it and the effective date at the top moves. We will not quietly start collecting something this page says we do not.",
      ],
    },
  ],
  contact: {
    heading: "Questions about this policy",
    lead: "Write to us and a person will answer.",
    email: "icdirector@cgsc.org",
    address: [
      "Coconut Grove Sailing Club Instructional Center",
      "2990 S. Bayshore Drive",
      "Miami, FL 33133",
    ],
  },
};
