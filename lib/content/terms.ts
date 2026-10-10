// Terms of Service — punch list S4. Named by the S9 SMS disclosure in the footer.
//
// Deliberately short and plain. This is a brochure site for a nonprofit sailing
// school: the real agreements are the registration terms on Clubspot and the
// club's own membership and liability paperwork. These terms cover the website
// and point at those, rather than pretending to be them.
//
// NOT REVIEWED BY COUNSEL. Flag to Peter before relying on it in a dispute.
import type { LegalDoc } from "@/lib/content/legalDoc";

export const TERMS_CONTENT: LegalDoc = {
  seo: {
    title: "Terms of Service",
    description:
      "The terms that apply to cgscic.org, the website of the Coconut Grove Sailing Club Instructional Center, a 501(c)(3) nonprofit in Miami.",
  },
  hero: {
    breadcrumbCurrent: "Terms of Service",
    headline: "Terms of Service",
    subhead:
      "The plain-language terms for using this website. The sailing itself has its own paperwork.",
  },
  effective: "Effective October 9, 2026",
  intro: [
    "This website, **cgscic.org**, is published by the Coconut Grove Sailing Club Instructional Center (**CGSCIC**), a 501(c)(3) nonprofit organization in Miami, Florida. By using it you agree to what follows.",
    "These terms are about the **website**. Enrolling in a program, becoming a club member, or taking a boat out involves separate agreements, and those govern the sailing.",
  ],
  sections: [
    {
      heading: "What this site is for",
      body: [
        "cgscic.org exists to tell you about our programs, our instructors, our schedule and how to join us on the water. It is published in good faith as information, and it is not an offer or a contract.",
      ],
    },
    {
      heading: "Schedules, fees and dates can change",
      body: [
        "We work to keep course dates, session times and fees on this site accurate and current. Weather, enrollment, boat availability and instructor schedules all move, so the information here can fall out of date between updates.",
        "**The registration page is authoritative.** Where a date or a fee on this site disagrees with what you see at the point of registration, the registration page is correct. If something looks wrong, tell us, we would rather hear it than leave it up.",
      ],
    },
    {
      heading: "Registration and payment",
      body: [
        "Program registration and payment are handled by **Clubspot**, a third-party service. Your registration is an agreement between you and the Instructional Center, made on Clubspot's platform and subject to their terms as well as ours. Refunds, transfers and cancellations are governed by the program policies given to you at registration.",
      ],
    },
    {
      heading: "Sailing carries real risk, and this page is not a waiver",
      body: [
        "Sailing, windsurfing and wing foiling are water sports conducted on open water. They carry inherent risks that instruction reduces but cannot remove.",
        "Nothing on this website is a waiver, a release, or an assumption of risk. Participation in any program requires the Center's own registration, medical and liability forms, completed by the participant or by a parent or guardian, before anyone goes on the water. Reading this site does not replace signing those.",
      ],
    },
    {
      heading: "Using the site properly",
      body: [
        "You are welcome to read this site, link to it, and share it. Please do not try to break it, scrape it at a scale that degrades it for others, probe it for weaknesses, or use it to send anyone unsolicited mail.",
      ],
    },
    {
      heading: "Photographs and text",
      body: [
        "The words, photographs and designs on this site belong to the Instructional Center or are used with the permission of the people who made them. Our burgee and the Coconut Grove Sailing Club name are the club's.",
        "Quote us, cite us, link to us. For anything more, such as reproducing a photograph or republishing a page, write and ask first. We are usually glad to say yes.",
      ],
    },
    {
      heading: "Links to other websites",
      body: [
        "We link to the parent club, to our registration provider, to Give Miami Day, to US Sailing and to other places we think are useful. We do not control those sites and we are not responsible for what they publish or how they behave.",
      ],
    },
    {
      heading: "No warranty",
      body: [
        "This website is provided as it is. We do not promise that it will always be available, free of errors, or free of interruption, and to the extent the law allows we make no warranties about it. We are not liable for loss arising from your use of the website itself.",
        "This limitation applies to the **website**. It does not limit anything we owe you under a program registration, under our own policies, or under any right the law does not let us sign away.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of the State of Florida.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update this page. When we do, the effective date at the top moves. Continuing to use the site after a change means the new version applies.",
      ],
    },
  ],
  contact: {
    heading: "Questions about these terms",
    lead: "Write to us and a person will answer.",
    email: "icdirector@cgsc.org",
    address: [
      "Coconut Grove Sailing Club Instructional Center",
      "2990 S. Bayshore Drive",
      "Miami, FL 33133",
    ],
  },
};
