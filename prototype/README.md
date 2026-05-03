# cgscic.org · Phase 1 prototype

Static HTML/CSS/JS snapshot of the homepage built from the locked brand spec
(`../BRAND_DECISIONS.md`) and the 17 brainstorm explorations
(`../design/explorations/`). One scrolling page, deploys to a Vercel preview
URL for stakeholder review.

## Local

```bash
# any static server works
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Deploy

```bash
# from this directory
vercel deploy        # first run links the project
vercel --prod        # promote to the production preview URL
```

## What's real vs placeholder

See `../PROTOTYPE_PLAN.md` for the audit of locked-vs-pending content.
TBD labels in the page mark items still awaiting Maru / Rosa / Lauren.

## Files

- `index.html` — assembled homepage, top to bottom
- `styles.css` — consolidated styles using the locked tokens (navy `#1A3A8A`,
  light blue `#4A8FCF`, rust `#FF8B5E`, white, charcoal `#111`); Inter from
  Google Fonts
- `app.js` — pathway selector + form handler (vanilla JS)
- `assets/pennant.svg` — CGSC pennant
- `vercel.json` — static deploy config
