---
source: mouratoglou.com (home page — below the hero video, top → bottom)
captured: 2026-05-01
purpose: detailed scroll-down reference for the home page
relationship: supersedes the older 12 root-level home page captures (which appear to be from a different/older state of the site)
---

# Mouratoglou — Home (below hero video)

13 screenshots covering everything below the main hero video on the home page. The user noted: *"the overall scroll down should give you more detail and I think you should have enough context for the overall concept that I'm trying to go for."* This is the canonical home reference.

> **Note:** the 12 screenshots at `reference/inspiration/mouratoglou/*.png` (environment-bullets, founder-quote, photo-grid, history-timeline, etc.) appear to be from a different/older capture of the home page. Sections in this set don't match. Treat **this** subdirectory as the current source of truth.
>
> **PNG files:** screenshots not yet saved on disk. Drop them in with the suggested filenames below.

## Files

| # | Suggested filename | Section |
|---|--------------------|---------|
| 01 | `01-search-bar-and-manifesto.png` | Sticky search bar + MANIFESTO ("THE N°1 TENNIS ACADEMY IN EUROPE") |
| 02 | `02-intro-and-our-camps-header.png` | "TENNIS ACADEMY, FRENCH RIVIERA" intro + black panel "OUR CAMPS" header begins |
| 03 | `03-camps-by-profile.png` | OUR CAMPS · BY PROFILE (Adults / Juniors tiles) |
| 04 | `04-camps-by-duration.png` | OUR CAMPS · BY DURATION (Weekly / Weekend tiles) |
| 05 | `05-camps-by-type.png` | OUR CAMPS · BY TYPE (Tennis / Golf tiles) + Tennis & School section header |
| 06 | `06-tennis-and-school.png` | TENNIS & SCHOOL PROGRAM — image-left + text-right |
| 07 | `07-values-cloud.png` | Black panel — orange-text values cloud (BOARDING / RESPECT / etc.) + THE ACADEMY title |
| 08 | `08-the-academy.png` | THE ACADEMY — text-left + aerial-right + "30 YEARS" stat |
| 09 | `09-ambassadors.png` | OUR AMBASSADORS — 4-up player carousel |
| 10 | `10-coaching-corner.png` | COACHING CORNER — 4-up article carousel |
| 11 | `11-international-tabs.png` | MOURATOGLOU INTERNATIONAL — region tab pills + 2-up location tiles |
| 12 | `12-inquiry-cta-and-sponsor-wall.png` | "Would you like to know more…" inquiry box + sponsor wall + newsletter band |
| 13 | `13-footer.png` | Full footer — 4×2 link columns + social + lang + agency credit |

---

## Page structure (below hero video)

```
SEARCH-OVERLAY    (sticky grey bar, "🔍 WHAT ARE YOU LOOKING FOR?")
MANIFESTO         (THE N°1 / TENNIS ACADEMY / IN EUROPE — middle line orange)
INTRO             (small caps eyebrow + body paragraph)
OUR CAMPS         (black panel, sticky left label + by-axis browser)
  ├── BY PROFILE  (2-up: Adults / Juniors)
  ├── BY DURATION (2-up: Weekly / Weekend)
  └── BY TYPE     (2-up: Tennis / Golf)
TENNIS & SCHOOL   (white, text-right + image-left, ACCENT-BRACKET)
VALUES-CLOUD      (black, 2-row orange uppercase labels separated by ▶ icons)
THE ACADEMY       (white, text-left + aerial-right, ACCENT-BRACKET)
OUR AMBASSADORS   (black, 4-up player carousel + arrows)
COACHING CORNER   (white, 4-up article carousel + arrows + ACCENT-BRACKET)
INTERNATIONAL     (black, region tab pills + 2-up location tiles)
INQUIRY-CTA       (white box on black, "Would you like to know more…" + CONTACT button)
SPONSOR-WALL      (white, 2 rows greyscale logos)
NEWSLETTER        (black, email + REGISTER + 2 consent checkboxes)
FOOTER            (black, 4×2 link columns + social + lang + agency credit)
```

---

## New tokens introduced

| Token | Means |
|-------|-------|
| `SEARCH-OVERLAY` | Grey-panel sticky search input ("🔍 WHAT ARE YOU LOOKING FOR?") |
| `BY-AXIS-BROWSER` | Section with sticky left label and right-side cycling sub-axes (BY PROFILE / BY DURATION / BY TYPE), each a 2-up tile grid |
| `IMG-TILE` | 2-up tile: full-bleed photo with title overlaid in white uppercase + small underlined arrow link below (e.g. WEEKLY / WEEKEND, TENNIS / GOLF, Adults / Juniors) |
| `VALUES-CLOUD` | Black panel · 2 rows of orange uppercase labels separated by small grey arrow icons. Tag-cloud / pillars list. |
| `AMBASSADOR-CARD` | Photo + small play-arrow overlay (bottom-left) + name + "Best ATP/WTA ranking [N]" with rank in a small box |
| `ARTICLE-CARD` | Photo + small arrow overlay + bold title + date (DD.MM.YYYY) — used in editorial carousel |
| `LOC-TAB-BAR` | Horizontal pill tabs for region filter — active state is white box with underline |
| `LOCATION-CARD` | Photo + arrow icon overlay + small-caps service tags (e.g. "TENNIS CAMPS · PADEL · PICKLEBALL") + city/country in bold |
| `INQUIRY-CTA` | White box sitting on black panel: H2 question + paragraph + black CTA button + orange ACCENT-BRACKET decoration |
| `NEWSLETTER` | Black panel · "SUBSCRIBE TO OUR NEWSLETTER" eyebrow · short blurb · email input + REGISTER button · 2 GDPR consent checkboxes · legal copy |
| `CAROUSEL-CONTROLS` | Thin progress bar (track fills as user advances) + circular ← → arrow buttons. Used for AMBASSADORS, COACHING CORNER. |

---

## Per-section detail

### 01 — SEARCH-OVERLAY + MANIFESTO
- Greybar sticky search appears across full width. "🔍 WHAT ARE YOU LOOKING FOR?" placeholder.
- MANIFESTO sits below on white:
  - **THE N°1** (black, with `°` decoration)
  - **TENNIS ACADEMY** (orange, middle line)
  - **IN EUROPE** (black, right-aligned)
  - Hairline rules between lines

### 02 — INTRO
- Eyebrow (small bold caps): **TENNIS ACADEMY, FRENCH RIVIERA**
- Body paragraph: "Renowned worldwide since its creation in 1996, the Mouratoglou Academy represents sporting excellence. Located between Nice and Cannes, in the heart of the French Riviera, the 32-acre campus features an outstanding complex with state-of-the-art facilities. Over the past 25 years, the Academy has helped hundreds of players from around the globe realize their dreams through a personalized tennis and educational training programme tailored to each athlete."

### 03–05 — OUR CAMPS (BY-AXIS-BROWSER)
- Black panel
- H1: **OUR CAMPS** (center-top)
- Left col (sticky): white uppercase label "EVERY AGE, EVERY LEVEL, EVERY WEEK OF THE YEAR"
- Right col cycles through three axes as user scrolls:
  - **BY PROFILE** — 2-up IMG-TILE: `Adults` · `Juniors (6 to 17 years old)` (small caps overlay, photos full-bleed)
  - **BY DURATION** — 2-up IMG-TILE: `WEEKLY` · `WEEKEND` (huge white text overlay)
  - **BY TYPE** — 2-up IMG-TILE: `TENNIS` · `GOLF` (huge white text overlay; "Golf & Tennis" sublabel below)
- Orange ACCENT-BRACKET visible at edges

### 06 — TENNIS & SCHOOL PROGRAM
- White
- Centered H1 (two-line): **TENNIS & SCHOOL** / **PROGRAM**
- Image-left (Patrick + Serena Williams + graduate in cap & gown holding diploma) + text-right
- Sub-H2: **TOP-LEVEL SPORTS AND ACADEMIC TRAINING**
- Two paragraphs: "With over 250 students and state-of-the-art facilities, the Mouratoglou Academy is the No. 1 tennis academy in Europe…"
- Black `DISCOVER` CTA
- Orange ACCENT-BRACKET wraps right side of section

### 07 — VALUES-CLOUD + THE ACADEMY title
- Black panel
- Two rows of orange uppercase labels separated by small grey arrow icons (▶):
  - Row 1: BOARDING ▶ SECONDARY SCHOOL ▶ CAMPUS ▶ MEDICAL FOLLOW-UP ▶ DEDICATED INTEGRITY COACHING ▶ PASSION
  - Row 2: RESPECT ▶ PERSEVERANCE ▶ AMBITION ▶ DETERMINATION
- White H1 below: **THE ACADEMY**

### 08 — THE ACADEMY
- White
- Sub-H2: **THE MOURATOGLOU ACADEMY HAS BEEN DEVELOPING CHAMPIONS FOR 30 YEARS**
- Body: "The Mouratoglou Academy, a global leader in tennis, welcomes over 5,000 trainees and 250 students annually…"
- Black CTA: `THE MOURATOGLOU ACADEMY`
- Image-right: aerial of the campus
- Orange ACCENT-BRACKET wraps the photo

### 09 — OUR AMBASSADORS
- Black panel
- Centered H1: **OUR AMBASSADORS** (white)
- 4-up AMBASSADOR-CARD carousel; each card: tall portrait photo · small play-arrow overlay (bottom-left) · name (white, bold) · "Best ATP/WTA ranking" + rank in a small bordered box
- Cards visible: Holger Rune (ATP 4) · Stefanos Tsitsipas (ATP 3) · Coco Gauff (WTA 2) · Brenda Fruhvirtova (WTA 87) · 5th peeking off-edge ("Lin…" — likely Linda Fruhvirtova)
- CAROUSEL-CONTROLS below: progress bar (~⅓ filled) + circular ← / → arrows

### 10 — COACHING CORNER
- White
- Centered H1: **COACHING CORNER**, framed top-left and bottom-right by orange ACCENT-BRACKET corners
- 4-up ARTICLE-CARD carousel; each card: photo + small arrow overlay + bold title + date (DD.MM.YYYY)
- Articles visible:
  - "Guide: choosing strings for your tennis racket" — 18.12.2024
  - "Backhand volley technique in tennis" — 18.12.2024
  - "5 pre-match routines to help you prepare for your tennis match" — 10.12.2024
  - "How to work on your tennis technique: The complete guide" — 10.12.2024
  - 5th peeking off-edge
- CAROUSEL-CONTROLS below

### 11 — MOURATOGLOU INTERNATIONAL
- Black panel
- Centered H1 (two-line, huge): **MOURATOGLOU** / **INTERNATIONAL** (white)
- LOC-TAB-BAR below: ASIA (active — white box + underline) · EUROPE · MIDDLE EAST & AFRICA · NORTH AMERICA · LATIN AMERICA. Hairline below the tabs.
- 2-up LOCATION-CARD grid:
  - Service tags `TENNIS CAMPS  &  PADEL  &  PICKLEBALL` + bold "Bali, Indonesia" + photo with arrow icon
  - Service tags `TENNIS CAMPS  &  SCHOOL` + bold "Kuala Lumpur, Malaysia" + photo with arrow icon

### 12 — INQUIRY-CTA + SPONSOR-WALL + NEWSLETTER
- INQUIRY-CTA: white card sitting on black panel, with H2 "WOULD YOU LIKE TO KNOW MORE ABOUT THE MOURATOGLOU ACADEMY?" + paragraph "Our team is available 7 days a week to answer your questions by e-mail, telephone or WhatsApp." + black `CONTACT` button. Orange ACCENT-BRACKET decoration on the right.
- SPONSOR-WALL: white panel, 2 rows of greyscale logos, generously spaced:
  - Row 1: Dunlop · Asics · Mercedes ByMyCar · waterdrop · Michaël Zingraf Christie's · UTR (Powered by Oracle)
  - Row 2: Tennis Europe · mycoach pro · Zenniz · Laurel Springs School
- NEWSLETTER: black panel
  - Eyebrow: **SUBSCRIBE TO OUR NEWSLETTER**
  - Blurb: "Stay connected with the Academy's news and events, tips to improve, and exclusive offers."
  - Inline form: email input + `REGISTER` button (right-aligned, white text on black)
  - 2 unchecked GDPR consent checkboxes with long legal copy under each

### 13 — FOOTER
- Black panel
- Top: logo `MOURATOGLOU | 30 YEARS` lockup
- 4 columns × 2 rows of footer links:

| Col | Header | Links |
|-----|--------|-------|
| 1 | OUR PROGRAMS | Adults Camps · Juniors Camps · Baby Tennis · Tennis & School |
| 2 | OUR VALUES | Academy · Patrick Mouratoglou · Methodology |
| 3 | HIGH PERFORMANCE | Professionnals · Ambassadors · Future of Tennis · Coached by Patrick Mouratoglou |
| 4 | INTERNATIONAL | Our Centers · Contact |
| 5 | THE BLOG | Coaching Tips · Coaching Corner · Technique · Physical and Mental · Equipements |
| 6 | USEFUL LINKS | Tennis Camps · Academic Career · Training Center · Camps · Tennis Coaching |
| 7 | PRACTICAL INFORMATION | Tel: +33 (0)4 83 88 14 30 · Gift Card · App My Mouratoglou · Mouratoglou Resort\*\*\*\* · Le Country Club |
| 8 | STAY CONNECTED | Facebook · Instagram · TikTok · YouTube |

- Bottom bar: `EN ▾` lang switcher · Copyright © 2024 · Privacy policy · Legal information · Cookies · "Website created by Adveris"

---

## Translation notes for Coconut Grove

- **Sticky search bar:** worth it if CGSC has a content depth that justifies it (events, regattas, members directory, classes). Otherwise `SKIP`.
- **MANIFESTO at the top of home:** strong pattern. CGSC equivalent could lean on heritage ("OLDEST / SAILING CLUB / IN MIAMI" style — `Q:` for Diego on positioning).
- **BY-AXIS-BROWSER:** powerful pattern for navigating CGSC programs (BY AGE / BY EXPERIENCE / BY DURATION). `LIFT` the structure.
- **IMG-TILE with title overlay:** clean, flexible card. Use across CGSC home for major program callouts.
- **VALUES-CLOUD:** could work for CGSC values/heritage words (TRADITION ▶ STEWARDSHIP ▶ COMMUNITY ▶ COMPETITION ▶ FAMILY etc.) but it's a niche pattern — verify it earns its place.
- **OUR AMBASSADORS:** CGSC equivalent might be notable members / champion sailors who came up through the club. Has obvious credibility value.
- **COACHING CORNER articles:** CGSC blog/editorial. Worth having even if light at first.
- **INTERNATIONAL section:** doesn't apply. `SKIP`.
- **INQUIRY-CTA + SPONSOR-WALL + NEWSLETTER + FOOTER pattern:** all `LIFT`. The end-of-page rhythm (white box CTA → sponsor wall → black newsletter → footer) is solid IA.
- **Sponsor wall:** CGSC likely has partner brands or sister clubs to feature. Worth confirming.
- **Footer link density:** 8 columns is a lot. CGSC starts simpler — likely 4 cols (PROGRAMS · CLUB · MEMBERSHIP · CONTACT) plus social. `ADAPT`.
