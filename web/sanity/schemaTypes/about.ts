import { defineField, defineType } from "sanity";
import { ABOUT_CONTENT } from "@/lib/content/about";

const ctaFields = [
  defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
  defineField({ name: "ctaHref", title: "Button link", type: "string" }),
];

/**
 * The About page — a singleton (id "about"). Each object mirrors a section of
 * prototype/about.html. initialValue seeds the exact current copy.
 */
export const about = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbHomeLabel", type: "string" }),
        defineField({ name: "breadcrumbHomeHref", type: "string" }),
        defineField({ name: "breadcrumbSep", type: "string" }),
        defineField({ name: "breadcrumbCurrent", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "subheadPre", type: "text", rows: 2 }),
        defineField({ name: "subheadEm", title: "Subhead emphasis (em)", type: "string" }),
        defineField({ name: "subheadPost", type: "text", rows: 2 }),
        defineField({ name: "locationChip", type: "string" }),
      ],
    }),

    defineField({
      name: "subnav",
      title: "Section subnav",
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
                { name: "label", type: "string" },
                { name: "active", type: "boolean" },
              ],
            },
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
      name: "heritage",
      title: "Heritage",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 4 }),
        defineField({ name: "prose2", type: "text", rows: 4 }),
        defineField({ name: "prose3", type: "text", rows: 4 }),
      ],
    }),

    defineField({
      name: "mission",
      title: "The mission",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 4 }),
        defineField({ name: "prose2", type: "text", rows: 4 }),
        defineField({ name: "prose3", type: "text", rows: 4 }),
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
  initialValue: ABOUT_CONTENT,
  preview: { prepare: () => ({ title: "About Page" }) },
});
