import { defineField, defineType } from "sanity";
import { SAMPLE_STORY_CONTENT } from "@/lib/content/sampleStory";

const partFields = [
  defineField({ name: "text", type: "text", rows: 2 }),
  defineField({ name: "href", title: "Link (optional)", type: "string" }),
  defineField({ name: "em", title: "Emphasis (em)", type: "boolean" }),
];

/**
 * A single article / story detail page (id "sampleStory"). Each object mirrors
 * a section of prototype/calendar/sample-story.html. initialValue seeds the
 * exact current copy.
 */
export const sampleStory = defineType({
  name: "sampleStory",
  title: "Sample Story",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero (compact)",
      type: "object",
      fields: [
        defineField({
          name: "crumbs",
          title: "Breadcrumb links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "href", type: "string" },
              ],
            },
          ],
        }),
        defineField({ name: "crumbSep", title: "Breadcrumb separator", type: "string" }),
        defineField({ name: "crumbCurrent", title: "Breadcrumb current", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "subheadEm", title: "Subhead (emphasized lead)", type: "string" }),
        defineField({ name: "subheadRest", title: "Subhead (rest)", type: "text", rows: 2 }),
      ],
    }),

    defineField({
      name: "article",
      title: "Article",
      type: "object",
      fields: [
        defineField({
          name: "meta",
          type: "object",
          fields: [
            { name: "cat", title: "Category", type: "string" },
            { name: "byline", type: "string" },
            { name: "info", title: "Date / read time", type: "string" },
          ],
        }),
        defineField({ name: "leadImgLabel", title: "Lead image aria-label", type: "string" }),
        defineField({
          name: "body",
          title: "Body blocks",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "kind", title: "Kind (p / h2 / quote)", type: "string" }),
                defineField({ name: "text", title: "Text (h2)", type: "text", rows: 2 }),
                defineField({
                  name: "parts",
                  title: "Inline parts (p / quote)",
                  type: "array",
                  of: [{ type: "object", fields: partFields }],
                }),
                defineField({ name: "cite", title: "Citation (quote)", type: "string" }),
              ],
            },
          ],
        }),
        defineField({ name: "backLabel", title: "Back button label", type: "string" }),
        defineField({ name: "backHref", title: "Back button link", type: "string" }),
      ],
    }),

    defineField({
      name: "related",
      title: "Related (Read next)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "href", type: "string" },
                { name: "mediaClass", type: "string" },
                { name: "eyebrow", type: "string" },
                { name: "eyebrowClass", type: "string" },
                { name: "title", type: "string" },
                { name: "meta", type: "string" },
              ],
            },
          ],
        }),
      ],
    }),
  ],
  initialValue: SAMPLE_STORY_CONTENT,
  preview: { prepare: () => ({ title: "Sample Story" }) },
});
