// Accessibility statement — the third dead footer anchor. Peter's 9 Oct revision
// names only Privacy and Terms (S4); Diego asked for this one too so the footer
// ships with no dead links at all.
//
// EVERY CLAIM IN "WHAT IS IN PLACE" WAS VERIFIED IN THE CODE BEFORE BEING WRITTEN:
//   lang="en"            app/layout.tsx:35
//   reduced motion       app/globals.css, 3 @media blocks
//   alt text             3 of 3 <Image> tags carry alt
//   labelled controls    16 aria-label attributes across components/
//   skip link + focus    added in this PR (app/(site)/layout.tsx, globals.css)
//
// This deliberately claims NO WCAG conformance level. Aiming at a standard is
// honest; asserting conformance without an audit is not. Do not upgrade the
// language here to "conforms to WCAG 2.1 AA" without a real audit to back it.
import type { LegalDoc } from "@/lib/content/legalDoc";

export const ACCESSIBILITY_CONTENT: LegalDoc = {
  seo: {
    title: "Accessibility",
    description:
      "How cgscic.org approaches accessibility, what is in place today, where we know we fall short, and how to tell us about a barrier.",
  },
  hero: {
    breadcrumbCurrent: "Accessibility",
    headline: "Accessibility",
    subhead:
      "What we have done, what we have not done yet, and how to tell us when something gets in your way.",
  },
  effective: "Last reviewed October 9, 2026",
  intro: [
    "Sailing should be open to everyone, and so should the website that explains it. The Coconut Grove Sailing Club Instructional Center aims to make **cgscic.org** usable by as many people as possible, including people using a screen reader, a keyboard instead of a mouse, magnification, or a browser set to reduce motion.",
    "We hold ourselves to the **Web Content Accessibility Guidelines (WCAG) 2.1, Level AA** as a target. We have not had an independent audit against it, so we describe that as what we are working toward rather than something we claim to have achieved.",
  ],
  sections: [
    {
      heading: "What is in place today",
      body: [
        "These are specific things this site does, each of which we have checked rather than assumed:",
      ],
      bullets: [
        "**Keyboard access.** Every link and control can be reached and operated with a keyboard, and a visible focus outline follows you as you go.",
        "**Skip to content.** A skip link is the first thing a keyboard or screen reader user reaches on every page, so you can jump past the navigation.",
        "**Structure a screen reader can follow.** Pages use real headings in order, real lists, and landmark regions for the navigation, main content and footer.",
        "**Described images.** Photographs that carry meaning have alternative text. Images that are purely decorative are marked so a screen reader skips them instead of reading a filename.",
        "**Labelled controls.** Form fields and icon buttons have accessible names, including the newsletter field and the menu button.",
        "**Reduced motion.** If your system asks for reduced motion, animations and the scrolling announcement banner stop.",
        "**Text that scales.** The layout uses relative sizing, so enlarging text or zooming to 200 percent does not cut content off or require sideways scrolling.",
        "**Declared language.** The page language is set, so screen readers pronounce it correctly.",
      ],
    },
    {
      heading: "Where we know we fall short",
      body: [
        "Being honest about the gaps is more useful than a blanket claim:",
      ],
      bullets: [
        "**No independent audit.** Nobody outside the Center has tested this site against WCAG 2.1 AA. Our checks are our own.",
        "**Text over photographs.** Several page headers put white text over a photograph behind a dark gradient. We chose the gradients to keep the text readable, but we have not measured the contrast on every header against every image.",
        "**Pages we do not control.** Program registration happens on Clubspot and online giving happens on Give Miami Day. Those are other companies' websites and their accessibility is theirs, not ours. If one of them blocks you, tell us anyway, we would rather help you register by phone than lose you.",
        "**PDFs and documents.** Any document we link to may not be as accessible as the pages around it.",
      ],
    },
    {
      heading: "If something gets in your way",
      body: [
        "Tell us. A specific report is worth more than a general one, so if you can, include the page you were on, what you were trying to do, and what happened instead, along with the browser or assistive technology you were using. We will reply, and we will tell you plainly whether we can fix it and roughly when.",
        "**You never have to use the website to sail with us.** If any part of this site is a barrier, call or email and a person will walk you through programs, schedules and registration directly.",
      ],
    },
  ],
  contact: {
    heading: "Report a barrier",
    lead: "Email, or write to us at the Center.",
    email: "icdirector@cgsc.org",
    address: [
      "Coconut Grove Sailing Club Instructional Center",
      "2990 S. Bayshore Drive",
      "Miami, FL 33133",
    ],
  },
};
