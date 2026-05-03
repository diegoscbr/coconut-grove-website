# Prototype Plan · Phase 1

> **Goal**: a single-URL stakeholder snapshot of the cgscic.org homepage, built fast (1–2 days) from the locked brand spec + 17 brainstorm explorations. Stakeholders click a link, scroll once, and "get it." Buy-in unlocks Phase 2 (`HANDOFF.md`).

---

## What this prototype is — and isn't

| Is | Isn't |
|---|---|
| Single static HTML page, scrolls top to bottom | Interactive app with real data |
| Deployed to a Vercel preview URL | Production codebase |
| Visual proof of the locked brand spec | Final design system |
| Built from `design/explorations/` assets | Built from a Figma file |
| Inter via Google Fonts CDN | next/font + production build |
| Placeholder gradients where photos don't exist | Real photography |
| Desktop-first, basic mobile reflow | Polished responsive across breakpoints |

**What stakeholders should walk away with**: "Yes, that's what our homepage should be" — not "yes, ship that exactly."

---

## File structure

```
prototype/
├── index.html              ← single scrolling homepage
├── styles.css              ← consolidated from explorations
├── assets/
│   ├── pennant.svg         ← extracted from wordmark mocks
│   └── (placeholder images / future drone footage)
└── vercel.json             ← static deploy config
```

Keep it as static HTML — no build step. Easier to deploy, easier to hand off.

---

## Assembly checklist

Each row = one exploration HTML to pull section markup from + one item from `BRAND_DECISIONS.md` to honor. Build top-to-bottom in this order:

| # | Section | Source exploration | Brand spec ref |
|---|---|---|---|
| 0 | Top nav (sticky navy bar) | `top-nav-options.html` (option A) | §15 |
| 1 | Hero | new — combine locked headline/subhead + bay-territory gradient | §1, §4 |
| 2 | Programs grid (B + rotation, default HPC) | `programs-grid-options.html` (option B) | §7 |
| 3 | The Pathway (interactive selector) | `pathway-visualization-options.html` (option C) | §8 |
| 4 | The Coaching | `coaching-section-options.html` (option D) | §9 |
| 5 | Heritage + Champions | `heritage-champions-options.html` (option B) — update founder names to Pollard/Monroe/Kerdyk/Engle | §10 |
| 6 | The Bay (4-season grid) | `the-bay-v2-regatta-calendar.html` (option A) | §11 |
| 7 | Stories + Calendar (split + per-side full views) | `stories-calendar-options.html` (option C edited) | §12 |
| 8 | Visit (inline form) | `visit-contact-options.html` (option C) — use real phone/email/address | §13 |
| 9 | Footer (newsletter + sitemap) | `footer-options.html` (option C) | §14 |
| M | Mobile sticky CTA | new — pinned rust bar | §16 |

**Assembly notes:**
- Strip per-screen CSS (the brainstorm cards, meta panels, "why this" sections). Keep only the inner section markup that would actually ship.
- Consolidate styles into one `styles.css` with the locked tokens (navy `#1A3A8A`, light blue `#4A8FCF`, rust `#FF8B5E`, white, charcoal `#111`). Inter loaded via Google Fonts.
- Wordmark sub-mark text: **"INSTRUCTIONAL CENTER · Coconut Grove · 1946"** — never "Academy."
- Hero video: use a placeholder gradient panel (`linear-gradient(180deg, #B5C7E8 → #1A3A8A)` + faint sail dots) until Diego's cut is ready. Add a `<video>` tag commented in for swap-in.
- Champions wall: 12 placeholder face cards using the gradient palette. Names = "TBD" badges (the real list is UNVERIFIABLE, awaiting Maru/Rosa).
- Coaching section: 4 stat tiles from §9 (80 yrs / TBD Olympians / 7 coaches / TBD ratio) — TBD shown explicitly so stakeholders see what's pending.
- Inquiry form: real fields, but submits to a `mailto:` or a no-op (we're not wiring backend yet).
- Pathway selector: client-side click handler swaps the right panel. ~30 lines of vanilla JS.
- Programs rotation: hardcode HPC-featured for the prototype. Note in code that this becomes config-driven in Phase 2.

---

## Deploy steps

```bash
# from prototype/ directory
vercel deploy             # first time → links project + uploads
vercel --prod             # promote to production preview URL
```

**Project name**: `cgscic-prototype`
**Expected URL**: `cgscic-prototype.vercel.app` (or whatever Vercel assigns — copy the URL from CLI output)

If a custom subdomain is wanted (e.g. `preview.cgscic.org`), add it via Vercel dashboard → domains. But default `*.vercel.app` URL is fine for stakeholder review.

---

## What's "real" vs placeholder

| Element | Status |
|---|---|
| Headline copy | ✅ Real — locked in §1 |
| Subhead copy | ✅ Real — locked in §1 |
| Five pillar names | ✅ Real — locked in §3 |
| Brand palette + Inter | ✅ Real — locked in §5 |
| Wordmark + sub-mark text | ✅ Real — corrected to Instructional Center |
| Phone, email, address | ✅ Real — corrected from PR #1 |
| Founder names | ✅ Real — verified Pollard/Monroe/Kerdyk/Engle |
| Don Q regatta date | ✅ Real — April 10–12, 2026 |
| Hero video | ⚠ Placeholder gradient (Diego sourcing real cut) |
| Pillar photography | ⚠ Placeholder gradients per pillar |
| Olympian count + lineage | ⚠ TBD label (awaiting Maru) |
| Champions wall faces + names | ⚠ Placeholder gradients with "TBD" badges (awaiting roster) |
| Coach portraits + names | ⚠ Placeholder gradients (Maru confirmed; rest awaiting Rosa) |
| Coach-to-sailor ratio | ⚠ TBD label |
| Bay climate stats (76°F, 12kt) | 🟡 NOAA-sourced; verify before launch |
| Maya Castillo quote | ❌ Remove for prototype — replace with TBD or omit |
| Stories cards | ⚠ Placeholder content using locked categories |

The prototype's job is to make the *brand world* feel real. Real placeholders that show what's pending beat fake content that has to be redone.

---

## Stakeholder presentation outline

5 minutes max. Suggested script:

1. **30 sec — Setup**: "This is a working prototype of the new cgscic.org homepage based on the brand work we locked over the last two days. Click the link to follow along. It's not pixel-perfect yet — placeholders mark what's pending content. We're here to confirm direction, not approve every word."

2. **45 sec — Hero**: read the headline aloud. "*The premier sailing academy in Biscayne Bay.*" Note the structural reference to Mouratoglou and the "now, taking it to the next" beat that frames Maru's arrival without being about Maru.

3. **45 sec — Programs grid**: scroll to section 2. "Five pillars. The featured slot rotates seasonally — HPC right now because it's the new chapter, but it'll swap to Camps for summer enrollment, Race Team for regatta season, etc."

4. **45 sec — Pathway**: scroll to section 3. Click between the rungs. "This is the through-line — first sail to Olympic podium, taught on the same water by the same standards."

5. **45 sec — Coaching → Heritage → Bay**: scroll fast through 4–6. "Receipts up top, faces below for coaching. Champions wall for heritage — Olympians get the accent ring, everyone else equal weight. The Bay section anchors on the actual youth regatta calendar — every season has a marquee event."

6. **30 sec — Stories + Visit**: "Living surface for what's next. Inline inquiry form at the close — that's the conversion path."

7. **30 sec — Footer**: "Newsletter signup + sitemap. Newsletter is a real long-term capture mechanism for the sailing community."

8. **30 sec — Asks**: "Three things we need from you to ship: (1) confirmed roster of named alumni for the champions wall, (2) confirmed Olympian count from the lineage, (3) sign-off on the coaching team copy. Everything else is on us."

---

## Time estimate

| Task | Hours |
|---|---|
| Strip + consolidate CSS from explorations | 2 |
| Assemble single `index.html` (sections in order) | 3 |
| Pathway + form interactivity (vanilla JS) | 1 |
| Mobile reflow + sticky CTA | 1.5 |
| Deploy to Vercel + verify | 0.5 |
| Stakeholder walkthrough rehearsal | 0.5 |
| **Total** | **~8.5 hours / 1 day** |

Add half a day for inevitable polish + screenshot-taking for slack/email follow-up.

---

## When you start the next session

1. Run `git status` and `git log --oneline -5` to confirm where you are
2. Open this file (`PROTOTYPE_PLAN.md`) and pick up at "Assembly checklist"
3. The 17 explorations are in `design/explorations/` — open any in a browser to see what's already rendered
4. Source of truth for copy/structure/spec: `BRAND_DECISIONS.md`
5. Next step after the prototype ships: `HANDOFF.md` for production
