// Privacy Policy — punch list S4, pulled off hold by Peter on 2026-10-09 so the
// S9 SMS disclosure in the footer stops pointing at a dead anchor.
//
// WRITTEN AGAINST THE CODE, NOT FROM A TEMPLATE. Every claim below was checked:
//   - no analytics, tag manager, ad pixel, cookie or storage call exists in the
//     repo (grep for gtag/fbq/analytics/cookie/localStorage returns nothing)
//   - the only form on the site is the footer newsletter, which POSTs an email
//     to app/api/newsletter/route.ts and forwards it to a Google Apps Script
//     webhook, plus an MX lookup on the domain to check deliverability
//   - registration hands off to Clubspot; contact is plain mailto:/tel: links
//
// IF ANY OF THAT CHANGES, THIS FILE CHANGES. Two known tripwires:
//   1. S8 stages a Meta advertising pixel. Activating it makes the "no tracking
//      pixels" claim below false. Update this file in the same PR.
//   2. If a donation platform (Zeffy/Givebutter, F1) is ever embedded rather
//      than linked, the Donations section needs rewriting.
import type { LegalDoc } from "@/lib/content/legalDoc";

export const PRIVACY_CONTENT: LegalDoc = {
  seo: {
    title: "Privacy Policy",
    description:
      "How the Coconut Grove Sailing Club Instructional Center handles information on cgscic.org. We collect one thing: your email address, and only if you give it to us.",
  },
  hero: {
    breadcrumbCurrent: "Privacy Policy",
    headline: "Privacy Policy",
    subhead:
      "What we collect on this website, which is very little, and what happens to it.",
  },
  effective: "Effective October 9, 2026",
  intro: [
    "The Coconut Grove Sailing Club Instructional Center (**CGSCIC**) is a 501(c)(3) nonprofit organization in Miami, Florida. This policy covers **cgscic.org** and the ways this website handles information about the people who visit it.",
    "The short version: this website collects **one** piece of information, your email address, and only if you type it into the newsletter box yourself. There are no cookies, no analytics, no advertising trackers, and no accounts to create.",
  ],
  sections: [
    {
      heading: "What this website does not do",
      body: [
        "Most privacy policies are long because most websites collect a lot. This one does not. As of the effective date above, cgscic.org does **not**:",
      ],
      bullets: [
        "set cookies, or store anything in your browser",
        "run Google Analytics or any other analytics service",
        "run advertising or social media tracking pixels",
        "ask you to create an account, or hold a password",
        "build a profile of you, sell information about you, or share it with advertisers",
      ],
    },
    {
      heading: "The newsletter signup",
      body: [
        "There is one form on this site: the **Stay in the loop** box in the footer. If you type an email address into it and press Subscribe, two things happen.",
        "First, we check that the address looks deliverable by asking the public domain name system whether its domain can receive mail. We do not send anything to the address to test it, and we do not keep the result.",
        "Second, the address is added to a private spreadsheet we keep with Google so we can email you about programs, registration dates and news from the Center. We record the address and that it came from the website footer. Nothing else: no name, no IP address, no browsing history.",
        "We use it to send occasional Instructional Center email, and for nothing else. We do not sell it, rent it, or pass it to anyone outside the Center and the service we use to store and send the mail.",
        "To come off the list, use the unsubscribe link in any email we send, or write to us at the address at the bottom of this page and we will remove you.",
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
        "We teach a lot of children, but this website is not built for them to use. We do not knowingly collect information from children through cgscic.org. The newsletter box is intended for adults, and program registration is completed by a parent or guardian through Clubspot.",
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
