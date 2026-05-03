# Coconut Grove Sailing Club — Brand Audit & v0 Direction

> Audit of the current state vs. the Mouratoglou reference, with a translated direction for the v0 prototype. Sources: live sites (`cgsc.org`, `cgscic.org`), Wikipedia, Mouratoglou reference catalog in `reference/inspiration/mouratoglou/`.

---

## TL;DR

CGSC is **80 years old, has Olympic-level regattas, named champion alumni, 7 active racing fleets, and a clean tagline ("Where Sailors Belong")** — and almost none of that comes through on the current site. The current properties are two separate 2010s-era WordPress sites (`cgsc.org` for the club, `cgscic.org` for the 501(c)(3) instructional center) running on iSatisfy.com, with no design system, no shared identity, and no credibility device beyond stating "1946" once.

The substance for a Mouratoglou-grade brand expression already exists. We need to surface it through a focused design system on the **instructional center** (`cgscic.org`) — the parent club site is out of scope for v0.

> **Stakeholder context (added 2026-05-01):** the primary stakeholder is **Maru Urban**, incoming **Director of Sailing Performance & Development** at CGSC. His three explicit pillars — *building the sailing pipeline*, *leading technical performance*, *driving innovation* — are structurally identical to Patrick Mouratoglou's role at the Academy. **The Mouratoglou parallel is therefore a product-level analogue, not just visual mood.** This sharpens the voice direction (see §4 + §5).

> **Scope decision (confirmed by Maru, 2026-05-01):** v0 covers **the Instructional Center only** (`cgscic.org`). The parent club site (`cgsc.org` — membership, dining, moorings, club regattas) is out of scope. This is a clean win — the brand under Maru is the Instructional Center, and the rebuild stays focused.

**My recommendation:** we have enough to start the v0 HTML prototype after a tight `/grill-me` session on positioning, brand assets, audience priority, and voice direction.

---

## 1. Scope: Instructional Center only

CGSC's web presence is currently **split** across two sites:

| Site | Purpose | Tagline | Stack | v0 scope? |
|------|---------|---------|-------|-----------|
| `cgsc.org` | Parent club — members, regattas, dining, moorings | "Where Sailors Belong!" | WordPress · iSatisfy.com | **Out** |
| `cgscic.org` | 501(c)(3) Instructional Center — programs, camps, donations | "Raising The Bar For Sailing Instruction – For Adults and Youth" | WordPress · iSatisfy.com | **In** ✅ |

**Decision (Maru, 2026-05-01):** v0 covers `cgscic.org` only. The parent club stays as-is for now.

**Why this is a clean cut:**
- Maru's role (Director of Sailing Performance & Development) maps directly to the Instructional Center, not the club's social/dining side.
- The 501(c)(3) is the legal entity that owns the *programs* — which is where the website's primary conversion goal lives (enrollments + donations).
- The Mouratoglou Academy parallel is a near-perfect analogue for the Instructional Center alone (a development institution with a director, programs, fleets, alumni, and a charitable mission).
- Removing membership / dining / moorings / club regattas dramatically narrows the IA — six top-level items collapses to **four**: Programs, About, Donate, Contact.

**What stays out of v0:**
- Membership tiers (those live on `cgsc.org`)
- Dining ("The Grove's Nest") and clubhouse content
- Mooring & storage, hurricane policies
- Club-organized regattas (the *racing fleets* still belong to the parent; the Instructional Center's racing development pathway can reference them but doesn't own them)

Keep this scope discipline — every time we're tempted to add something from `cgsc.org`, push back to: *does this serve the Instructional Center's program/donation funnel?* If not, defer.

---

## 2. Current site audit (`cgsc.org` + `cgscic.org`)

### What's actually on the site

**`cgsc.org` (parent club) home sections, in order:**
- COCONUT GROVE SAILING CLUB
- SAILING SINCE 1946
- ADULT SAILING
- YOUTH SAILING
- SAILING CAMPS
- JOIN
- OUR MISSION
- CLUB ORIGIN
- CGSC TODAY

**`cgscic.org` (instructional center) home sections, in order:**
- Welcome to the CGSC Instructional Center!
- Raising The Bar For Sailing Instruction
- Our Mission
- Our Roots: A Legacy Born on Biscayne Bay
- ADULT SAILING
- YOUTH SAILING
- LEADERSHIP

### What's working

- **Mission statement (cgsc.org):** "to encourage the sport of sailing, to promote the science of seamanship and navigation, to sponsor cruises, races and instructional classes, and to foster a spirit of cooperation and good fellowship." — formal, evergreen, has a charter feel.
- **Origin copy:** "Founded in 1946 by a small group of passionate Miami sailors, the Coconut Grove Sailing Club began as little more than a dream — and a shack." — strong narrative hook.
- **Youth program tagline:** **"Expanding Access. Inspiring Excellence."** — ownable, modern, tension-filled. Best line on either site.
- **"Where Sailors Belong":** evergreen tagline, works as a brand line.
- **Membership tier structure** (cgsc.org/membership): Regular · Non-Resident · Junior · Associate · Service. Real prices, real benefits — already shippable content.
- **Programs already organized by axis** (cgscic.org youth): by season (Fall / Spring), by format (Summer Camp / Spring Break / Winter Break), by skill (Learn to Sail Optimists / ILCA & C420 Development / High School Sailing). This is **literally the `BY-AXIS-BROWSER` pattern** from the Mouratoglou home page.

### What's broken

- **No design system.** No defined palette, typography, spacing, or component library. Both sites are out-of-the-box WordPress with iSatisfy.com defaults.
- **No credibility surfacing.** "1946" is mentioned but nothing else: no boats / fleets / regattas / champion alumni / Olympic ties surface above the fold.
- **No hierarchy of voice.** Headings like "OUR MISSION" / "CLUB ORIGIN" / "CGSC TODAY" read like sub-pages, not story beats.
- **No photography strategy.** Mouratoglou leans hard on editorial photography (founder + Serena, full coaching staff team photo, aerials, on-court action). The current sites don't.
- **No nav consolidation.** `cgsc.org` has 9 top-level items including "Pay Online & Contact Us" — that's a transactional rats nest masquerading as a nav.
- **No social proof devices.** No sponsor wall, no accreditation badges (despite real US Sailing affiliation), no named champion alumni (despite Augie Diaz, Gonzalo Diaz, David Hughes), no regatta marquee (despite hosting a leg of the World Sailing World Cup).
- **No mobile design intent.** WordPress + iSatisfy.com defaults; no responsive opinion.
- **Footer is barely a footer.** Just a copyright + iSatisfy credit. No social, no map, no link wall, no newsletter signup.

### Scoring (against the Mouratoglou bar)

| Dimension | Mouratoglou | CGSC current |
|---|---|---|
| IA / nav clarity | 9/10 | 3/10 |
| Visual identity strength | 9/10 | 2/10 |
| Editorial photography | 9/10 | 3/10 |
| Credibility devices | 9/10 | 2/10 |
| Programmatic depth | 8/10 | 6/10 (substance is there, just not surfaced) |
| Voice / positioning | 8/10 | 4/10 (good lines exist, scattered) |
| Mobile / modern feel | 9/10 | 2/10 |
| Booking / conversion path | 8/10 | 3/10 |
| Heritage storytelling | 7/10 | 3/10 |
| **Composite** | **8.4** | **3.1** |

---

## 3. Brand assets we already have (the raw material)

These are the credibility devices we can surface immediately. None of this needs to be invented — it's all in the public record.

### Heritage
- **Founded 1946** — 80 years (in 2026)
- **Founding narrative:** "began as little more than a dream — and a shack" — concrete, mythic, true
- **Original purpose:** "create a safe, welcoming space to teach sailing — especially to children — and to organize regattas that brought the community together"
- **"Over 10,000 children" introduced to sailing through the program

### Geography
- **2990 S Bayshore Drive, Miami, FL 33133** — a Biscayne Bay address
- **Biscayne Bay** itself is a credibility prop (one of the great sailing waters in the US)

### Programs (existing taxonomy — already structured for `BY-AXIS-BROWSER`)
- **By audience:** Adult Sailing · Youth Sailing
- **By season:** Fall Sailing · Spring Season · Summer Camp · Spring Break Camp · Winter Break Camp
- **By skill:** Learn to Sail Optimists · ILCA & C420 Development · High School Sailing
- **By format:** Camps · Clinics · Lessons · Regattas

### Racing (the credibility detonator)
- **7 active one-design racing fleets:** PHRF · Pearson Ensign · Flying Scot · Snipe · Sunfish · Beneteau · Melges 20
- **18+ regattas/year** managed by the CGSC Race Committee
- **Marquee regattas hosted:** Sailing World Cup Miami (only North American leg of the World Sailing World Cup since 2008), Snipe Western Hemisphere & Orient Championship (2006), Don Q Snipe Regatta, Melges 20 Worlds (2019), Melges 20 Winter Series, BBYRA events, ISAF Olympic-class qualifiers
- **One of five members** of the Biscayne Bay Yacht Racing Association (BBYRA)

### People (named champion alumni — currently underutilized)
- **Augie Diaz** — Star and Snipe world champion, ICSA College Sailor of the Year 1974, US Sailor of the Year 2003
- **Gonzalo Diaz** — Silver medalist for Cuba at 1959 Pan American Games
- **David Hughes** — American 470 sailor (Olympics)
- **Current leadership** (CGSCIC nonprofit board): Priska Urban (President), William Sancho (VP), Olivier de Lavalette (VP), Doreen Fischer, John Sauvigne

### Affiliations / accreditations
- **US Sailing** affiliate
- **US Sailing Certified Instructors**
- **501(c)(3) nonprofit** (instructional center)
- **BBYRA member**

### Voice / lines worth keeping
- "Where Sailors Belong"
- "Expanding Access. Inspiring Excellence."
- "A Legacy Born on Biscayne Bay"
- "encourage the sport of sailing, promote the science of seamanship and navigation, foster a spirit of cooperation and good fellowship" (charter language)

### Membership economics (already concrete)
- Regular: $1,500–2,500 initiation + $880/yr + $165 capital + $49.50/mo F.O.M.
- Junior (under 18, racing): $330/yr
- Associate (18–24): same as Regular but no initiation, deferred until 25
- Service (US Armed Forces): no annual dues, just capital + F.O.M.

---

## 4. Translation: Mouratoglou voice → CGSC voice

> **Updated 2026-05-01 after Maru Urban context.** The earlier "heritage / community / belonging" framing under-sold what's actually being built. With Maru running Performance & Development, the brief is **performance pipeline first, heritage as credibility platform underneath**. Belonging is real but it isn't the headline.

The Mouratoglou design *system* translates 1:1. The Mouratoglou *voice* needs to be re-keyed for **a development institution on a historic American bay** rather than for a champion factory in the South of France.

| Dimension | Mouratoglou voice | CGSC voice (revised) |
|---|---|---|
| Core promise | "We make champions" | "We develop sailors — from first tack to world stage" |
| Emotional pull | Aspiration / individual excellence | Pipeline / lifelong development / community proof |
| Time frame | "30 years" (campaign) | "80 years building sailors" (heritage as platform) |
| Hero subject | Pro athlete in action | Optimist class kid + fleet horizon + Biscayne Bay golden hour + clubhouse heritage |
| Stat language | "12 hectares · 33 courts · 50,000 trainees" | "80 years · 7 racing fleets · 18 regattas/year · 10,000+ sailors developed · 1 World Cup leg · 1 Biscayne Bay" |
| Manifesto | "THINK / TRAIN / BECOME A CHAMPION" | Direction TBD in grill — strong candidates: "LEARN / RACE / LEAD", "FIRST TACK / WORLD STAGE / HOME PORT", or three-line manifesto built around Maru's pillars (PIPELINE / PERFORMANCE / INNOVATION) |
| Founder section | Patrick Mouratoglou — black panel, B&W portrait, pull-quote | **Maru Urban — same treatment.** Use his "help sailors become better athletes and better people" line as the pull-quote. This is a real `FOUNDER` panel, not a generic "leadership" section. |
| Ambassadors | Tsitsipas, Coco Gauff (current pros) | **Both:** alumni champions (Augie Diaz, Gonzalo Diaz, David Hughes) for heritage credibility AND current standout junior sailors / Olympic-track athletes Maru is developing now. Two carousels or one mixed grid. |
| Sponsors | Dunlop, Asics, Mercedes | US Sailing, BBYRA, hardware/class partners (Optimist, ILCA, C420 builders), Biscayne Bay civic partners — `Q:` |

The **design system** (palette, type, layout, components) can be lifted with a **palette swap**: Mouratoglou's orange + black + white becomes a CGSC palette built around a brand color we don't yet have (likely a navy/teal sea anchor + a club accent). The **information architecture** can be lifted nearly as-is, with `FOUNDER` (Maru) and a `PIPELINE` section getting elevated importance. The **photography brief** is what changes most: editorial sailing imagery — kids in Optimists, fleet starts on Biscayne Bay, heritage clubhouse, Maru coaching — replaces the contained-court action.

---

## 5. Provisional v0 IA — Instructional Center only

Scope is the Instructional Center (`cgscic.org`). IA collapses to **4 top-level items** instead of the broader 6 a club site would need. Mouratoglou home rhythm still applies, re-keyed around Maru's three pillars.

> **Updated 2026-05-01 (twice):** scope reduced to Instructional Center only after Maru confirmed. Removed CLUB / MEMBERSHIP / club-side REGATTAS. Kept the FOUNDER + PIPELINE / PERFORMANCE / INNOVATION argument from the prior revision.

```
Header
├── CGSCIC LOGO (left)
├── PRIMARY NAV (center): PROGRAMS · ABOUT · DONATE · CONTACT
│     └── PROGRAMS mega-menu: Youth · Adult · Camps · Clinics · Race Development
└── RIGHT CLUSTER: ENROLL (primary CTA) · DONATE (secondary, signals 501(c)(3))

Home — mirrors Mouratoglou rhythm, re-keyed for an instructional-center pitch:
├── HERO video (kids in Optimists hiking out · fleet start on Biscayne Bay · golden hour)
├── SEARCH-OVERLAY (sticky)
├── MANIFESTO (TBD — built around Maru's pillars: PIPELINE / PERFORMANCE / INNOVATION,
│   or a more emotional translation: FIRST TACK / WORLD STAGE / HOME PORT)
├── INTRO ("Since 1946 — 10,000+ sailors developed on Biscayne Bay" — heritage as platform)
├── FOUNDER panel — Maru Urban: B&W portrait + pull-quote
│   ("help sailors become better athletes and better people through our sport")
├── PIPELINE — Maru's pillar #1 — BY-AXIS-BROWSER (BY AGE / BY SEASON / BY SKILL)
│   • Existing programs already fit this axis (Optimists / ILCA & C420 / High School Sailing
│     · Fall · Spring · Summer Camp · Spring Break · Winter Break)
├── PERFORMANCE — Maru's pillar #2 — coaching system + race development pathway
│   (US Sailing Certified Instructors as proof, fleet pathway from Optimist → C420 → ILCA → keelboats)
├── INNOVATION — Maru's pillar #3 — what's new in coaching / tech / methodology
│   (placeholder until Maru ships specifics; could be video analysis, performance tracking, etc.)
├── ALUMNI ("OUR CHAMPIONS") — AMBASSADOR-CARDs of heritage champions
│   (Augie Diaz, Gonzalo Diaz, David Hughes) — proof that the pipeline produces world-stage sailors
├── HERITAGE — 80-year carousel (1946 founding, BBYRA, World Cup era, Maru era)
├── DONATE — 501(c)(3) panel: mission impact, "Expanding Access. Inspiring Excellence." line,
│   donation tiers (TBD with finance), one-click donate
├── INQUIRY-CTA (white card on black: "Want to come sail?")
├── PARTNER-WALL (US Sailing · BBYRA · class partners — Optimist / ILCA / C420 builders)
├── NEWSLETTER ("The Channel" already exists)
└── FOOTER (4 cols: PROGRAMS · ABOUT · DONATE · CONTACT + social + 501(c)(3) line + map)
```

### Programs interior page (apply Mouratoglou camps page template)

```
HERO + breadcrumb
PAGE-SUBNAV: OUR APPROACH · COACHES · PROGRAMS · CALENDAR · PRICING · FAQ · CONTACT
APPROACH (intro about the instructional center's pedagogy)
METHOD (Maru's coaching system → translated into 5 pillars METHOD-LIST)
COACHES (US Sailing Certified Instructors — feature their pedigrees + photos)
PROGRAMS-GRID (FILTER-BAR over PROGRAM-CARDs; existing chip taxonomy ports cleanly:
  FROM AGE 6 · YOUTH · ADULT · WEEKLY · WEEKEND · MORNINGS · FULL DAYS · INTRO · DEVELOPMENT · RACING)
CALENDAR (year-at-a-glance: Fall / Spring / Summer / Spring Break / Winter Break)
PRICING (tier cards if applicable; member-vs-public preferred pricing if relevant)
FAQ-ACCORDION
MANIFESTO
CONTACT-FORM
FOOTER
```


Interior pages (apply the camps page template)
├── /sail (overview)
│   ├── HERO + PAGE-SUBNAV: PROGRAMS · CAMPS · CLINICS · INSTRUCTORS · FAQ · CONTACT
│   ├── ACADEMY-style intro about the instructional center
│   ├── METHOD section ("Our Approach")
│   ├── COACHES (US Sailing Certified Instructors — feature their pedigrees)
│   ├── PROGRAMS-GRID (filter bar over CAMP-CARDs)
│   ├── ACCOMMODATIONS — N/A → swap for "GETTING TO THE CLUB" or "GEAR & DRESS CODE"
│   ├── OPTIONS & ACTIVITIES — race clinics, regatta crewing, mentorship
│   ├── FAQ-ACCORDION
│   ├── MANIFESTO
│   └── CONTACT-FORM
├── /membership — tier cards w/ existing prices, comparison table
├── /regattas — calendar + fleet pages + race committee + sponsorship
├── /club — clubhouse, dining, moorings, hurricane policy, bylaws
└── /about — heritage timeline, leadership, mission, give (501c3 path)
```

---

## 6. What we're missing before v0

These are the **inputs** I need from Diego (or to be answered in `/grill-me`):

### High-priority (block v0 prototype)
1. **Brand assets** — `reference/brand/` is empty. Need: CGSCIC logo (vs. parent CGSC burgee — same or different?), primary color, any approved alternates, typeface preference.
2. ~~**Site scope decision**~~ **Resolved 2026-05-01:** Instructional Center only (`cgscic.org`).
3. **Stack confirmation** — Next.js App Router on Vercel still the assumption?
4. **Audience priority** — for the **Instructional Center** specifically, who is the primary user of v0? Ranking determines above-the-fold:
   (a) prospective parent enrolling a kid (likely #1 — youth programs are the volume driver),
   (b) prospective adult learner,
   (c) competitive junior / parent of one (race development pathway),
   (d) donor (501(c)(3)).
5. **Voice direction** — with Maru on board, the leading voice is **performance pipeline** (Maru's three pillars), with **heritage** as the credibility platform underneath and **access** as a sub-promise. What grill needs to confirm: should the manifesto literally be PIPELINE / PERFORMANCE / INNOVATION (Maru's words), or do we translate those into more emotional copy (FIRST TACK / WORLD STAGE / HOME PORT, or LEARN / RACE / LEAD)?

### Medium-priority (can mock with placeholders)
6. **Photography access** — who has the photo library? (Old club photos for heritage, current race photos, kid program photos.) For v0 we can use placeholder editorial-style pulls.
7. **Languages** — EN only or EN/ES (Miami)? Mouratoglou has EN built in.
8. **Booking/CMS** — does the v0 prototype need real booking, or will we mock the funnel?
9. **Legal** — do we need to display the 501(c)(3) status anywhere specific (donations)?

### Low-priority (can defer)
10. **Anniversary campaign** — 80 years in 2026 is a real moment. Mouratoglou's `30 YEARS` skin is a pattern we could reuse for a CGSC "80 YEARS" sub-skin. Not blocking for v0 but worth flagging.
11. **Member portal / login** — does the existing site have one? Should v0 plan for one?

---

## 7. Ready-to-start checklist

| Item | Status |
|---|---|
| Mouratoglou reference cataloged (home, headers, camps) | ✅ Done |
| Current site analyzed (cgsc.org + cgscic.org) | ✅ Done |
| Heritage / credibility / programs inventory pulled | ✅ Done |
| Brand audit + gap analysis written | ✅ This file |
| Provisional IA drafted | ✅ Section 5 above |
| Brand assets in `reference/brand/` | ❌ Empty |
| Voice / positioning decision | ❌ Open question |
| ~~Site scope decision~~ | ✅ **Resolved 2026-05-01: Instructional Center only** |
| Stack confirmation | ❌ Open question |
| Primary audience ranking | ❌ Open question |

**Recommendation:** I have enough to start a v0 HTML prototype **after** we run `/grill-me` on the open questions above. Specifically, items 1–5 in §6 are the gating items. Photography (item 6) we can mock with placeholders.

The grill should be tight — 5 to 8 questions, each pointing at one of the gating items. After that I can spin up an `index.html` + `styles.css` v0 that mirrors the Mouratoglou home rhythm with CGSC content baked in, and we hand-off to Figma for client review.

---

## Sources

- **Current sites:**
  - [cgscic.org — CGSC Instructional Center](https://cgscic.org/)
  - [cgsc.org — Coconut Grove Sailing Club (parent)](https://www.cgsc.org/)
  - [cgsc.org/membership](https://www.cgsc.org/membership/)
  - [cgsc.org/regattas](https://www.cgsc.org/regattas/)
  - [cgscic.org/youthsailing](https://cgscic.org/youthsailing/)
- **Background:**
  - [Wikipedia — Coconut Grove Sailing Club](https://en.wikipedia.org/wiki/Coconut_Grove_Sailing_Club)
  - [Miami Focused — Coconut Grove Sailing Club](https://miamifocused.com/coconut-grove-sailing-club-miami/)
  - [Community Newspapers — Kids Making Waves in CGSC's Youth Program](https://communitynewspapers.com/biscayne-bay/kids-making-waves-in-coconut-grove-sailing-clubs-youth-program/)
- **Design reference:** `reference/inspiration/mouratoglou/` (this repo)
