import { defineField, defineType } from "sanity";
import { GIVING_CONTENT } from "@/lib/content/giving";

/**
 * The Giving page — a singleton (id "giving"). Each object mirrors a section of
 * prototype/giving.html. initialValue seeds the exact current copy.
 */
export const giving = defineType({
  name: "giving",
  title: "Giving Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbHomeLabel", title: "Breadcrumb: Home label", type: "string" }),
        defineField({ name: "breadcrumbHomeHref", title: "Breadcrumb: Home link", type: "string" }),
        defineField({ name: "breadcrumbSep", title: "Breadcrumb: separator", type: "string" }),
        defineField({ name: "breadcrumbCurrent", title: "Breadcrumb: current page", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "subhead", type: "text", rows: 2 }),
        defineField({ name: "locationChip", title: "Location chip", type: "string" }),
      ],
    }),

    defineField({
      name: "whyGive",
      title: "Why give",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 4 }),
        defineField({ name: "prose2", type: "text", rows: 3 }),
      ],
    }),

    defineField({
      name: "comingSoon",
      title: "Coming soon placeholder",
      type: "object",
      fields: [
        defineField({ name: "tag", title: "Placeholder tag", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
      ],
    }),
  ],
  initialValue: GIVING_CONTENT,
  preview: { prepare: () => ({ title: "Giving Page" }) },
});
