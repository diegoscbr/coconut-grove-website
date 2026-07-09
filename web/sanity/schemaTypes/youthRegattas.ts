import { defineField, defineType } from "sanity";
import { YOUTH_REGATTAS_CONTENT } from "@/lib/content/youthRegattas";

const sectionFields = [
  defineField({ name: "eyebrow", type: "string" }),
  defineField({ name: "headline", type: "string" }),
  defineField({ name: "sub", type: "text", rows: 3 }),
  defineField({ name: "tbd", title: "TBD chip text", type: "string" }),
];

/**
 * The Youth Regattas page — a singleton (id "youthRegattas"). Each object mirrors
 * a section of prototype/youth-regattas.html. initialValue seeds the exact copy.
 */
export const youthRegattas = defineType({
  name: "youthRegattas",
  title: "Youth Regattas Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbHome", title: "Breadcrumb home label", type: "string" }),
        defineField({ name: "breadcrumbCurrent", title: "Breadcrumb current label", type: "string" }),
        defineField({ name: "h1", title: "Headline", type: "string" }),
        defineField({ name: "subhead", type: "text", rows: 2 }),
        defineField({ name: "subheadEmphasis", title: "Subhead emphasis (italic)", type: "text", rows: 2 }),
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

    defineField({ name: "sponsors", title: "Sponsors section", type: "object", fields: sectionFields }),
    defineField({ name: "logistics", title: "Logistics section", type: "object", fields: sectionFields }),
    defineField({ name: "results", title: "Photos & Results section", type: "object", fields: sectionFields }),
  ],
  initialValue: YOUTH_REGATTAS_CONTENT,
  preview: { prepare: () => ({ title: "Youth Regattas Page" }) },
});
