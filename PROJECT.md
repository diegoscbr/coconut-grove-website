# Coconut Grove Website — Working Doc

Living source of truth for this revamp. Update freely. Keep prose tight; bullets > paragraphs.

---

## Project at a glance

- **Goal:** Revamp the **CGSC Instructional Center** site (`cgscic.org`) using Mouratoglou Academy (mouratoglou.com) as the design + structural reference.
- **Owner:** Diego (diego.escobar@pmg.com), agency-side at PMG
- **Stakeholder:** **Maru Urban**, incoming Director of Sailing Performance & Development at CGSC. Three pillars: pipeline · technical performance · innovation. Maru = the Patrick Mouratoglou analogue.
- **Scope:** **Instructional Center only** (`cgscic.org`). Parent club (`cgsc.org`) is **out** for v0 (confirmed by Maru 2026-05-01).
- **Repo:** `~/Workshop/coconut-grove-website`
- **Stack:** _TBD — assume Next.js App Router on Vercel unless decided otherwise._
- **Status:** Reference-gathered, brand audit done. Pre-grill / pre-code.

## Folder map

```
coconut-grove-website/
├── PROJECT.md                ← this file (universal language + status)
├── reference/
│   ├── inspiration/
│   │   └── mouratoglou/      ← screenshots + INDEX.md
│   └── brand/                ← Coconut Grove logos / palette / assets (TBD)
└── README.md
```

---

## Universal language (shorthand)

Use these as the canonical names so we don't re-explain. When you say a token, I treat it as the spec below.

### Sections (mirroring Mouratoglou)

| Token | Means |
|-------|-------|
| `HERO` | Full-bleed photo/video bg, big uppercase white headline, breadcrumb above, location chip below |
| `SUBNAV` | Sticky tab bar that appears under hero, links to in-page anchors |
| `ENV` | "Environment" — dark panel + bulleted facility list |
| `METHOD` | "Methodology" — 2-col, principles list (bold lead-in + sub) + editorial photo |
| `FOUNDER` | Black panel, centered title, orange quote glyph, pull-quote + B&W portrait |
| `PROBASE` | "Pro Base" — paragraph with name-drop links + READ MORE + photo strip |
| `CAMPS` | 3-up card grid (photo + chips + title + "Discover this camp →") |
| `SCHOOL` | "Tennis & School" — centered headline + 4-up program card grid |
| `HISTORY` | Black panel, year-card carousel, progress bar + arrow controls |
| `LOCATIONS` | "Other Academies Abroad" — location cards w/ imagery |
| `TRUST` | Equality Index / accreditations + sponsor logo wall |
| `FOOTER` | Black, logo + lang switcher + agency credit |
| `ANNOUNCE-BAR` | Orange strip above header. Promo text + inline link + `✕` dismiss |
| `BREADCRUMB` | Small text breadcrumb above H1 inside hero |
| `PAGE-SUBNAV` | Sticky page-level sub-nav under hero, page-specific anchors, active item is black-filled pill |
| `MANIFESTO` | 3-line giant typographic statement, middle line in brand orange, hairline rules between |
| `CONTACT-FORM` | Black panel w/ centered H1 "CONTACT US" + lead + form (appears at bottom of interior pages) |
| `FAQ-ACCORDION` | Black panel, dark-grey rounded rows, chevron-down expanders |

### Components

| Token | Means |
|-------|-------|
| `CTA-PRIMARY` | Orange filled button, white text (e.g. BOOK) |
| `CTA-SECONDARY` | Black filled button, white text (e.g. CONTACT) |
| `CTA-GHOST` | Black border on white (e.g. READ MORE, VIEW FULL SCREEN) |
| `CHIP` | Small rounded pill w/ uppercase text (location, age tag, etc.) |
| `LOGO-WALL` | Single row, greyscale logos, generous spacing |
| `PHOTO-STRIP` | Edge-bleed 4–5-up image row, no captions |
| `YEAR-CARD` | Dark card, year as title, short paragraph below |
| `PROGRAM-CARD` | Photo on top, bold title, description paragraph |
| `CAMP-CARD` | Photo, chips row, title, "Discover this … →" link |
| `ACCOM-CARD` | Photo, bold title (star rating inline as `****`), paragraph, ghost `→` arrow link |
| `ACTIVITY-CARD` | Photo, title, meta (e.g. duration), bullet list — used in 4-up carousel |
| `METHOD-LIST` | Numbered list, bold lead-in + body sentence (e.g. "**Listening:** …") |
| `FILTER-BAR` | "FILTRER" label + dropdowns above a count-prefixed grid headline ("N AVAILABLE …") |
| `ACCENT-BRACKET` | Thin orange L-bracket / triangle motif overlapping panel edges |
| `SEARCH-OVERLAY` | Sticky grey-panel search input ("🔍 WHAT ARE YOU LOOKING FOR?") |
| `BY-AXIS-BROWSER` | Section w/ sticky left label and right-side cycling sub-axes (BY PROFILE / BY DURATION / BY TYPE), each a 2-up tile grid |
| `IMG-TILE` | 2-up tile: full-bleed photo + title overlaid in white uppercase + small underlined arrow link below |
| `VALUES-CLOUD` | Black panel · 2 rows of orange uppercase labels separated by small ▶ icons. Pillars / values list. |
| `AMBASSADOR-CARD` | Photo + bottom-left play-arrow overlay + name + "Best ATP/WTA ranking [N]" boxed |
| `ARTICLE-CARD` | Photo + arrow overlay + bold title + date — used in editorial carousel |
| `LOC-TAB-BAR` | Horizontal pill tabs for region/category filter, active state is white box w/ underline |
| `LOCATION-CARD` | Photo + arrow overlay + small-caps service tags + city/country bold |
| `INQUIRY-CTA` | White box sitting on black panel: question H2 + paragraph + dark CTA button + orange ACCENT-BRACKET decoration |
| `NEWSLETTER` | Black panel · eyebrow + blurb + inline email/register form + GDPR consent checkboxes + legal copy |
| `CAROUSEL-CONTROLS` | Thin progress bar (fills as user advances) + circular ← / → arrow buttons |

### Design tokens (provisional — refine when brand assets land)

| Token | Value |
|-------|-------|
| `--brand-orange` | TBD (Mouratoglou ref ≈ #E85A2C) |
| `--ink` | near-black, body + buttons |
| `--paper` | white |
| `--panel-dark` | true black for ENV / FOUNDER / HISTORY / CAMPS sections |
| Type — display | bold uppercase, condensed-ish sans (Mouratoglou uses something Druk-like) |
| Type — body | neutral humanist sans |

### Workflow shorthand

| Token | Means |
|-------|-------|
| `LIFT` | Copy this pattern from Mouratoglou as-is |
| `ADAPT` | Use the structure but rebrand for Coconut Grove |
| `SKIP` | Don't include this section |
| `NEW` | Coconut-Grove-only section, not in reference |
| `TBD` | Decision pending — flag for me before assuming |
| `Q:` | I have a question, will not proceed without answer |

---

## Open questions

- What's the actual Coconut Grove brand? (name, logo, palette, typeface)
- Stack confirmation: Next.js App Router OK?
- Hosting: Vercel?
- Languages — single (EN) or multi (EN/ES given Miami)?
- Booking system / CMS — bespoke or integration (e.g. existing booking provider)?

## Next steps

1. Drop Coconut Grove brand assets into `reference/brand/`.
2. Confirm stack + hosting.
3. Answer open questions above.
4. Scaffold project + start with `HERO` + `SUBNAV`.
