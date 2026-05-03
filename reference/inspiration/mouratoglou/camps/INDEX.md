---
source: mouratoglou.com/stages (Camps page — top → bottom)
captured: 2026-05-01
purpose: reference for interior page template (hero → subnav → content → CTA → form)
---

# Mouratoglou — Camps (Stages) Page

Ten screenshots covering the full Camps page from announce-bar to contact form. This is the **most representative interior-page template** on the site — sections we don't yet have on the home page reference (filter bar, accordion FAQ, manifesto block, in-page contact form) all live here.

> **PNG files:** screenshots not yet saved on disk. Drop them in with the suggested filenames below.

## Files

| # | Suggested filename | Section |
|---|--------------------|---------|
| 01 | `01-announce-and-hero.png` | Announce bar + header + hero w/ breadcrumb |
| 02 | `02-page-subnav-and-intro.png` | Page sub-nav + "Back in 1996…" intro |
| 03 | `03-playground-panel.png` | Black panel "THE MOURATOGLOU ACADEMY, YOUR PLAYGROUND" |
| 04 | `04-methodology.png` | "WHAT IS THE MOURATOGLOU METHODOLOGY?" + 5 pillars |
| 05 | `05-coaches.png` | Black panel "COACHES TRAINED BY PATRICK MOURATOGLOU" |
| 06 | `06-camps-grid-filters.png` | "9 AVAILABLE CAMPS" + filter bar + first row |
| 07 | `07-camp-cards.png` | Camp card grid detail (chips + title + arrow link) |
| 08 | `08-accommodation-and-options.png` | "STAY AT THE HEART…" + "OPTIONS & ACTIVITIES" carousel |
| 09 | `09-faq.png` | Black panel FAQ accordion |
| 10 | `10-manifesto-and-contact.png` | "THINK / TRAIN / BECOME A CHAMPION" + Contact us |

---

## Page structure

Top-to-bottom rhythm — alternating white/black panels, accent brackets between transitions:

```
ANNOUNCE-BAR    (orange, dismissible, promo + CTA)
HEADER          (logo · primary nav · BOOK / CONTACT / EN)
HERO            (full-bleed photo · breadcrumb · H1 · location chip)
PAGE-SUBNAV     (sticky white tab bar with black-pill active state)
INTRO           (white, two paragraphs, body-copy bolds for emphasis)
PLAYGROUND      (black panel, image-left + text-right)
METHOD          (white, text-left + image-right, numbered METHOD-LIST, ACCENT-BRACKET)
COACHES         (black panel, image-left + text-right, ACCENT-BRACKET)
CAMPS-GRID      ("N AVAILABLE …" + FILTER-BAR + 3-up CAMP-CARD grid)
ACCOMMODATION   (black panel, "STAY AT THE HEART…", 2-up ACCOM-CARDs)
OPTIONS         (white, "OPTIONS & ACTIVITIES", 4-up ACTIVITY-CARD carousel)
FAQ-ACCORDION   (black panel, FAQs)
MANIFESTO       (white, 3 lines of giant type, middle line orange)
CONTACT-FORM    (black panel, H1 "CONTACT US" + lead + form)
FOOTER          (not shown in these caps)
```

---

## New tokens introduced (to be added to PROJECT.md)

| Token | Means |
|-------|-------|
| `ANNOUNCE-BAR` | Top orange strip above header. Promo text + inline `BOOK NOW`-style link + `✕` dismiss. |
| `BREADCRUMB` | Small text breadcrumb sitting *above* H1 inside the hero |
| `PAGE-SUBNAV` | Sticky page-level sub-nav under hero, white bg, page-specific anchor links, **active item is a black filled pill** |
| `METHOD-LIST` | Numbered list, bold lead-in (e.g. "**Listening:**") + body sentence |
| `ACCENT-BRACKET` | Thin orange L-bracket / triangle motif that overlaps panel edges |
| `FILTER-BAR` | "FILTRER" label + dropdowns (Duration / Level / Profil) sitting above a count-prefixed grid headline (e.g. "9 AVAILABLE CAMPS") |
| `ACCOM-CARD` | Photo on top · bold title (star rating in plain text, e.g. `****`) · paragraphs · ghost `→` arrow link below the panel |
| `ACTIVITY-CARD` | Photo + title + bullet list, in a 4-up horizontally-scrolling carousel |
| `FAQ-ACCORDION` | Black panel · dark-grey rounded item rows · chevron-down expanders |
| `MANIFESTO` | Three-line typographic block, huge weight, middle line in `--brand-orange`, hairline rules between lines |
| `CONTACT-FORM` | Black panel · centered H1 "CONTACT US" · lead paragraph · form |

## Per-section detail

### 01 — ANNOUNCE-BAR + HERO
- Orange bar text: "AUGUST CAMPS : Book your all-inclusive stay" + inline white `BOOK NOW` button + `✕`
- Hero photo: coach + young player on clay, full-bleed
- Breadcrumb: `Home  >  Tous nos stages` (note: French residue — site is mid-i18n)
- H1: **OUR TENNIS TRAINING CAMPS** (uppercase, condensed, white)
- Location chip: `Mouratoglou Academy, Biot, French Riviera, France` (white pill, dark text)

### 02 — PAGE-SUBNAV
- Sticky white tab bar, **page-specific** (not the same as home subnav)
- Items: THE ACADEMY · METHODOLOGY · COACHES · CAMPS · ACCOMMODATION · OPTIONS & ACTIVITIES · FAQ · CONTACT
- Active item: black-filled rounded pill with white text
- Top hairline + bottom hairline frame the bar

### 03 — PLAYGROUND
- Black panel, image-left (aerial of campus) + text-right
- H2: **THE MOURATOGLOU ACADEMY, YOUR PLAYGROUND** (white)
- Two paragraphs with stats baked in: "320 days of sunshine," "12 hectares," "33 clay and hard courts," "8 indoor courts"
- ACCENT-BRACKET visible at panel edge

### 04 — METHODOLOGY
- White, text-left + photo-right (Patrick + young player celebrating)
- H2: **WHAT IS THE MOURATOGLOU METHODOLOGY?**
- Lead paragraph ending "rooted in **five fundamental pillars** :"
- Numbered METHOD-LIST:
  1. **Listening:** Deeply understanding each athlete, beyond words.
  2. **Individual coaching:** Adapting training to the specific needs of each player.
  3. **Relentless pursuit of excellence:** Always aiming higher and pushing back the limits.
  4. **Results-oriented culture:** Achieving tangible results on and off the court.
  5. **Constant questioning:** constantly reinventing and innovating.
- Closing line + black `DISCOVER` CTA
- Orange ACCENT-BRACKET frames the photo

### 05 — COACHES
- Black panel, image-left (full coaching staff team photo on red clay) + text-right
- H2: **COACHES TRAINED BY PATRICK MOURATOGLOU**
- Two paragraphs about the coaches' methodology + dual mission ("not only train champions on the court, but also in life")
- White-bordered ghost CTA: `DISCOVER THE ACADEMY`
- Orange ACCENT-BRACKET overlaps the image

### 06 — CAMPS-GRID + FILTERS
- White bg
- Count headline (centered, very large): **9 AVAILABLE CAMPS**
- "FILTRER" small caps label + 3 dropdown selects: Duration · Level · Profil
- 3-up CAMP-CARD grid begins below

### 07 — CAMP-CARD detail
- Card anatomy: photo · row of chips · bold title · `Discover this camp →` underline link
- Chips observed: `FROM AGE 6` · `FROM AGE 10` · `WEEK` · `WEEKEND` · `MORNING` · `MORNINGS` · `FULL DAYS` · `2 WEEKS` · `WITH TOURNAMENTS` · `JULY / AUGUST` · `ADULTS` · `FROM 3 YEARS`
- Cards seen: Youth Tennis Intensive Camp | Week (full days) · Youth Tennis Camp | Week (Mornings) · Juniors Tennis Camp Competition | 2 Weeks (Full days) · Adult Tennis Intensive Camp | Week (full days) · Adults Tennis Camp | Weekend (Full days) · Baby Tennis Camp | Week (Mornings)

### 08 — ACCOMMODATION + OPTIONS
- Black panel "STAY AT THE HEART OF THE ACADEMY" — centered H1, **2-up** ACCOM-CARD layout
  - Mouratoglou Hotel & Resort\*\*\*\* (4-star inline)
  - The Mouratoglou campus boarding school
  - Each card: ghost arrow link below (`Discover the hotel →`, `Discover the boarding school →`)
- White panel "OPTIONS & ACTIVITIES" — centered H1, **4-up** ACTIVITY-CARD horizontal carousel
  - Cards: INDIVIDUAL COACHING (5 HOURS) · MENTAL BOOST · PHYSICAL CHECK-UP (2 HOURS) · PRESSOTHERAPY PACK · (5th peeking off-edge — likely RECOVERY or similar)
  - Each card: photo + title + small details + bullet list

### 09 — FAQ-ACCORDION
- Black panel
- Centered H1: **FREQUENTLY ASKED QUESTIONS (FAQ)** (white, two-line wrap)
- Stack of dark-grey rounded rows with chevron-down expanders
- Questions visible: Why book a tennis camp? · What are the objectives of the Mouratoglou training camps? · What level do I need to be to take part in a tennis clinic? · Can I choose a course with accommodation? · How old do you have to be to take a tennis camp? · Are training sessions suitable for children and adults? · How do I get started in adult tennis?

### 10 — MANIFESTO + CONTACT-FORM
- White panel MANIFESTO:
  - **THINK LIKE A CHAMPION** (black)
  - **TRAIN LIKE A CHAMPION** (orange — middle line)
  - **BECOME A CHAMPION** (black)
  - Hairline rules between lines
- Black panel CONTACT-FORM (start of section visible):
  - Centered H1: **CONTACT US**
  - Lead paragraph: "Do you want to book a training camp or ask our team a question? Fill in the form below and our team will get back to you as soon as possible."

---

## Translation notes for Coconut Grove

- **Page-template repeatability:** This rhythm (HERO → PAGE-SUBNAV → mixed white/black panels → grid → FAQ → MANIFESTO → CONTACT-FORM) is a **template** we can reuse across CGSC interior pages (Camps, Membership, Regattas, etc.). `LIFT` the structure.
- **Page-specific subnav:** strong pattern. Each interior page gets its own anchored subnav listing only its own sections. `LIFT`.
- **Card system:** CAMP-CARD, ACCOM-CARD, ACTIVITY-CARD, PROGRAM-CARD are all variants of the same anatomy (photo · chips/meta · title · arrow link). Worth designing as one base component with variants.
- **Filter bar over count headline:** clean pattern for a CGSC programs/camps directory. `ADAPT`.
- **MANIFESTO block:** for CGSC, the equivalent could lean on the "historic sailing club" angle — three-line typographic statement that summarizes the brand. `ADAPT`.
- **Inline CONTACT-FORM at the bottom of every interior page:** higher-intent than a /contact route. `LIFT`.
- **Stat-baked prose:** concrete numbers ("12 hectares," "33 courts," "320 days of sunshine") beat marketing adjectives. We need CGSC's equivalent stats — `Q:` for Diego.
