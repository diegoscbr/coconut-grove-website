import { defineField, defineType } from "sanity";
import { HOME_CONTENT } from "@/lib/content/home";

const ctaFields = [
  defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
  defineField({ name: "ctaHref", title: "Button link", type: "string" }),
];

const headerFields = [
  defineField({ name: "eyebrow", type: "string" }),
  defineField({ name: "headline", type: "string" }),
  defineField({ name: "sub", type: "text", rows: 3 }),
];

/**
 * The homepage — a singleton (id "home"). Each object mirrors a section of
 * prototype/index.html. initialValue seeds the exact current copy.
 */
export const home = defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "hero", title: "Hero", type: "hero" }),

    defineField({
      name: "programs",
      title: "Programs (3-up)",
      type: "object",
      fields: [
        ...headerFields,
        defineField({
          name: "cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "line", type: "text", rows: 2 },
                { name: "href", type: "string" },
                { name: "mediaClass", title: "Media class (camps/race/adult)", type: "string" },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "pathway",
      title: "Pathway preview",
      type: "object",
      fields: [
        defineField({ name: "tag", type: "string" }),
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose1", type: "text", rows: 3 }),
        defineField({ name: "prose2", type: "text", rows: 3 }),
        ...ctaFields,
        defineField({ name: "offRampPre", type: "string" }),
        defineField({ name: "offRampLinkText", type: "string" }),
        defineField({ name: "offRampHref", type: "string" }),
      ],
    }),

    defineField({
      name: "about",
      title: "About preview",
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
      name: "leadership",
      title: "Leadership",
      type: "object",
      fields: [
        ...headerFields,
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
      name: "dock",
      title: "What's on the dock",
      type: "object",
      fields: [
        ...headerFields,
        defineField({ name: "horizon", type: "dockBucket" }),
        defineField({ name: "recent", type: "dockBucket" }),
        ...ctaFields,
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Final CTA",
      type: "object",
      fields: [...headerFields, ...ctaFields],
    }),
  ],
  initialValue: HOME_CONTENT,
  preview: { prepare: () => ({ title: "Home Page" }) },
});

export const dockBucket = defineType({
  name: "dockBucket",
  title: "Dock bucket",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "count", type: "string" }),
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
            { name: "eyebrowTbd", title: "Eyebrow TBD chip", type: "string" },
            { name: "eyebrowClass", type: "string" },
            { name: "title", type: "string" },
            { name: "meta", type: "string" },
          ],
        },
      ],
    }),
  ],
});
