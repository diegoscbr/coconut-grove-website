import { defineField, defineType } from "sanity";
import { RACE_TEAM_CONTENT } from "@/lib/content/raceTeam";

/**
 * The Racing Teams page — a singleton (id "raceTeam"). Each object mirrors a
 * section of prototype/programs/race-team.html. initialValue seeds the exact copy.
 */
export const raceTeam = defineType({
  name: "raceTeam",
  title: "Racing Teams Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({
          name: "breadcrumbHome",
          title: "Breadcrumb: Home",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "href", type: "string" }),
          ],
        }),
        defineField({
          name: "breadcrumbPrograms",
          title: "Breadcrumb: Programs",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "href", type: "string" }),
          ],
        }),
        defineField({ name: "breadcrumbCurrent", title: "Breadcrumb: current label", type: "string" }),
        defineField({ name: "h1", title: "Headline", type: "string" }),
        defineField({ name: "subheadPre", title: "Subhead (before emphasis)", type: "text", rows: 2 }),
        defineField({ name: "subheadEmphasis", title: "Subhead emphasis (italic)", type: "string" }),
        defineField({ name: "subheadPost", title: "Subhead (after emphasis)", type: "text", rows: 2 }),
        defineField({ name: "locationChip", type: "string" }),
      ],
    }),

    defineField({
      name: "subnav",
      title: "Section subnav",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "href", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "intro",
      title: "Intro (The Team)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", title: "Prose 1 (**bold**)", type: "text", rows: 4 }),
        defineField({ name: "prose2", title: "Prose 2 (**bold**)", type: "text", rows: 5 }),
      ],
    }),

    defineField({
      name: "bay",
      title: "The Bay",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", title: "Prose 1 (**bold**)", type: "text", rows: 4 }),
        defineField({ name: "prose2Pre", title: "Prose 2 (before emphasis)", type: "text", rows: 3 }),
        defineField({ name: "prose2Em", title: "Prose 2 emphasis (italic)", type: "string" }),
        defineField({ name: "prose2Post", title: "Prose 2 (after emphasis)", type: "string" }),
      ],
    }),

    defineField({
      name: "methodology",
      title: "Methodology",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "intro", title: "Intro prose (**bold**)", type: "text", rows: 4 }),
        defineField({
          name: "methods",
          title: "Method list",
          type: "array",
          of: [
            {
              type: "object",
              fields: [{ name: "text", title: "Item (**bold** lead-in)", type: "text", rows: 3 }],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "pathway",
      title: "Pathway selector",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 2 }),
        defineField({ name: "activeRung", title: "Default active rung (id)", type: "string" }),
        defineField({
          name: "rungs",
          title: "Rungs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "rung", title: "Rung id", type: "string" },
                { name: "name", type: "string" },
                { name: "age", type: "string" },
              ],
            },
          ],
        }),
        defineField({
          name: "detail",
          title: "Default detail panel",
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "age", type: "string" }),
            defineField({ name: "desc", type: "text", rows: 3 }),
            defineField({ name: "meta", type: "array", of: [{ type: "string" }] }),
          ],
        }),
      ],
    }),

    defineField({
      name: "coaches",
      title: "Coaches",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlinePre", title: "Headline (before emphasis)", type: "string" }),
        defineField({ name: "headlineEm", title: "Headline emphasis (italic)", type: "string" }),
        defineField({ name: "headlinePost", title: "Headline (after emphasis)", type: "string" }),
        defineField({ name: "prose1", title: "Prose 1 (**bold**)", type: "text", rows: 4 }),
        defineField({ name: "prose2", title: "Prose 2 (**bold**)", type: "text", rows: 4 }),
        defineField({ name: "rosterLabel", title: "Roster link label", type: "string" }),
        defineField({ name: "rosterHref", title: "Roster link href", type: "string" }),
        defineField({
          name: "people",
          title: "Coach cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "role", type: "string" },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats (by the numbers)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({
          name: "tiles",
          title: "Stat tiles",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "num", type: "string" },
                { name: "small", title: "Small suffix (e.g. TBD)", type: "string" },
                { name: "label", type: "string" },
                { name: "tbd", title: "TBD tile", type: "boolean" },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "regattas",
      title: "Selected regattas",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({
          name: "cards",
          title: "Regatta cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "datePre", title: "Date (before TBD chip)", type: "string" },
                { name: "dateTbd", title: "Date TBD chip text", type: "string" },
                { name: "name", type: "string" },
                { name: "meta", type: "string" },
                { name: "verified", title: "Verified/confirmed label", type: "string" },
              ],
            },
          ],
        }),
        defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
      ],
    }),

    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "q", title: "Question", type: "string" },
                { name: "a", title: "Answer", type: "text", rows: 4 },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "manifesto",
      title: "Manifesto",
      type: "object",
      fields: [
        defineField({ name: "ariaLabel", type: "string" }),
        defineField({
          name: "lines",
          title: "Lines",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "text", type: "string" },
                { name: "accent", title: "Accent line", type: "boolean" },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "inquiry",
      title: "Inquiry",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({ name: "formEyebrow", type: "string" }),
        defineField({ name: "formHeadlinePre", title: "Form headline (before emphasis)", type: "string" }),
        defineField({ name: "formHeadlineEm", title: "Form headline emphasis (italic)", type: "string" }),
        defineField({ name: "formHelper", type: "text", rows: 3 }),
        defineField({ name: "parentNamePlaceholder", type: "string" }),
        defineField({ name: "emailPlaceholder", type: "string" }),
        defineField({ name: "sailorNamePlaceholder", type: "string" }),
        defineField({ name: "sailorAgePlaceholder", type: "string" }),
        defineField({ name: "experienceLabel", title: "Experience select label", type: "string" }),
        defineField({ name: "experienceOptions", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "rungLabel", title: "Rung select label", type: "string" }),
        defineField({ name: "rungOptions", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "notesPlaceholder", type: "string" }),
        defineField({ name: "submitLabel", type: "string" }),
        defineField({ name: "infoEyebrow", type: "string" }),
        defineField({
          name: "director",
          type: "object",
          fields: [
            defineField({ name: "lbl", type: "string" }),
            defineField({ name: "name", type: "string" }),
            defineField({ name: "small", type: "string" }),
          ],
        }),
        defineField({
          name: "phone",
          type: "object",
          fields: [
            defineField({ name: "lbl", type: "string" }),
            defineField({ name: "number", type: "string" }),
            defineField({ name: "href", type: "string" }),
          ],
        }),
        defineField({
          name: "email",
          type: "object",
          fields: [
            defineField({ name: "lbl", type: "string" }),
            defineField({ name: "address", type: "string" }),
            defineField({ name: "href", type: "string" }),
          ],
        }),
        defineField({
          name: "visit",
          type: "object",
          fields: [
            defineField({ name: "lbl", type: "string" }),
            defineField({ name: "line1", type: "string" }),
            defineField({ name: "line2", type: "string" }),
          ],
        }),
        defineField({ name: "footPre", title: "Footnote (before link)", type: "text", rows: 2 }),
        defineField({ name: "footLinkText", type: "string" }),
        defineField({ name: "footLinkHref", type: "string" }),
        defineField({ name: "footPost", title: "Footnote (after link)", type: "string" }),
      ],
    }),
  ],
  initialValue: RACE_TEAM_CONTENT,
  preview: { prepare: () => ({ title: "Racing Teams Page" }) },
});
