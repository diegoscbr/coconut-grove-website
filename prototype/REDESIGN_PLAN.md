# Home Page Redesign Plan — CGSC Instructional Center

Source: Rosa Lamela memo ("Home Page Initial Thoughts.txt"), June 29 2026.
Theme: rebalance from "premier racing academy" → equal weight on **501(c)(3) nonprofit / community impact** + **race performance**. Put **Giving** everywhere.

## Workflow
- All work on `dev` branch → auto-deploys to staging preview → review → merge `dev`→`main` (prod).
- `dev` and `main` are currently byte-identical. Clean base.
- Static HTML/CSS/JS prototype at `prototype/`. Vercel `cleanUrls: true` (`/about` → `about.html`).

## Decisions Locked

### Hero headline (D-HERO) — DECIDED
Use option #4:
- Eyebrow: `Coconut Grove · Biscayne Bay · Since 1946` (org name = star, keep existing)
- H1: **Biscayne Bay's Premier Sailing Center**
- Modifier/subhead: nonprofit + performance balance, e.g. *"A nonprofit built for every sailor — from first lesson to international racing."*
- Drop the word **"Academy"** everywhere (reads for-profit).

### Nav/footer architecture (D-ARCH) — DECIDED
**Duplicate by hand across all page files.** No shared JS partial.
Rationale: prototype will be migrated to an Express/Node.js app later; a partial now is throwaway. ponytail: accept duplication, the Express migration introduces real templating.

## Open items (owner: Rosa) — marked TBD in code
- Revised Mission copy — TBD
- Nonprofit legal verbiage (footer) — TBD
- Bloomerang donation page details — TBD (Giving page stubbed for now)
- Youth Regattas content (sponsors, logistics, photos, results) — TBD
- Main yacht-club site URL — **PROVIDED: cgsc.org** (footer link)

### Nav bar (D-NAV) — DECIDED — Option A
Order: `Home · About Us · Programs ▾ · Youth Regattas · Calendar · Contact` + rust **Give** CTA button (far right, on every page).
- Add **Home** link (didn't exist before).
- Rename **About → About Us**.
- Keep **Programs** dropdown (Adult / Race / Youth). **Drop the About dropdown** — About Us is one scroll page, flat link.
- Add **Youth Regattas** (new section/page). **Give** is the rust CTA button, replacing "Visit / Inquire".
- Contact stays a plain link.
- Same nav block hand-copied into all page files (per D-ARCH).

### Giving page (D-GIVING) — DECIDED
New real page `/giving` (`giving.html`). "Give" CTA + footer Giving link point here.
- Now: headline + 501(c)(3) "support us" blurb + **"Donate — coming soon"** placeholder. No live donation URL yet.
- Later: drop Bloomerang embed or redirect into this same page. No nav rework needed.
- ponytail: one stub page so the every-page Give button is never a dead `#`.

### Youth Regattas page (D-REGATTAS) — DECIDED — Option A
New labeled stub `/youth-regattas` (`youth-regattas.html`), reusing calendar-style layout.
- Headline + intro + empty labeled sections: **Sponsors**, **Logistics**, **Photos & Results** — each "coming soon" / TBD.
- Rosa fills slots later; no nav/layout rework needed.

### Programs section — home page (D-PROGRAMS) — DECIDED
Three cards, "Program" eyebrow dropped from all:
- **Youth Sailing** (was "Camps & Coaching") — year-round training + seasonal camps. Rename card title **and** the destination page's content/title (`camps-coaching.html`) to "Youth Sailing"; **keep the `/programs/camps-coaching` URL** for now (Option B). URL cleanup deferred to Express migration.
- **Racing Teams** (was "Race Team", now plural) — "The Next Chapter," competitive pipeline. **Move the private-coaching mention here** (out of Youth/Camps).
- **Adult Sailing** — "Get on the water."

### Pathway section — home page (D-PATHWAY) — DECIDED — Option A
Keep the five-rung ladder, but demarcate it as **youth competitive racing only**:
- Add a visible "for our youth race team" label/tag on the section.
- Add an explicit **adult off-ramp** link → Adult Sailing ("Adults have their own track →").
- **Cut/rephrase the "start at six or sixty" universal-ladder line** — that line is the source of the adult confusion Rosa flagged.

### Leadership section — home page (D-LEADERSHIP) — DECIDED
Rename "Coaches" → **Leadership**. Show only three, with photo + title, **no bios**:
- **Maru Urban** — Director of Sailing Performance & Development
- **Rosa Lamela** — Director of Programs & Development
- **Lauren Simpson** — General Manager
Photos from existing `assets/coaches/`. Keep **"Meet the full team →"** link → `/about#coaches` (full 12-coach roster stays on About, untouched). Coaching-staff "bragging" lives in the Racing Teams section, not here.

### What's on the Dock — home page (D-DOCK) — DECIDED — Option A
Two labeled buckets: **On the Horizon** (upcoming) + **Recent Happenings** (past). Same calendar data, sorted future vs. past. Keeps "What's on the dock" eyebrow + "See the full calendar →".

### Response-timeframe line (D-NOTIME) — DECIDED — Option A
Remove "We answer within two days." **everywhere** — home final-CTA section (index.html ~line 254) AND the standalone `/contact` page. No response-time promise stated anywhere.

### Footer (D-FOOTER) — DECIDED — Option A
Organized 4 columns, mirrors every nav destination:
- **Explore**: Home, About Us, Youth Regattas, Calendar, Giving, Contact
- **Programs**: Adult Sailing, Racing Teams, Youth Sailing
- **Useful Links**: Vakaros (TBD url), NOBs (TBD url), US Sailing (ussailing.org), CGSC (cgsc.org)
- **Follow**: Facebook (real url), Instagram (TBD handle) — **YouTube removed**
- Prominent "Main Club Site · cgsc.org →" link by the burgee mark.
- Legal bottom bar: keep © line, add **501(c)(3) nonprofit legal verbiage** (TBD — Rosa).
- TBD items rendered now as placeholders (no dead-looking blanks).
- Same footer hand-copied into all page files (per D-ARCH).

### Scope / phasing (D-SCOPE) — DECIDED — Option C
Do everything NOT blocked on Rosa's TBDs now; defer the TBD-content work.

**Phase 1 (now — ship a consistent site):**
- Home body: D-HERO, D-PROGRAMS, D-PATHWAY, D-LEADERSHIP, D-DOCK, home D-NOTIME.
- Site-wide nav (D-NAV) on ALL pages.
- Site-wide footer (D-FOOTER) on ALL pages.
- Create stub pages: `/giving` (D-GIVING), `/youth-regattas` (D-REGATTAS).
- Rename "Race Team" → "Racing Teams" everywhere it shows as a label (nav dropdown, footer, card, race-team page H1) — keep `/programs/race-team` URL.
- Rename "Camps & Coaching" → "Youth Sailing" label + page title; keep `/programs/camps-coaching` URL.
- Remove response-time line on `/contact` too.

**Phase 2 (deferred — blocked on Rosa):**
- Mission copy revision · Youth Regattas real content · Bloomerang donation embed · nonprofit legal verbiage · Instagram handle · Vakaros/NOBs URLs.
- URL cleanups (camps-coaching→youth-sailing, race-team→racing-teams) — defer to Express migration.

## Blast radius (files touched, Phase 1)
- `index.html` — body + nav + footer
- `about.html`, `contact.html`, `programs/index.html`, `programs/adult-sailing.html`, `programs/race-team.html`, `programs/camps-coaching.html`, `calendar/index.html`, `calendar/sample-story.html` — nav + footer (+ label renames where they appear; + contact response-time line on contact.html)
- NEW: `giving.html`, `youth-regattas.html`
- Possibly `styles/components.css` — Give CTA button style, Leadership grid, dock two-bucket layout, footer Useful Links column (reuse existing classes where possible).

## Workflow to ship
On `dev` → commit → push → Vercel auto-deploys staging preview → review → merge `dev`→`main` → prod.
