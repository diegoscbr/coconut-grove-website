# cgscic.org · multi-page mockup set

Static HTML/CSS/JS mockups for every page of the CGSC Instructional Center
site. Visual + structural spec for the eventual Phase 2 (Next.js + Sanity)
build. Built against the brand system in `../BRAND_DECISIONS.md` and the
Mouratoglou reference patterns in `../reference/inspiration/mouratoglou/`.

See `../MOCKUPS_PRD.md` for the full plan (12 templates, 8 build phases).

## Local

Any static server works. URLs match production because `cleanUrls` is on in
`vercel.json` — visit `/programs/race-team`, not `/programs/race-team.html`.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

```bash
# from this directory
vercel deploy --prod --yes
```

Production URL: <https://prototype-sooty-seven.vercel.app>

## Layout

```
prototype/
├── index.html                    Home
├── programs/
│   ├── index.html                Programs landing
│   ├── adult-sailing.html
│   ├── race-team.html
│   └── camps-coaching.html
├── about.html
├── calendar/
│   ├── index.html                Events + news combined
│   └── sample-story.html         Story detail template
├── contact.html
├── marketplace/
│   ├── index.html
│   ├── listing.html              Listing detail template
│   └── post.html                 Post-item form
├── assets/                       hero video, poster, pennant SVG
├── styles/
│   ├── tokens.css                design-system core (colors, type, spacing)
│   ├── components.css            shared chrome + reusable patterns
│   └── pages/                    page-specific overrides (added in later phases)
├── js/
│   ├── site.js                   shared chrome (drawer, newsletter, scrollspy)
│   └── pages/                    page-specific JS (added in later phases)
└── vercel.json                   static deploy config
```

## Phase status

| Phase | Scope | Status |
|---|---|---|
| A | Shell — tokens, components.css starter, 12 skeletons | ✅ |
| B | Race Team interior (anchor) | pending |
| C | Home revision | pending |
| D | Programs landing + Adult + Camps | pending |
| E | About + Calendar + story detail | pending |
| F | Contact | pending |
| G | Marketplace × 3 | pending |
| H | Polish + BRAND_DECISIONS.md v1.1 | pending |

## TBDs

Pages mark unverified content with the `.tbd` chip class. See
`../BRAND_DECISIONS.corrections.md` for the verification audit on Phase 1
content; mockup-set TBDs are surfaced for Maru / Rosa / Lauren in Phase H.

## Phase 1 history

The single-page Phase 1 stakeholder prototype lived at this same path. It is
preserved in git history at commit `0fde160`. The v1 monolithic `styles.css`
and `app.js` were removed when Phase A landed; the three-layer split
(`styles/tokens.css` + `styles/components.css` + `js/site.js`) replaces them.
