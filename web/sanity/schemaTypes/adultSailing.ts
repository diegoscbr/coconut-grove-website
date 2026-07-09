import { defineField, defineType } from "sanity";
import { ADULT_SAILING_CONTENT } from "@/lib/content/adultSailing";

// A course-grid section (Beginner / Intermediate / Cruising). `image` is a static
// /assets path (no Sanity image asset); an empty value renders a card with no
// media, matching the prototype's Cruising cards.
const courseSectionFields = [
  defineField({ name: "eyebrow", type: "string" }),
  defineField({ name: "headline", type: "string" }),
  defineField({ name: "sub", type: "text", rows: 3 }),
  defineField({
    name: "courses",
    title: "Courses",
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          { name: "name", type: "string" },
          { name: "desc", type: "text", rows: 4 },
          { name: "image", title: "Media image path (/assets…)", type: "string" },
          {
            name: "meta",
            title: "Meta rows",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  { name: "dt", title: "Label", type: "string" },
                  { name: "dd", title: "Value", type: "string" },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
];

/**
 * The Adult Sailing page — a singleton (id "adultSailing"). Each object mirrors a
 * section of prototype/programs/adult-sailing.html. initialValue seeds the exact copy.
 */
export const adultSailing = defineType({
  name: "adultSailing",
  title: "Adult Sailing Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbHome", title: "Breadcrumb home label", type: "string" }),
        defineField({ name: "breadcrumbPrograms", title: "Breadcrumb programs label", type: "string" }),
        defineField({ name: "breadcrumbCurrent", title: "Breadcrumb current label", type: "string" }),
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
      title: "Intro section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
        }),
        defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
      ],
    }),

    defineField({ name: "beginner", title: "Beginner / Novice", type: "object", fields: courseSectionFields }),
    defineField({ name: "intermediate", title: "Intermediate courses & clinics", type: "object", fields: courseSectionFields }),
    defineField({ name: "cruising", title: "Cruising & Navigation", type: "object", fields: courseSectionFields }),

    defineField({
      name: "seasonal",
      title: "Off-season note",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Season items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "lines", title: "Lines", type: "array", of: [{ type: "string" }] },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "whereWeSail",
      title: "Where we sail",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 3 }),
        defineField({ name: "prose2Pre", title: "Prose 2 (before link)", type: "text", rows: 3 }),
        defineField({ name: "prose2LinkText", title: "Prose 2 link text", type: "string" }),
        defineField({ name: "prose2LinkHref", title: "Prose 2 link URL", type: "string" }),
      ],
    }),

    defineField({
      name: "coaches",
      title: "Coaches",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({
          name: "people",
          title: "People",
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
        defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
      ],
    }),

    defineField({
      name: "register",
      title: "Register & contact",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
        defineField({
          name: "form",
          title: "Inquiry form",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "headlinePre", title: "Headline (before emphasis)", type: "string" }),
            defineField({ name: "headlineEmphasis", title: "Headline emphasis (italic)", type: "string" }),
            defineField({ name: "helper", type: "text", rows: 2 }),
            defineField({ name: "namePlaceholder", type: "string" }),
            defineField({ name: "emailPlaceholder", type: "string" }),
            defineField({ name: "interestLabel", title: "Interest select label", type: "string" }),
            defineField({ name: "interestOptions", title: "Interest options", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "experienceLabel", title: "Experience select label", type: "string" }),
            defineField({ name: "experienceOptions", title: "Experience options", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "notesPlaceholder", type: "string" }),
            defineField({ name: "submitLabel", type: "string" }),
          ],
        }),
        defineField({
          name: "info",
          title: "Contact info panel",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "contactLbl", title: "Contact label", type: "string" }),
            defineField({ name: "contactEmail", type: "string" }),
            defineField({ name: "contactPhone", type: "string" }),
            defineField({ name: "contactPhoneHref", title: "Contact phone link", type: "string" }),
            defineField({ name: "officeLbl", title: "Office label", type: "string" }),
            defineField({ name: "officePhone", type: "string" }),
            defineField({ name: "officePhoneHref", title: "Office phone link", type: "string" }),
            defineField({ name: "locationLbl", title: "Location label", type: "string" }),
            defineField({ name: "locationLine1", type: "string" }),
            defineField({ name: "locationLine2", type: "string" }),
            defineField({ name: "footPre", title: "Footnote (before email)", type: "string" }),
            defineField({ name: "footEmail", title: "Footnote email", type: "string" }),
            defineField({ name: "footPost", title: "Footnote (after email)", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  initialValue: ADULT_SAILING_CONTENT,
  preview: { prepare: () => ({ title: "Adult Sailing Page" }) },
});
