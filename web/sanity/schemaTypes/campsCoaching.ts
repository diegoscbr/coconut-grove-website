import { defineField, defineType } from "sanity";
import { CAMPS_COACHING_CONTENT } from "@/lib/content/campsCoaching";

/**
 * The Youth Sailing page — a singleton (id "campsCoaching"). Each object mirrors
 * a section of prototype/programs/camps-coaching.html. initialValue seeds the
 * exact current copy so the document is a 1:1 replica out of the box.
 */
export const campsCoaching = defineType({
  name: "campsCoaching",
  title: "Youth Sailing Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "breadcrumbHomeLabel", type: "string" }),
        defineField({ name: "breadcrumbHomeHref", type: "string" }),
        defineField({ name: "breadcrumbProgramsLabel", type: "string" }),
        defineField({ name: "breadcrumbProgramsHref", type: "string" }),
        defineField({ name: "breadcrumbCurrent", type: "string" }),
        defineField({ name: "h1", type: "string" }),
        defineField({ name: "subheadBefore", type: "text", rows: 2 }),
        defineField({ name: "subheadEmphasis", type: "string" }),
        defineField({ name: "subheadAfter", type: "text", rows: 2 }),
        defineField({ name: "locationChip", type: "string" }),
      ],
    }),

    defineField({
      name: "subnav",
      title: "Page subnav",
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
      title: "Intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 4 }),
        defineField({ name: "prose2", type: "text", rows: 4 }),
      ],
    }),

    defineField({
      name: "camps",
      title: "Available Camps",
      type: "object",
      fields: [
        defineField({ name: "countNumber", type: "string" }),
        defineField({ name: "countLabel", type: "string" }),
        defineField({
          name: "filters",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({
              name: "selects",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "ariaLabel", type: "string" },
                    { name: "options", type: "array", of: [{ type: "string" }] },
                  ],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: "cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "mediaClass", type: "string" },
                {
                  name: "chips",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "label", type: "string" },
                        { name: "cls", title: "Chip class (e.g. rust)", type: "string" },
                      ],
                    },
                  ],
                },
                { name: "title", type: "string" },
                { name: "meta", type: "text", rows: 2 },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "private",
      title: "Private Coaching",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 4 }),
        defineField({ name: "prose2Pre", type: "string" }),
        defineField({ name: "prose2Bold", type: "string" }),
        defineField({ name: "prose2Tbd", title: "TBD chip text", type: "string" }),
        defineField({ name: "prose2Post", type: "text", rows: 2 }),
        defineField({ name: "ctaHref", type: "string" }),
        defineField({ name: "ctaLabel", type: "string" }),
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
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "summary", type: "text", rows: 2 },
                { name: "bodyPre", type: "text", rows: 3 },
                { name: "linkHref", type: "string" },
                { name: "linkText", type: "string" },
                { name: "bodyPost", type: "text", rows: 3 },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "inquire",
      title: "Inquire",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 2 }),
        defineField({
          name: "form",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "headlinePre", type: "string" }),
            defineField({ name: "headlineEmphasis", type: "string" }),
            defineField({ name: "helper", type: "text", rows: 3 }),
            defineField({ name: "namePlaceholder", type: "string" }),
            defineField({ name: "emailPlaceholder", type: "string" }),
            defineField({ name: "agePlaceholder", type: "string" }),
            defineField({ name: "campTypeOptions", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "notesPlaceholder", type: "string" }),
            defineField({ name: "submitLabel", type: "string" }),
          ],
        }),
        defineField({
          name: "info",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "phoneLabel", type: "string" }),
            defineField({ name: "phoneHref", type: "string" }),
            defineField({ name: "phoneText", type: "string" }),
            defineField({ name: "emailLabel", type: "string" }),
            defineField({ name: "emailHref", type: "string" }),
            defineField({ name: "emailText", type: "string" }),
            defineField({ name: "visitLabel", type: "string" }),
            defineField({ name: "addressLine1", type: "string" }),
            defineField({ name: "addressLine2", type: "string" }),
            defineField({ name: "footPre", type: "text", rows: 2 }),
            defineField({ name: "footLinkHref", type: "string" }),
            defineField({ name: "footLinkText", type: "string" }),
            defineField({ name: "footPost", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  initialValue: CAMPS_COACHING_CONTENT,
  preview: { prepare: () => ({ title: "Youth Sailing Page" }) },
});
