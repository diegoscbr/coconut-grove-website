# Brand Decisions · v1.1

> v1 locked **2026-05-01** (brainstorm session). v1.1 reconciled **2026-05-31** after the multi-page mockup build (`MOCKUPS_PRD.md`).
> v1.1 supersedes v1 where they conflict; v1 sections that are not in the v1.1 changelog below remain authoritative as written.

---

## v1.1 changelog (2026-05-31)

Five decisions changed during the multi-page mockup build (grill-me session on 2026-05-31 + Phase A–H build). Each is reflected in the live prototype at <https://prototype-sooty-seven.vercel.app>.

| § | What changed | Why |
|---|---|---|
| **§1 · Hero copy (subhead)** | Live copy locked as v1.1: *"For 80 years the CGSC has been the training ground for sailors at every level. Now, we're taking it to the next level, for all sailors on Biscayne Bay."* | v1 ended on elite outcomes ("international wins and Olympic podiums"). Diego revised the live copy to be inclusive ("for all sailors") — better matches the IC's every-level brief. |
| **§3 · Five pillars → three program destinations** | Three pillars in IA: **Adult Sailing · Race Team · Camps & Coaching**. Junior Academy + High Performance Center absorbed into Race Team as pathway stages (Discover → Develop → Race → Compete → Perform; HPC is the Perform apex). | Junior Academy and HPC are not peer pillars — they're stages of the same competitive ladder. Collapsing five into three removed false distinctions; HPC gains the apex rather than being one tile in five. |
| **§7 · Programs grid (Home)** | 5-tile featured+grid → **3 cards** (Adult Sailing · Race Team · Camps & Coaching). | Follows §3 consolidation. |
| **§8 · Pathway visualization location** | Pathway lives on **/programs/race-team#pathway**, not on Home. Home shows a teaser linking to it. | Pathway is the Race Team story (junior to HPC). Putting it on Home dilutes both surfaces; making it the centerpiece of Race Team strengthens that page. |
| **§18 (new) · Marketplace surface** | New top-level page added: a **member-only club bulletin board** for buying, selling, and trading used sailing gear. Three templates (index + listing detail + post-item form). Member-only conceit visible as an auth-gate banner. | Not in v1. Surfaced by Diego during the multi-page IA grill-me; built in Phase G. |

### IA — locked v1.1

Top-level nav (6): **Home · Programs · About · Calendar · Contact · Marketplace**
- Programs sub-pages (3): Adult Sailing · Race Team · Camps & Coaching
- About is one scrolling page (Heritage + Coaches + Timeline; no news section)
- Calendar absorbs the news/blog index; individual stories have their own template at `/calendar/[slug]`
- Marketplace = index + listing detail + post-item form, members-only conceit

12 page templates total — see `MOCKUPS_PRD.md` for the full build trace.

---

## 1 · Hero copy

**Headline (locked)**
```
THE PREMIER
SAILING ACADEMY
IN BISCAYNE BAY
```
Modifier: *Since 1946 · Accessible · World-Class*

Direct structural mirror of "THE N°1 / TENNIS ACADEMY / IN EUROPE" (Mouratoglou).

**Subhead (locked)**
> For 80 years, the Bay's training ground for sailors at every level. *Now, taking it to the next — international wins and Olympic podiums.*

Two-beat shape: heritage anchor + forward ambition. Italic "now…" beat carries the rust accent. Phrasing avoids implying past sailors weren't winning — frames the new chapter as elevation, not invention.

---

## 2 · Page structure (the spine)

```
1. Hero
2. Programs grid          ← spine (Mouratoglou-mirror)
3. The Pathway
4. The Coaching
5. Heritage + Champions
6. The Bay
7. Stories / Calendar
8. Visit / Contact
```

---

## 3 · The five pillars

| # | Pillar | One-liner |
|---|---|---|
| 1 | **Junior Academy** | Year-round, ages 6–18 |
| 2 | **Adult Sailing** | Learn-to-sail + recreational |
| 3 | **Race Team** | Competitive squad, junior + adult |
| 4 | **High Performance Center** | Maru-led, international + Olympic pathway |
| 5 | **Camps & Coaching** | Seasonal intensives + instructor pathway |

---

## 4 · Hero visual

**Direction · Bay-as-territory + heritage video weave**

Drone-led footage of Biscayne Bay establishing the territory, intercut with archival photography (1946+) woven into modern high-performance racing footage of kids racing today. Diego is sourcing/cutting the video.

Combines D's territorial frame with C's heritage→now arc as a temporal layer.

---

## 5 · Brand identity (system D · CGSC modernized)

**Palette**

| Role | Hex | Notes |
|---|---|---|
| Primary navy | `#1A3A8A` | Carried forward from CGSC parent club |
| Light blue | `#4A8FCF` | Secondary, parent-club continuity |
| White | `#FFFFFF` | Base |
| Warm rust accent | `#FF8B5E` | Italic-only; "new chapter" beat |
| Charcoal | `#111111` | Body text |

**Typography (Inter throughout — no serifs)**

| Use | Spec |
|---|---|
| Display | Inter Tight 900 · uppercase · `letter-spacing: -0.035em` |
| Body | Inter 400 · sentence case |
| UI labels / eyebrows | Inter 700 · uppercase · `letter-spacing: 0.18em` |
| Accent beat (subhead italic) | Inter 500 italic · rust |

References: Sperry Top-Sider (heritage navy lineage), Nautica (signal-accent thinking), but explicitly modernized — no Roman/serif throwbacks. American maritime, accessible, unstuffy.

---

## 6 · Wordmark lockups

**Header (B · Stacked two-line)**
```
[CGSC pennant]  INSTRUCTIONAL CENTER
                Coconut Grove · 1946
```

**Footer (C · Centered institutional)**
```
        [CGSC pennant]
   INSTRUCTIONAL CENTER
     Coconut Grove · 1946
```

Notes:
- Kicker is **Coconut Grove · 1946** (the neighborhood, not the bay)
- Headline territorial claim is *Biscayne Bay* — distinct from wordmark kicker
- Pennant is the existing CGSC parent-club mark; academy uses the same pennant with sub-mark

---

## 7 · Programs grid (section 2 layout)

**Treatment B · Featured pillar + 4-grid below — with rotation**

```
┌─────────────────────────────────────────┐
│  FEATURED PILLAR (wide hero card)       │
│  · eyebrow text (rotates by season)     │
│  · pillar name (display weight)         │
│  · longer description                   │
│  · CTA                                  │
└─────────────────────────────────────────┘
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ p1   │ │ p2   │ │ p3   │ │ p4   │
└──────┘ └──────┘ └──────┘ └──────┘
```

**Rotation principle**: the spotlight slot is config-driven. Featured pillar, eyebrow text, and image swap seasonally:

| Trigger | Featured | Eyebrow |
|---|---|---|
| Default | High Performance Center | "The new chapter" |
| Jun–Aug | Camps & Coaching | "Summer enrollment open" |
| Mar–May | Race Team | "Regatta season" |
| Aug–Sep | Junior Academy | "Back-to-school sailing" |

Implementation: featured pillar should be a CMS or config field, not hardcoded.

---

## 8 · Pathway visualization (section 3) · C · Interactive selector

Click-to-unfold pattern. Five rungs render as a vertical list on the left; right panel updates with photo, description, and meta (frequency, coach ratio, season) for the selected rung.

```
┌───────────────┬─────────────────────────────┐
│  Discover     │  [photo of selected rung]   │
│  Develop      │                             │
│  Race      ●  │  Race                       │
│  Compete      │  Local + regional racing... │
│  Perform      │                             │
│               │  3×/week · Coach-led · YR  │
└───────────────┴─────────────────────────────┘
```

Rungs (default):
1. **Discover** · age 6–9
2. **Develop** · age 10–13
3. **Race** · age 14–18
4. **Compete** · college / national
5. **Perform** · Olympic / pro

Default selection on page load: **Race** (the most populated rung — also the visual midpoint of the journey). Mobile collapses to accordion.

---

## 9 · Coaching (section 4) · D · Numbers + named coaches

Receipts up top, faces below. Four headline stats above a row of named coach portraits. Maru gets the accent ring; everyone else equal weight.

**Stats (placeholder — verify before launch):**
- 80 — Years coaching on the Bay
- 12 — Olympians in the lineage
- 7 — Full-time named coaches
- 1:6 — Coach-to-sailor ratio

**Team row (5 named portraits):** Maru Urban (HPC, accent ring), Junior Lead, Race Head, Adult Lead, Camps.

Why D won: builds credibility through evidence first, names Maru without making the section depend on her tenure. Bonus: easiest to keep updated when staff or counts change. Stats must be verified — section lives or dies by the numbers being real.

---

## 10 · Heritage + Champions (section 5) · B · Champions wall

A grid of 12+ alumni faces with name, year, and brief achievement. Olympians accent-ringed (rust); everyone else gets equal weight. Mix of archival and modern photos. Hover/click reveals fuller story.

Mouratoglou's coaching-page parallel — but applied to alumni. Honors both Olympic and regular alumni in the same grid; doesn't read as elite-only.

**Curation rules:**
- ≥12 named alumni at launch (mix of decades and program tiers)
- Olympians get accent ring, rest equal weight — visual hierarchy without status-tiering the copy
- Each face needs verified photo + name + year + 1-line achievement
- Aim for diversity across audience tiers: founders, women's team, college sailors, youth nationals, Olympians

---

## 11 · The Bay (section 6) · A · 4-season grid · "Sailing, year-round"

Anchored on the youth regatta calendar — the proof that "premier" isn't a slogan but a schedule.

**Headline**: "Sailing, year-round."
**Subhead**: "From a child's first sail to international championships — every season on Biscayne Bay has its program and its regatta. No off-season."

**Four season cards (each: season image + featured event/program + secondary):**

| Season | Months | Featured | Date / Detail | Also |
|---|---|---|---|---|
| **Winter** | Dec–Feb | Open Orange Bowl Regatta | Dec 27–30 · multi-class youth (Opti, ILCA, C420) | Junior winter clinics, holiday series |
| **Spring** | Mar–May | Don Q Snipe Regatta | 60th annual · April 10–12, 2026 · International field | Miami Sail Week Youth, Spring Series |
| **Summer** | Jun–Aug | Summer Sailing Camp + Racing Clinics | Weekly · Ages 6–17 · Opti / ILCA / C420 | Summer Series, regional camps |
| **Fall** | Sep–Nov | Optimist RWB Championship Series | Red / White / Blue fleets — top tier | Green Fleet program, Fall Series |

**Anchor stats below the grid:** 365 sailable days · 76°F avg water · No off-season. *(4th anchor stat TBD — original "600+ at Orange Bowl" retired; that count belongs to the Coral Reef YC International, not CGSC's Open. Replace with a real CGSC-specific number from Maru/Rosa.)*

**Why "sailing" not just "racing"**: the IC's brief is end-to-end — learn-to-sail through international competition. Framing the section as "year-round sailing" captures the full pillar set; regattas are the proof points, not the only story.

**Source verification**: regatta names + dates pulled from CGSC's published calendar via regattanetwork.com and cgscic.org. Verify 2026 dates before launch.

---

## 12 · Stories & Calendar (section 7) · C · Split with per-side full views

Two columns side by side:
- **Left (1.4fr): Latest stories** — 3 most recent items, each: thumbnail + category + headline + date. Section header has "All stories →" link to dedicated `/stories` index.
- **Right (1fr): What's next** — 4 upcoming items, each: date stamp + name + meta. Section header has "Full calendar →" link to dedicated `/calendar` index.

Each side is a homepage surface for a deeper page — homepage stays focused, dedicated pages handle browse/filter.

**Story categories**: Feature · Race result · Program news · Profile.
**Event categories**: Race weekend (rust pin) · Open house · Clinic · Enrollment opens.

Mobile: collapses to stacked (stories first, then calendar). Each side keeps its full-view link.

---

## 13 · Visit & Contact (section 8) · C · Inline inquiry form

Two-panel close, ~1.3:1 ratio:

**Left panel — form**
- Eyebrow: "Tell us about your sailor"
- Headline: "The fastest way to get on the *water.*" (rust italic on "water")
- Helper: "Send us a few details and a coach will get back within two days with the right next step — a class, a clinic, or a Saturday demo sail."
- Fields: Your name · Email · Sailor's name · Sailor's age · Experience (select: brand new / once or twice / some / racing already) · Interest (select: not sure / Junior / Camp / Adult / Race / HPC) · Free-text "Anything else?"
- Submit: "Send inquiry →"

**Right panel — contact (navy bg)**
- Eyebrow: "Or reach us directly" (rust)
- Phone: `(305) 444-4571` · 9am–6pm M–F
- Email: `icmanager@cgsc.org` (primary) · `icdirector@cgsc.org` (escalation)
- Visit: 2990 S. Bayshore Drive · Miami, FL 33133 *(Coconut Grove is the neighborhood — postal city is Miami)*
- Footer note: "Open house every other Saturday — 10am to 2pm. Free demo sails for kids who've never been on a boat."

**Backend reqs:** form submission with routing logic (Junior → junior coach lead, HPC → Maru, etc.), 2-day response SLA, auto-acknowledgement email. Verify all phone/email placeholders before launch.

---

## 14 · Footer · C · Newsletter-led + sitemap

**Top band — newsletter** (gradient navy, rust top accent line):
- Eyebrow: "Stay on the dock"
- Headline: "Race results, stories, and *open-house dates* — once a month." (rust italic)
- Sub: "No fluff. Just what's happening on the Bay, written by the coaches."
- Form: email input + "Subscribe" button (white on navy)

**Sitemap below — 5 columns:**
- Wordmark + sub-mark (Instructional Center · Coconut Grove · 1946) — 1fr
- **Programs** — Junior Academy / Adult Sailing / Race Team / High Performance / Camps
- **The Academy** — The Pathway / Coaches / Heritage / The Bay
- **Resources** — Stories / Calendar / Press kit / Sponsorship
- **Connect** — Visit / Contact / Instagram / YouTube

**Bottom bar:** © 2026 Coconut Grove Sailing Club Instructional Center · Privacy · Terms · Accessibility.

**Backend reqs:** newsletter list management (Mailchimp / Klaviyo / similar), monthly send cadence committed to before launch, coach-written content (not auto-generated).

---

## ⚠ Naming · always "Instructional Center"

The entity is the **Coconut Grove Sailing Club Instructional Center** (cgscic.org). Sub-mark and copy reference it as **"Instructional Center"** — never "Instructional Academy."

**Where "Sailing Academy" *is* used:** the hero positioning headline ("THE PREMIER / SAILING ACADEMY / IN BISCAYNE BAY"). That's a brand positioning claim, not the entity name. Headline stays.

**Everywhere else** (wordmark, sub-mark, copyright, body copy, nav, page metadata): Instructional Center.

---

## 15 · Top nav · A · Solid navy bar

Always-on solid navy bar across every page. Sticky on scroll.

**Layout** (left → right):
- Wordmark · pennant + "Instructional Center" + "Coconut Grove · 1946" sub-mark
- Nav links · *Programs · Pathway · Coaching · Calendar · Stories*
- CTA · rust pill, "Visit / Inquire →"

**Active state**: rust underline below the active page's nav link, 2px, sits inline with text baseline.

**Nav items as section anchors**: Programs / Pathway / Coaching all scroll-anchor to homepage sections; deeper internal pages exist at `/programs`, `/pathway`, `/coaching`. Calendar + Stories link to dedicated index pages.

**Sticky behavior**: nav stays visible on scroll. No shrinking — same height throughout (avoid the "shrinks on scroll" pattern; reads as fussy).

---

## 16 · Mobile · B · Hamburger + sticky bottom CTA

**Top nav (mobile)**: solid navy bar with wordmark left, hamburger icon right. Tapping hamburger opens a full-screen overlay with the 5 nav links + utility links + close button.

**Sections**: 1-up vertical stack. Programs grid B reflows to featured card on top, then 4 stacked program cards below. Pathway interactive selector collapses to a vertical accordion. Champions wall reflows to a 2-column grid.

**Sticky CTA**: rust pill bar pinned to bottom of viewport, full width, "Visit / Inquire →" — anchors to section 8 inquiry form. Always visible on scroll. Hides briefly while user is actively typing in the inquiry form (avoid keyboard collision).

**Hero treatment on mobile**: video plays muted with poster image fallback (data savings); on cellular connections, defaults to poster + a "tap to play" affordance.

**Performance budget**: hero video < 2MB at 720p; LCP < 2.5s on 4G; first interactive < 3.5s.

---

## 17 · Voice &amp; tone · A · Coach voice

Direct. Imperative. Like a coach on the dock.

**Voice rules:**
- Short sentences — 6–12 words average
- Imperative — tell, don't suggest
- Active verbs — sail, race, train, win, apply
- Specific — name the regatta, the boat, the date, the price
- Light contractions — "we'll" not "we will"

**Don't:**
- Marketing fluff: "world-class," "passion-driven," "elevated experience"
- Hedging: "might consider," "potentially," "may benefit from"
- Long subordinate clauses
- Adverbs that prop up adjectives ("incredibly elite")
- Generic sailing-romance ("the call of the sea," "where dreams set sail")

**Sample CTAs (canonical):**
"Apply" · "Sign up" · "Show up" · "Sail with us" · "Visit" · "Watch" · "Read"

**Exception — heritage/profile prose**: heritage section copy and alumni profiles can take more breath (slightly longer rhythm, occasional subordinate clause), but never drift into "editorial voice." Default is always coach.

**Headline-vs-body tension**: the headline ("THE PREMIER SAILING ACADEMY IN BISCAYNE BAY") is positioning copy and uses a single concession to brand-statement language ("premier"). Body copy should never echo it — describe what's premier, don't claim it twice.

---

## 18 · Marketplace surface · v1.1 (NEW)

> Added 2026-05-31 during the multi-page mockup build. See `MOCKUPS_PRD.md` Phase G.

A new top-level destination: `/marketplace`. Members-only conceit (visual auth gate, not enforced in v1) for buying, selling, and trading used sailing gear among CGSC members.

**Visual character (locked):** Club bulletin board, not Craigslist. Curated, sparse, navy/rust palette. No commercial-marketplace clutter (no ads, no "Recommended for you," no platform-fee language).

**Three templates:**

| Template | Purpose | Key elements |
|---|---|---|
| `/marketplace` (index) | Browse all current listings | Auth-gate banner · count headline ("8 items on the dock") · filter bar (category / price / condition) · listing-card grid · House Rules section (4 numbered rules) |
| `/marketplace/listing` (detail) | Single listing detail | Auth-gate · breadcrumb · gallery (main + 4 thumbs) · sticky info card with chips · price · meta · Message Seller CTA · seller-card (member contact) · related listings rail |
| `/marketplace/post` (form) | Members create new listings | Auth-gate · upload zone (drag/drop placeholder) · category / condition / price / description / contact-preference form · House Rules section |

**Auth gate (visual conceit only in v1):** A rust-accented banner directly under topnav: "Signed in as [Member Name] · CGSC Member since [Year]" + Post-an-item link + Sign-out link. Phase 2 wires real auth.

**House rules (canonical):**
1. Members only. Posting and contact require a current CGSC membership.
2. Sailing-related items only. Not a general for-sale board.
3. Listings expire after 60 days.
4. Transactions are between members. CGSC is not a party to any sale.

**Component library impact:** Phase G added `.auth-gate`, `.listing-card`, `.listing-detail-grid`, `.listing-gallery`, `.seller-card`, `.upload-zone` to `prototype/styles/components.css`.

---

# ✅ Brand spec complete

v1 locked **2026-05-02**. v1.1 reconciled **2026-05-31** (see v1.1 changelog at top + §18 above).

---

# ⚠ Unverified facts — DO NOT SHIP UNTIL CORRECTED

Most numbers, names, dates, and contact details in the spec above are **placeholders inserted during the brainstorm to render mocks**. They are almost certainly wrong. A scheduled agent will verify each one against authoritative sources before launch. Until that pass completes, treat every entry below as suspect.

| Field | Current placeholder | Where it appears | Source to check |
|---|---|---|---|
| Olympian count in lineage | "12 Olympians" | Coaching D · Bay stat block | CGSC archives / parent club records |
| Olympian names | Sarah Lopez '96 · Iris Martinez '08 · Andrés Soto '20 | Champions wall · Heritage timeline | CGSC alumni records |
| ~~Founder names~~ ✅ verified | ~~Bob Henley · Carl Webb · Frances Tomlinson~~ → **Marshall Pollard · Wirth Monroe · Frank Kerdyk · Jack Engle** | Heritage magazine opener · Champions wall | Verified 2026-05-02 (PR #1) — MEDIUM confidence |
| Recent named alumni | Maya Castillo (Youth Worlds '25) · Daniel Cruz · Lila Park · Jamal Ross · etc. | Champions wall · Stories grid · Footer quote | Current CGSC roster / racing results |
| Bay climate stats | 76°F water · 12kt wind · 365 sailable days | The Bay section A · stat anchor | NOAA Biscayne Bay station data |
| ~~Orange Bowl attendance~~ ⚠ retired | ~~"600+ youth sailors"~~ — that count is Coral Reef YC's *International* event, not CGSC's *Open*. CGSC-specific count is unpublished. | The Bay winter card | Replace with a number sourced directly from CGSC IC, or omit |
| 2026 regatta dates | Orange Bowl Dec 27–30 (estimated) · Don Q Apr 10–12 (confirmed) · Miami Sail Week Spring | The Bay 4-season grid · Stories calendar | Official regatta sites |
| Coach names | Maru Urban (real, role pending verification) · "Coach 02–07" (placeholder) | Coaching D team row · Pillar mapping | CGSC IC current staff |
| Coach-to-sailor ratio | "1:6" | Coaching stat block | CGSC IC published programs |
| ~~Phone~~ ✅ corrected | ~~`(305) 555-0146`~~ → **`(305) 444-4571`** | Section 8 inquiry · Footer | Verified 2026-05-02 — HIGH confidence (PR #1) |
| ~~Email~~ ✅ corrected | ~~`academy@cgscic.org`~~ → **`icmanager@cgsc.org`** (primary) | Section 8 inquiry | Verified 2026-05-02 — HIGH confidence (PR #1) |
| ~~Address postal city~~ ✅ corrected | "Coconut Grove, FL 33133" → **"Miami, FL 33133"** (Coconut Grove is the neighborhood) | Section 8 · Footer · Map | Verified 2026-05-02 — HIGH confidence (PR #1) |
| Hours | Tue–Sun 9am–6pm | Section 8 · Footer | CGSC IC official |
| Open house cadence | "Every other Saturday, 10am–2pm" | Section 8 · Newsletter | CGSC IC official |
| Maya Castillo quote | "Same Bay, deeper" / capsize anecdote | Pathway D (rejected) · Footer quote | Real alumnus, real quote, written consent |

**Verification agent should produce**: a corrections markdown file (`BRAND_DECISIONS.corrections.md`) with verified value + source URL + verification date for each row above. After review, those corrections get applied to `BRAND_DECISIONS.md` and the brainstorm explorations.

---

# Next steps

1. **Design execution** — Figma comps, asset specs, design tokens (build from `BRAND_DECISIONS.md` + `design/explorations/`)
2. **Content writing** — body copy in coach voice (rule set in §17), regatta calendar entries, alumni stories
3. **Photography & video sourcing** — drone footage of the Bay, archival photos, modern racing footage of kids, alumni headshots
4. **Fact-correction pass** (scheduled agent) — see ⚠ table above
5. **Backend integration** — inquiry-form routing, newsletter list management, calendar CMS, story CMS
- [ ] Section 5 (Heritage + Champions) layout
- [ ] Section 6 (The Bay) layout
- [ ] Section 7 (Stories / Calendar) layout
- [ ] Section 8 (Visit / Contact) + footer composition
- [ ] Top nav structure (5 pillars + utility items)
- [ ] Mobile treatment of hero + programs grid
- [ ] Voice & tone guide for body copy

---

## Reference

- Strategic anchor: Mouratoglou Tennis Academy (structural mirror — academy IA, pathway thinking, pillar grid)
- Brand world: Sperry Top-Sider (#1C3A5F navy lineage), Nautica (American maritime accessible)
- Parent club site: cgsc.org (palette + pennant equity carried forward)
- Brainstorm artifacts: `.superpowers/brainstorm/10673-1777668309/` (gitignored, session-scoped)
- Archived explorations: `design/explorations/`
