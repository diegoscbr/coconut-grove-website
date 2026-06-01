# Phase 2 · Hello-World Handoff

**Stack:** FastAPI (Python) + Jinja2 + HTMX + Vercel + Neon Postgres + Vercel Blob + Sanity CMS
**Owner:** Diego (sole developer)
**Goal:** Understand the stack and dataflow by hand-coding a minimum-viable deploy before migrating any real content.
**Companion:** `cgscic-website` repo (this one). References to it appear inline as `cgscic-website/path/to/file`.

---

## 1 · Why this stack

Each piece earns its place. If you can't say what a piece does without checking the docs, that's the piece you should focus on while building.

| Piece | Role | When it runs | Why it's here |
|---|---|---|---|
| **Vercel** | Hosting + edge routing | Always | Free tier handles everything; auto-deploys from git; one place for env vars; Marketplace integrations for DB/blob/email/Sanity all auto-inject env vars. |
| **FastAPI** | Python web framework | On every dynamic request | Modern Python (3.12+), async-first, Pydantic for input validation, OpenAPI for free, runs cleanly as a Vercel Python Function via Fluid Compute. |
| **Jinja2** | HTML templating | Inside FastAPI handlers | Renders Python data into HTML. Standard Python templating. Plays cleanly with HTMX (returns full pages OR partials). |
| **HTMX** | Frontend interactivity | In the browser | Sends HTTP requests on user actions, swaps HTML fragments returned by the server. No JSON, no virtual DOM, no build step. Backend stays the source of truth. |
| **Sanity** | Headless CMS for editable content | Read at request time (or cached) | Hosted admin UI (Sanity Studio) is unbeatable for non-technical editors (Maru, Rosa, Lauren). They edit there; your Python app reads via HTTP. |
| **Neon Postgres** | Relational DB for transactional data | Read/write on form submits and queries | Serverless Postgres, generous free tier, integrates with Vercel via Marketplace. Right for marketplace listings (user-generated) + contact submissions + newsletter signups. |
| **Vercel Blob** | File storage for user uploads | On marketplace listing photo upload, etc. | S3-compatible blob storage with public URLs. Right for marketplace listing photos. (Coach photos, calendar event images, etc. live in Sanity's built-in CDN — different surface.) |

**Content split — memorize this:**
- **Sanity** owns: hero copy, coach bios, calendar events, stories, About content, programs page copy, FAQ, stats. *Anything Maru/Rosa edits.*
- **Neon Postgres** owns: marketplace listings (rows created by members), contact form submissions, newsletter signups, future member accounts. *Anything the public site writes.*
- **Vercel Blob** owns: marketplace listing photos, member uploads. *User-generated files.*

---

## 2 · Dataflow — trace a request from browser to database

This is the mental model you need before writing code. Trace it twice in your head before continuing.

```
┌──────────┐
│ Browser  │ User clicks a link, types into a form, or HTMX triggers
└────┬─────┘
     │
     │ HTTP request (GET /about, POST /inquiry, etc.)
     ▼
┌────────────────────────────────────────────────────────────────┐
│ Vercel edge                                                    │
│ ─ Static file? (e.g. /static/styles.css) → served directly     │
│ ─ Otherwise → routed to api/index.py (Python Function)         │
└────┬───────────────────────────────────────────────────────────┘
     │
     │ Cold start ~200ms, warm ~10ms (Fluid Compute)
     ▼
┌────────────────────────────────────────────────────────────────┐
│ FastAPI handler in api/index.py                                │
│                                                                │
│   @app.get("/about")                                           │
│   async def about(request):                                    │
│      coaches = await sanity_fetch("*[_type == 'coach']")  ────┐│
│      return templates.TemplateResponse(...)                   ││
│                                                               ││
│   @app.post("/inquiry")                                       ││
│   async def inquiry(name, email):                             ││
│      await db.execute("INSERT INTO inquiries ...")  ──────────┼┼─┐
│      return templates.TemplateResponse(..._fragment.html)     ││ │
└───────────────────────────────────────────────────────────────┘│ │
                                                                 │ │
                                                Sanity API ◄─────┘ │
                                                (HTTPS read)       │
                                                                   │
                                                Neon Postgres ◄────┘
                                                (TCP write)

┌────────────────────────────────────────────────────────────────┐
│ Jinja2 renders the template with data → HTML string            │
└────┬───────────────────────────────────────────────────────────┘
     │
     │ HTTP response (text/html)
     ▼
┌──────────┐
│ Browser  │ HTMX swaps the response HTML into a target element
└──────────┘ (or browser navigates to full page)
```

**Two response modes, same Python handler:**
- **Full page** — user navigates to `/about`, server returns the entire HTML document (`<html>...</html>`).
- **Fragment** — HTMX triggers a request (e.g., form submit), server returns just a chunk of HTML (`<div class="result">...</div>`). HTMX swaps it into a target on the page.

Same Python, same Jinja2 — the template just decides whether to render `_base.html` (full) or `_fragment.html` (partial). This is the whole HTMX trick.

---

## 3 · What this hello-world proves

After step 9 you should be able to answer these without checking:

- [ ] How does a request from the browser reach my Python code?
- [ ] Where does Vercel decide "static file" vs "Python function"?
- [ ] How does Jinja2 know where my templates live?
- [ ] What's the difference between a full-page response and an HTMX fragment response?
- [ ] How do I run this locally without deploying?
- [ ] Where will env vars (DB URL, Sanity tokens, Blob token) live and how does my Python read them?
- [ ] Where does the response Content-Type get set, and why does HTMX care?

If you can't answer one of those after building, that's a signal to slow down and look at that piece.

---

## 4 · Step-by-step setup

Run these in order. Each step has a verification command — actually run it before moving to the next step. The verification is the point.

### Step 0 · Prerequisites

```bash
python3 --version        # need 3.12 or 3.13 (Vercel's default Python runtime)
node --version           # need 18+ (for vercel CLI)
vercel --version         # 50+ ok; latest is 54
git --version
```

Install Vercel CLI if missing: `npm i -g vercel`.

### Step 1 · Create project directory + Python venv

```bash
mkdir cgscic-helloworld
cd cgscic-helloworld
git init

python3 -m venv .venv
source .venv/bin/activate    # mac/linux. Windows: .venv\Scripts\activate

# You should now see (.venv) in your prompt
which python                  # should resolve to .venv/bin/python
```

**Verify:** Your shell prompt prefix shows `(.venv)`. `which python` resolves inside the project. If not, the venv didn't activate — fix this before continuing.

### Step 2 · Install dependencies

Create `requirements.txt`:

```txt
fastapi
jinja2
httpx
psycopg[binary]
python-multipart
```

Then:

```bash
pip install -r requirements.txt
pip freeze > requirements.txt  # pins exact versions
```

**Verify:** `pip list` shows fastapi, jinja2, httpx, psycopg, python-multipart with version numbers. `requirements.txt` now has pinned versions.

**Why each package:**
- `fastapi` — the web framework
- `jinja2` — templating
- `httpx` — async HTTP client (for calling Sanity API later)
- `psycopg[binary]` — PostgreSQL driver (for Neon later). The `[binary]` extra avoids needing a system Postgres install.
- `python-multipart` — required by FastAPI to parse HTML form POSTs

### Step 3 · Write the FastAPI entry point

Create `api/index.py`:

```python
# api/index.py
# FastAPI entry point. Every HTTP request to the Vercel project lands here
# (except static files in /static/, which Vercel serves directly).

from pathlib import Path
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

# Single FastAPI app instance. Vercel auto-discovers `app` as the WSGI/ASGI entry.
app = FastAPI()

# Jinja2 templates live at /templates at the repo root (sibling to /api).
# Path resolution: __file__ is /var/task/api/index.py on Vercel; resolve up two
# levels to the repo root.
BASE_DIR = Path(__file__).resolve().parent.parent
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


# --- Routes ---

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """
    Home route — renders templates/home.html through Jinja2.
    Returns the full HTML page (extends _base.html).
    """
    return templates.TemplateResponse(
        "home.html",
        {
            "request": request,
            "tagline": "Hello from the CGSC stack",
        },
    )


@app.post("/inquiry", response_class=HTMLResponse)
async def inquiry_submit(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
):
    """
    HTMX form POST endpoint.
    Returns an HTML FRAGMENT (not a full page) — HTMX swaps this into the
    target element on the page (#inquiry-result in this case).

    Note: this returns a partial template that does NOT extend _base.html.
    """
    # TODO: persist to Neon Postgres (next session)
    # TODO: send confirmation email via Resend or Vercel email integration

    return templates.TemplateResponse(
        "_inquiry_response.html",
        {
            "request": request,
            "name": name,
            "email": email,
        },
    )


# --- Stubs for the next sessions ---
# Leave these commented out for hello-world; they show where the real
# integrations will land.

# @app.get("/api/coaches", response_class=HTMLResponse)
# async def coaches_fragment(request: Request):
#     """Reads coaches from Sanity, returns an HTML fragment for HTMX swap."""
#     async with httpx.AsyncClient() as client:
#         r = await client.get(SANITY_QUERY_URL, params={"query": "*[_type == 'coach']"})
#         coaches = r.json()["result"]
#     return templates.TemplateResponse(
#         "_coaches_fragment.html",
#         {"request": request, "coaches": coaches},
#     )

# @app.get("/api/listings", response_class=HTMLResponse)
# async def marketplace_listings(request: Request):
#     """Reads marketplace listings from Neon Postgres."""
#     async with psycopg.AsyncConnection.connect(DATABASE_URL) as conn:
#         async with conn.cursor() as cur:
#             await cur.execute("SELECT id, title, price FROM listings ORDER BY created_at DESC")
#             rows = await cur.fetchall()
#     return templates.TemplateResponse(
#         "_listings_fragment.html",
#         {"request": request, "listings": rows},
#     )
```

**Verify:** Read the file top to bottom. For each function: can you say what triggers it, what it returns, and what the difference is between the two endpoints? If you can't, re-read section 2 (Dataflow).

### Step 4 · Write the Jinja2 templates

Create `templates/_base.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% block title %}CGSC Hello World{% endblock %}</title>
  <link rel="stylesheet" href="/static/styles.css">
  <script src="https://unpkg.com/htmx.org@2.0.3"></script>
</head>
<body>
  <header class="topbar">
    <strong>CGSC Hello World</strong>
    <span class="meta">FastAPI · Jinja2 · HTMX · Vercel</span>
  </header>
  <main>
    {% block content %}{% endblock %}
  </main>
</body>
</html>
```

Create `templates/home.html`:

```html
{% extends "_base.html" %}
{% block title %}Hello · CGSC Instructional Center{% endblock %}
{% block content %}

<h1>{{ tagline }}</h1>
<p>This page was rendered by FastAPI + Jinja2, deployed as a Vercel Python Function.</p>

<h2>HTMX form submission</h2>
<p>
  This form submits to <code>/inquiry</code> via HTMX. The Python endpoint
  returns an HTML fragment, which HTMX swaps into the <code>#inquiry-result</code>
  div below — without a page reload.
</p>

<form
  hx-post="/inquiry"
  hx-target="#inquiry-result"
  hx-swap="innerHTML">
  <label>
    Name
    <input type="text" name="name" required>
  </label>
  <label>
    Email
    <input type="email" name="email" required>
  </label>
  <button type="submit">Send →</button>
</form>

<div id="inquiry-result">
  <em>Form responses will appear here.</em>
</div>

<hr>

<h2>What to inspect</h2>
<ol>
  <li>View source on this page — you'll see the rendered <code>tagline</code>.</li>
  <li>Open DevTools → Network. Submit the form. You'll see a POST to <code>/inquiry</code> with <code>Content-Type: text/html</code> in the response.</li>
  <li>Notice the response body is just a fragment, not a full <code>&lt;html&gt;</code> page.</li>
</ol>

{% endblock %}
```

Create `templates/_inquiry_response.html`:

```html
{# HTMX fragment — no <html>, no <head>, no _base.html extension #}
<p>
  Thanks, <strong>{{ name }}</strong>! We got your inquiry at
  <code>{{ email }}</code>.
</p>
<p class="meta">
  In production this would persist to Neon Postgres and trigger an email
  via Resend or Vercel's Marketplace email integration.
</p>
```

**Verify:** Three files in `templates/`. Open each and confirm:
- `_base.html` has the `<html>` tag and a `{% block content %}` placeholder
- `home.html` extends `_base.html` and has the HTMX form
- `_inquiry_response.html` is JUST the fragment, no HTML scaffolding

**Why the underscore?** Convention: filenames starting with `_` are partial templates (fragments or includes), not full pages. Pure convention — Jinja2 doesn't care. It tells you (and future-you) that this file is meant to be embedded or returned as a fragment.

### Step 5 · Write the static CSS

Create `static/styles.css`:

```css
/* Hello-world CSS — uses CGSC brand tokens lifted from cgscic-website/prototype/styles/tokens.css */

:root {
  --navy: #1A3A8A;
  --rust: #FF8B5E;
  --charcoal: #111111;
  --grey-100: #f4f6fa;
  --grey-300: #cfdbe6;
  --grey-500: #666666;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px 60px;
  line-height: 1.6;
  color: var(--charcoal);
  font-size: 16px;
}

.topbar {
  background: var(--navy);
  color: white;
  padding: 16px 20px;
  margin: 0 -20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.topbar .meta {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.7;
}

h1 { color: var(--navy); margin-top: 0; }
h2 { color: var(--navy); margin-top: 32px; }

code {
  background: var(--grey-100);
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 0.88em;
}

form {
  display: grid;
  gap: 12px;
  max-width: 360px;
  padding: 20px;
  background: var(--grey-100);
  border-radius: 4px;
  margin: 16px 0;
}
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 600;
  font-size: 14px;
}
input {
  padding: 10px;
  border: 1px solid var(--grey-300);
  border-radius: 3px;
  font-size: 14px;
  font-family: inherit;
}
input:focus {
  outline: 0;
  border-color: var(--navy);
  box-shadow: 0 0 0 3px rgba(26, 58, 138, 0.12);
}
button {
  background: var(--navy);
  color: white;
  padding: 12px;
  border: 0;
  border-radius: 3px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s;
}
button:hover { background: var(--rust); color: var(--navy); }

#inquiry-result {
  margin-top: 20px;
  padding: 16px;
  background: rgba(255, 139, 94, 0.10);
  border-left: 3px solid var(--rust);
  border-radius: 0 3px 3px 0;
}
#inquiry-result .meta {
  font-size: 13px;
  color: var(--grey-500);
  margin: 8px 0 0;
}

ol li { padding: 4px 0; }
hr { border: 0; border-top: 1px solid var(--grey-300); margin: 40px 0; }
```

**Verify:** File at `static/styles.css`, valid CSS, uses navy/rust/charcoal tokens. (When you migrate real pages later, you'll lift more tokens from `cgscic-website/prototype/styles/tokens.css`.)

### Step 6 · Configure Vercel

Create `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    { "source": "/(.*)", "destination": "/api/index.py" }
  ]
}
```

**What this does:**
1. Vercel checks the filesystem first. `/static/styles.css` exists → served directly (no Python invoked).
2. For anything else (`/`, `/inquiry`, `/about`, etc.) → rewritten to `/api/index.py`. FastAPI's internal router decides what to do based on the URL.

**Why no explicit Python runtime config?** Vercel auto-detects `requirements.txt` and runs your `api/*.py` files as Python Functions on the default Python runtime (3.12). If you need to pin a specific version, add:

```json
{
  "functions": {
    "api/index.py": { "runtime": "@vercel/python@4" }
  }
}
```

Create `.env.example` (for documenting what env vars Phase 2+ will need — none yet for hello-world):

```bash
# Provisioned via Vercel Marketplace → Neon Postgres. Auto-injected once linked.
DATABASE_URL=postgresql://user:password@host/dbname

# Provisioned via Vercel Marketplace → Vercel Blob.
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxx

# Sanity — sign up at sanity.io, create a project, get IDs from sanity.io/manage
SANITY_PROJECT_ID=xxxxxxxx
SANITY_DATASET=production
SANITY_API_TOKEN=sk_xxxxxxxxxx
```

Create `.gitignore`:

```
.env
.env.local
.venv/
__pycache__/
*.pyc
.vercel/
.DS_Store
node_modules/
```

**Verify:** `vercel.json`, `.env.example`, `.gitignore` all exist. Open `vercel.json` and trace: "If the user requests `/inquiry`, which file in my project handles it?" Answer: filesystem doesn't have `/inquiry`, so the rewrite catches it, routes to `api/index.py`, FastAPI matches `@app.post("/inquiry")`.

### Step 7 · Local dev workflow

Two ways to run locally. Pick one (or use both):

**Option A — Pure Python (faster iteration, no Vercel emulation):**

```bash
# from project root, with venv active:
uvicorn api.index:app --reload
```

Visit `http://localhost:8000`. The `--reload` flag restarts on file changes. Note that `/static/` won't be served (Vercel does that in production, but uvicorn doesn't unless you add a `StaticFiles` mount). For hello-world, this is fine — the CSS won't load locally without one more line. If you want CSS to work in local Python, add to `api/index.py`:

```python
from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
```

This line is *only* needed for local dev — on Vercel, the rewrite config in step 6 makes Vercel serve static files directly, so the mount is a no-op there.

**Option B — Vercel dev (faithful to production):**

```bash
vercel link    # one-time: links this dir to a Vercel project. Pick "create new" when prompted.
vercel dev     # serves on http://localhost:3000, with Vercel's routing config applied
```

`vercel dev` simulates production routing (static files served by Vercel, rewrites applied, env vars injected). Slower than uvicorn but more faithful.

**Verify locally:**
- Visit `/` → see the home page rendered, navy header, form.
- Submit the form → see the response fragment appear below (no page reload).
- Open DevTools → Network → submit again → confirm `POST /inquiry` returns `Content-Type: text/html` with just the fragment in the body.
- Visit `/static/styles.css` → file content shows (static files work).
- Visit `/totally-fake-url` → see a 404 from FastAPI (since the catch-all rewrite handed it to FastAPI, which doesn't have a matching route).

### Step 8 · Deploy to Vercel

```bash
vercel deploy --prod
```

First run prompts you to link/create a project. Name it something like `cgscic-app` so it's clearly distinct from the existing `prototype` project in `cgscic-website`.

**What Vercel does:**
1. Uploads your project files.
2. Detects `requirements.txt` → builds Python function for `api/index.py`.
3. Applies `vercel.json` (rewrites).
4. Deploys behind a generated URL like `cgscic-app-xxxx.vercel.app`.

**Verify:**
```bash
curl -i https://<your-deploy-url>/
curl -i -X POST https://<your-deploy-url>/inquiry -d "name=Test&email=test@test.com"
```

First should return `200 OK` with HTML and the rendered home page. Second should return `200 OK` with the inquiry response fragment.

Open the URL in a browser, submit the form, watch the HTMX swap happen against a real serverless function.

### Step 9 · Verify you understand the dataflow

Walk through each of these without checking docs. If any feels shaky, that's where to dig:

1. **A user hits `/` for the first time today.** What happens at the edge? What runs in Python? What's returned?
2. **The same user submits the form.** What URL is the request to? What HTTP method? What's the response Content-Type? How does the browser know what to do with the response?
3. **The user requests `/static/styles.css`.** Does Python run? Why or why not?
4. **The user requests `/totally-made-up`.** Walk through what happens.
5. **You change a line in `templates/home.html` and push to git.** Vercel auto-deploys. What's the next request's behavior?
6. **A second user hits `/` 30 minutes after the first user.** Is there a cold start? Why or why not? (Hint: Fluid Compute reuses warm instances.)

If you can answer all six confidently, hello-world is done — proceed to next sessions.

---

## 5 · Next sessions (not in scope for hello-world)

Each of these is its own focused work session. Tackle in order:

1. **Provision Neon Postgres.** In Vercel dashboard → Storage → Marketplace → Neon. Click through. Vercel auto-injects `DATABASE_URL` into your project. Test by reading `os.environ["DATABASE_URL"]` in a new route.
2. **Provision Vercel Blob.** Same flow. Adds `BLOB_READ_WRITE_TOKEN`.
3. **Sanity account + first schema.** Sign up at sanity.io, create a project (free tier), `npm create sanity@latest` to scaffold Studio locally, define a `coach` schema (name, role, bio, photo), publish a few coaches, deploy Studio (Sanity hosts it). Then in Python: `httpx.get(f"https://{project}.api.sanity.io/v2024-01-01/data/query/production", params={"query": "*[_type == 'coach']"})`.
4. **First real CMS page.** Convert `cgscic-website/prototype/about.html` → FastAPI route that reads coaches from Sanity and renders the Jinja2 version. Lift styles from `prototype/styles/components.css`.
5. **First real form.** Replace the hello-world inquiry handler with a real Neon insert: `INSERT INTO inquiries (name, email, program, notes) VALUES (...)`. Return the same fragment.
6. **First Marketplace listing flow.** Schema in Postgres for `listings`, GET `/marketplace` reads + renders Jinja2 cards, POST `/marketplace/post` writes + uploads photo to Blob.
7. **Migrate the rest of the mockups,** page by page, until `prototype-sooty-seven.vercel.app` is deprecated and the new project takes over the domain.

---

## 6 · Reference materials in the cgscic-website repo

When you need to know what something should look like, what content goes where, or what the design system says — open these.

| File | Why you'd open it |
|---|---|
| `cgscic-website/MOCKUPS_PRD.md` | The PRD for the static mockup phase. Explains IA decisions, 12-template scope, content split, and what's deferred to Phase 2 (i.e. what you're building now). |
| `cgscic-website/BRAND_DECISIONS.md` (v1.1) | Source of truth for brand decisions: hero copy, naming rules (always "Instructional Center", never "Academy" except in hero), 5-pillars→3-destinations IA, voice & tone, Marketplace surface spec (§18). |
| `cgscic-website/HANDOFF.md` | Original Phase 2 handoff (stack was Next.js + Sanity + Resend then). Component contracts and CMS schema sketches still useful as reference — but the stack has pivoted. |
| `cgscic-website/prototype/styles/tokens.css` | Design tokens: colors, type, spacing. Lift these verbatim into your Phase 2 CSS. |
| `cgscic-website/prototype/styles/components.css` | ~1800-line component library: header, footer, hero variants, panels, split-2col, pathway, coach grid, stats, regatta cards, FAQ accordion, manifesto, inquiry block, marketplace listings, etc. **This is what your Jinja2 templates will use.** |
| `cgscic-website/prototype/index.html` and the other 11 HTML files | The mockups. Open the one for the page you're about to migrate; it's the exact target HTML structure. |
| `cgscic-website/prototype/js/site.js` | Shared chrome JS: mobile drawer, scrollspy, newsletter form. Most of this stays as-is in Phase 2; HTMX replaces some of it (forms especially). |
| `cgscic-website/prototype/js/pages/race-team.js` | The pathway selector. In Phase 2, this is a candidate to migrate to HTMX (click a rung → HTMX GET → return fragment with the active rung detail), or stay as vanilla JS. Either works. |
| `cgscic-website/reference/inspiration/mouratoglou/*/INDEX.md` | Structural reference for the visual + IA patterns. Open when you're unsure why a layout looks the way it does. |
| Live mockup: `https://prototype-sooty-seven.vercel.app` | The visual target. Open in a second tab while you build. |

---

## 7 · Things that will bite you if you don't expect them

These are the gotchas. Read them once before you start, again after step 5, and again when something breaks.

- **Vercel Python is per-file = per-function.** Every `.py` in `/api/` is a separate serverless function. For FastAPI, we use a single `api/index.py` + a catch-all rewrite to route everything to it. Don't split FastAPI logic across multiple `/api/*.py` files unless you want multiple separate functions.

- **No persistent state between requests.** Each request might hit a fresh function instance. Don't put DB connection pools in module-level globals expecting them to persist — use Neon's built-in connection pooler URL. (Fluid Compute *does* reuse instances across concurrent requests, which mitigates cold starts, but assume statelessness as a baseline.)

- **HTMX responses are HTML, not JSON.** If you return JSON, HTMX swaps the literal JSON text into the DOM. Always `templates.TemplateResponse(...)` or `HTMLResponse(...)`.

- **Form parsing requires `python-multipart`.** If you forget to install it, FastAPI's `Form(...)` raises a runtime error.

- **Static files in production vs dev:** On Vercel, `/static/*` is served by Vercel's edge directly (the rewrite in `vercel.json` doesn't match files that exist). Locally with `uvicorn`, you need `app.mount("/static", StaticFiles(directory=...))` or the CSS won't load. With `vercel dev`, static files Just Work.

- **Sanity reads are free; writes cost.** Sanity's free tier includes generous read API hits. If your site is read-heavy (which it will be — Maru edits in Studio, public site reads), you're fine. Writes (mutations via API) are rate-limited but you mostly won't need them — Studio handles writes.

- **Neon's free tier has a "compute time" budget.** Connections that idle don't burn compute, but always-running pools do. With serverless functions opening short-lived connections per request, you're well within free tier for a small site.

- **Vercel Blob has its own free tier for storage + bandwidth.** Marketplace photo upload sizes should stay reasonable (~1MB max per photo). Cap upload size on the form.

- **Local dev with `vercel dev` is slower than `uvicorn` reload.** For pure Python iteration, prefer `uvicorn --reload`. For testing the full routing config (rewrites, env vars, static), `vercel dev`. Use both.

- **Env vars on Vercel auto-inject from Marketplace integrations.** When you provision Neon, Vercel automatically adds `DATABASE_URL` to your project env. Same for Blob and any other Marketplace integration. You don't manually copy connection strings.

- **`api/index.py` location is opinionated.** Vercel looks for Python entries in `/api/`. Put your FastAPI app there. Other code (helpers, db modules) can live at the root, but `/api/index.py` is the one Vercel invokes.

---

## 8 · When you're done

You've completed hello-world when:
- [ ] The deployed URL renders the home page with the navy header.
- [ ] Submitting the form swaps in the response fragment without a page reload.
- [ ] You can answer all six questions in §4 step 9 without checking docs.
- [ ] You've committed your work to git and pushed to a remote (optional but recommended).

Save a checkpoint commit: `git commit -m "hello-world: FastAPI + Jinja2 + HTMX deployed on Vercel"`.

Then come back to the cgscic-website repo and start the next session — provisioning Neon and Sanity. That's where the real migration begins.

---

*Generated for Diego Escobar (PMG · agency-side), sole developer on the CGSC Instructional Center site, 2026-05-31.*
*If something here is wrong, fix it in the cgscic-website repo so future sessions inherit the corrections.*
