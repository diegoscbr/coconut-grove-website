---
source: mouratoglou.com (header / nav / mega-menu states)
captured: 2026-05-01
purpose: reference for top-of-site IA, mega-menu patterns, and BOOK overlay
---

# Mouratoglou — Header & Mega-menu Captures

Four screenshots of the global header in different states. These show the navigation IA + interaction patterns we'll likely `ADAPT` for Coconut Grove (terms in caps follow the shorthand in `PROJECT.md`).

> **PNG files:** screenshots not yet saved on disk. When dropping them in, suggested filenames are listed below.

## Files

| # | Suggested filename | State | Active item |
|---|--------------------|-------|-------------|
| 01 | `01-mega-tennis-and-school.png` | Mega-menu (3-col feature) | TENNIS & SCHOOL |
| 02 | `02-mega-camps.png` | Mega-menu (3-col feature) | CAMPS |
| 03 | `03-mega-academy-international.png` | Mega-menu (wide directory) + 30 YEARS skin | ACADEMY → INTERNATIONAL |
| 04 | `04-book-overlay.png` | Full-screen overlay (location-chooser) | BOOK |
| 05 | `05-contact-overlay.png` | Full-screen overlay (location-chooser) | CONTACT |

---

## Patterns observed

### Default header (visible on all)
- Logo (L): "Mouratoglou Academy / French Riviera" stacked wordmark
- Primary nav (center): `CAMPS` · `TENNIS & SCHOOL` · `ACADEMY` · `30 YEARS`
- Right cluster: orange `BOOK` · black `CONTACT` · `EN ▾` lang switcher
- Hovered/active primary-nav item turns **orange**

### Anniversary skin (screenshot 03)
- Logo morphs to lockup: `MOURATOGLOU | 30 YEARS` (with the 30 YEARS sub-brand bug)
- Primary nav inserts an extra item: `INTERNATIONAL`
- Browser tab title flips to "Our 30th anniversary"
- This is a **campaign sub-skin** of the header, not just a hover state

### Mega-menu — 3-col feature layout (screenshots 01, 02)
Used for content-heavy sections (CAMPS, TENNIS & SCHOOL).

| Col | Content |
|-----|---------|
| Left (~40%) | Full-bleed editorial photo, no caption |
| Middle (~30%) | Small uppercase H2 (matches active nav) · short blurb · 1–2 black `CTA-SECONDARY` buttons |
| Right (~30%) | Vertical sub-link list, no bullets, generous line spacing |

**Screenshot 01 — TENNIS & SCHOOL**
- Photo: graduation ceremony (caps & gowns)
- Blurb: "Our Tennis & School program offers our young students a high level of sports and academic training to combine intensive training, tournaments and school courses throughout the year."
- CTAs: `KNOW EVERYTHING ABOUT TENNIS & SCHOOL` · `ADMISSION`
- Sub-links: Sports Program · Selection Week · School - American Section · School - French · Campus · University Placement · Sports Medical Center · CONTACT

**Screenshot 02 — CAMPS**
- Photo: coach with on-court ball hopper
- Blurb: "Tennis camps adapted to every ages, every levels, every week of the year."
- CTAs: `OUR CAMPS` · `20% OFF ACCOMMODATION` (note: promo CTA inline in the menu)
- Sub-links: Adults camps · Junior camps

### Mega-menu — wide directory layout (screenshot 03)
Used when the goal is finding-a-location, not telling a story. **No left photo.**

- Left col: H2 `INTERNATIONAL` · paragraph blurb · 3 stacked black CTAs (`MOURATOGLOU INTERNATIONAL` · `JOB OFFERS` · `SHARE YOUR PROJECT`)
- Right area:
  - Chip filter row: `ALL` (active, black fill) · `MOURATOGLOU TENNIS CENTERS` (outlined chip) · `MOURATOGLOU ACADEMIES` (outlined chip)
  - 2-col region accordion underneath: `ASIA ▾` / `EUROPE ▾` / `MIDDLE EAST & AFRICA ▾` (left col) · `NORTH AMERICA ▾` / `LATIN AMERICA ▾` (right col)

### Location-chooser overlay (screenshots 04, 05)
A **shared shell** used by both `BOOK` and `CONTACT` CTAs. Full-screen takeover, **not** a mega-menu.

**Shell (identical across both):**
- Header collapses to: logo (anniversary lockup) + `CLOSE ✕` only. Primary nav and right-cluster CTAs hidden.
- 2-col body: H2 on the left, chooser on the right
- Right side has two parts: a **featured property card** (the home campus, France) + a vertical stack of region buttons (each with `›`): `NORTH AMERICA` · `LATIN AMERICA` · `EUROPE` · `ASIA` · `MIDDLE-EAST & AFRICA`
- Page content visible/dimmed underneath — overlay, not a separate route

**Per-trigger content:**

| | BOOK (screenshot 04) | CONTACT (screenshot 05) |
|---|---|---|
| H2 | WHERE WOULD YOU LIKE TO GO? | WHO WOULD YOU LIKE TO CONTACT? |
| Featured card | bold `France` + chevron · sub-line "Mouratoglou Academy, Biot, French Riviera, France" | 🇫🇷 flag + `FRANCE` + chevron · sub-line "Mouratoglou Academy, Biot, French Riviera, FRANCE" · **aerial photo of the campus inside the card** |
| Card density | text-only | text + flag + photo |

The pattern: **same overlay shell, parameterized title and card density.** Worth treating as one component when we build it.

---

## Translation notes for Coconut Grove

- **Anniversary skin:** Coconut Grove has a heritage story (historic sailing club) — a similar sub-skin could be useful for an anniversary or campaign moment. `TBD`.
- **3-col feature mega-menu:** strong fit for CGSC's primary sections (e.g. CAMPS, MEMBERSHIP, REGATTAS, ABOUT). `ADAPT`.
- **Wide directory mega-menu:** assumes multi-location/multi-property — CGSC is a single club. Likely `SKIP` unless we use it for a programs directory.
- **Location-chooser overlay (BOOK + CONTACT):** the multi-property chooser is `SKIP` — CGSC is one club. But the **shell** (collapse-to-logo + CLOSE ✕ + parameterized full-page funnel) is reusable for both BOOK and CONTACT flows. `ADAPT` as a single overlay component with title + body slots.
- **Promo CTA inside mega-menu** (e.g. "20% OFF ACCOMMODATION"): worth noting as a pattern for surfacing time-bound offers without cluttering the nav itself.
