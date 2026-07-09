import { defineField, defineType } from "sanity";
import { CALENDAR_CONTENT } from "@/lib/content/calendar";

/**
 * The Calendar page — a singleton (id "calendar"). Each object mirrors a section
 * of prototype/calendar/index.html. initialValue seeds the exact current copy.
 */
export const calendar = defineType({
  name: "calendar",
  title: "Calendar Page",
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
        defineField({ name: "subheadEm", title: "Subhead emphasis", type: "string" }),
        defineField({ name: "locationChip", title: "Location chip", type: "string" }),
      ],
    }),
  ],
  initialValue: CALENDAR_CONTENT,
  preview: { prepare: () => ({ title: "Calendar Page" }) },
});
