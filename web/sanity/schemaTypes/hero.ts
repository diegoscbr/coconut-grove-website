import { defineField, defineType } from "sanity";

/**
 * The homepage hero. Media are URL strings (pointing at /assets for now) so the
 * replica is exact today and the client can swap in uploads later. Layout,
 * color, and type stay locked in globals.css — the CMS never touches them.
 */
export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "headlineLines",
      title: "Headline (one line per row)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "modifier", type: "string" }),
    defineField({ name: "subhead", type: "text", rows: 3 }),
    defineField({ name: "subheadEmphasis", title: "Emphasized tail line", type: "string" }),
    defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
    defineField({ name: "ctaHref", title: "Button link", type: "string" }),
    defineField({ name: "posterUrl", title: "Poster image URL", type: "string" }),
    defineField({ name: "videoUrl", title: "Background video URL", type: "string" }),
  ],
});
