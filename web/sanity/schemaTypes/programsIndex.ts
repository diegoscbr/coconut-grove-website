import { defineField, defineType } from "sanity";
import { PROGRAMS_INDEX_CONTENT } from "@/lib/content/programsIndex";

const ctaFields = [
  defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
  defineField({ name: "ctaHref", title: "Button link", type: "string" }),
];

/**
 * The programs (index) page — a singleton (id "programsIndex"). Each object
 * mirrors a section of prototype/programs/index.html. initialValue seeds the
 * exact current copy.
 */
export const programsIndex = defineType({
  name: "programsIndex",
  title: "Programs Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbLabel", type: "string" }),
        defineField({ name: "breadcrumbHref", type: "string" }),
        defineField({ name: "breadcrumbCurrent", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "subhead", type: "text", rows: 3 }),
        defineField({ name: "locationChip", type: "string" }),
      ],
    }),

    defineField({
      name: "cards",
      title: "Program cards (3-up)",
      type: "object",
      fields: [
        defineField({
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "href", type: "string" },
                { name: "mediaClass", title: "Media class (adult/race/camps)", type: "string" },
                { name: "eyebrow", type: "string" },
                { name: "title", type: "string" },
                { name: "line", type: "text", rows: 2 },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "fit",
      title: "Where do you fit?",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 3 }),
        defineField({ name: "prose2", type: "text", rows: 3 }),
        ...ctaFields,
      ],
    }),

    defineField({
      name: "coaches",
      title: "Coaches preview",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "subPre", title: "Sub (lead)", type: "text", rows: 2 }),
        defineField({ name: "subEm", title: "Sub (emphasis)", type: "string" }),
        defineField({
          name: "people",
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
        ...ctaFields,
      ],
    }),

    defineField({
      name: "inquiry",
      title: "Inquiry CTA",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        ...ctaFields,
      ],
    }),
  ],
  initialValue: PROGRAMS_INDEX_CONTENT,
  preview: { prepare: () => ({ title: "Programs Page" }) },
});
