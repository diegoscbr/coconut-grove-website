// Shared shape for the plain-text policy pages (Privacy, Terms, Accessibility).
// Rendered by components/LegalPage.tsx. Each page keeps its own content file so
// a copy change touches one file and one route.

export type LegalSection = {
  heading: string;
  /** Paragraphs. `**bold**` is rendered via <Rich>. */
  body?: string[];
  /** Bulleted list rendered after the paragraphs. */
  bullets?: string[];
};

export type LegalDoc = {
  seo: { title: string; description: string };
  hero: {
    breadcrumbCurrent: string;
    headline: string;
    subhead: string;
  };
  /** Shown under the hero. S11 flagged an unfilled effective date as a blocker. */
  effective: string;
  intro: string[];
  sections: LegalSection[];
  contact: {
    heading: string;
    lead: string;
    email: string;
    address: string[];
  };
};
