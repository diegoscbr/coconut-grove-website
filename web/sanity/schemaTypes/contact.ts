import { defineType, defineField } from "sanity";
import { CONTACT_CONTENT } from "@/lib/content/contact";

/**
 * The Contact page — a singleton (id "contact"). Each object mirrors a section
 * of prototype/contact.html. initialValue seeds the exact current copy.
 */
export const contact = defineType({
  name: "contact",
  title: "Contact Page",
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
        defineField({ name: "subheadLead", title: "Subhead (lead)", type: "string" }),
        defineField({ name: "subheadEm", title: "Subhead (emphasis)", type: "string" }),
        defineField({ name: "locationChip", title: "Location chip", type: "string" }),
      ],
    }),

    defineField({
      name: "inquiry",
      title: "Inquiry section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 2 }),
        defineField({
          name: "form",
          title: "Inquiry form",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "headlineLead", title: "Headline (lead)", type: "string" }),
            defineField({ name: "headlineEm", title: "Headline (emphasis)", type: "string" }),
            defineField({ name: "helper", title: "Helper text", type: "text", rows: 3 }),
            defineField({ name: "namePlaceholder", title: "Name placeholder", type: "string" }),
            defineField({ name: "emailPlaceholder", title: "Email placeholder", type: "string" }),
            defineField({ name: "phonePlaceholder", title: "Phone placeholder", type: "string" }),
            defineField({ name: "programDefaultOption", title: "Program: default option", type: "string" }),
            defineField({
              name: "programOptions",
              title: "Program options",
              type: "array",
              of: [
                defineField({
                  name: "option",
                  type: "object",
                  fields: [defineField({ name: "label", type: "string" })],
                }),
              ],
            }),
            defineField({ name: "sailorInfoPlaceholder", title: "Sailor info placeholder", type: "string" }),
            defineField({ name: "notesPlaceholder", title: "Notes placeholder", type: "text", rows: 2 }),
            defineField({ name: "submitLabel", title: "Submit button label", type: "string" }),
          ],
        }),
        defineField({
          name: "info",
          title: "Direct line info",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "phoneLabel", title: "Phone label", type: "string" }),
            defineField({ name: "phoneHref", title: "Phone link", type: "string" }),
            defineField({ name: "phoneText", title: "Phone text", type: "string" }),
            defineField({ name: "phoneSmallPre", title: "Phone small (pre-chip)", type: "string" }),
            defineField({ name: "phoneTbd", title: "Phone TBD chip", type: "string" }),
            defineField({ name: "emailLabel", title: "Email label", type: "string" }),
            defineField({ name: "emailHref", title: "Email link", type: "string" }),
            defineField({ name: "emailText", title: "Email text", type: "string" }),
            defineField({ name: "addressLabel", title: "Address label", type: "string" }),
            defineField({ name: "addressLine1", title: "Address line 1", type: "string" }),
            defineField({ name: "addressSmall", title: "Address small", type: "string" }),
            defineField({ name: "openHouseLabel", title: "Open house label", type: "string" }),
            defineField({ name: "openHouseTbd", title: "Open house TBD chip", type: "string" }),
            defineField({ name: "openHouseSmallPre", title: "Open house small (pre-link)", type: "string" }),
            defineField({ name: "openHouseLinkText", title: "Open house link text", type: "string" }),
            defineField({ name: "openHouseLinkHref", title: "Open house link", type: "string" }),
            defineField({ name: "openHouseSmallPost", title: "Open house small (post-link)", type: "string" }),
            defineField({ name: "foot", title: "Footnote", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    defineField({
      name: "contacts",
      title: "Instructional Center contacts",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 2 }),
        defineField({
          name: "people",
          title: "People",
          type: "array",
          of: [
            defineField({
              name: "person",
              type: "object",
              fields: [
                defineField({ name: "photo", title: "Photo (static asset URL)", type: "string" }),
                defineField({ name: "role", type: "string" }),
                defineField({ name: "name", type: "string" }),
                defineField({ name: "phoneText", title: "Phone text", type: "string" }),
                defineField({ name: "phoneHref", title: "Phone link", type: "string" }),
                defineField({ name: "emailText", title: "Email text", type: "string" }),
                defineField({ name: "emailHref", title: "Email link", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({ name: "footPre", title: "Footnote (pre-link)", type: "text", rows: 2 }),
        defineField({ name: "clubLinkText", title: "Club link text", type: "string" }),
        defineField({ name: "clubLinkHref", title: "Club link", type: "string" }),
        defineField({ name: "footMid", title: "Footnote (mid)", type: "string" }),
        defineField({ name: "donateLinkText", title: "Donate link text", type: "string" }),
        defineField({ name: "donateLinkHref", title: "Donate link", type: "string" }),
      ],
    }),

    defineField({
      name: "visit",
      title: "Visit the dock",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "prose", type: "text", rows: 4 }),
        defineField({
          name: "list",
          title: "Details list",
          type: "object",
          fields: [
            defineField({ name: "officeHoursLabel", title: "Office hours label", type: "string" }),
            defineField({ name: "officeHoursTbd", title: "Office hours TBD chip", type: "string" }),
            defineField({ name: "openHouseLabel", title: "Open house label", type: "string" }),
            defineField({ name: "openHouseTbd", title: "Open house TBD chip", type: "string" }),
            defineField({ name: "openHouseTrailPre", title: "Open house trailing (pre-link)", type: "string" }),
            defineField({ name: "calendarLinkText", title: "Calendar link text", type: "string" }),
            defineField({ name: "calendarLinkHref", title: "Calendar link", type: "string" }),
            defineField({ name: "openHouseTrailPost", title: "Open house trailing (post-link)", type: "string" }),
          ],
        }),
      ],
    }),

    defineField({
      name: "map",
      title: "Map placeholder",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "sub", type: "text", rows: 2 }),
        defineField({ name: "name", title: "Map card name", type: "string" }),
        defineField({ name: "address", title: "Map card address", type: "string" }),
        defineField({ name: "linkText", title: "Map button label", type: "string" }),
        defineField({ name: "linkHref", title: "Map button link", type: "string" }),
      ],
    }),
  ],
  initialValue: CONTACT_CONTENT,
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
