# Nuwan Madhusanka — Portfolio

Personal portfolio site built from the design handoff in
[`design_handoff_portfolio/`](./design_handoff_portfolio/).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · static export
(`output: 'export'`). Fonts (Figtree + IBM Plex Mono) load via `next/font/google`.
No carousel library — native CSS scroll-snap plus a small React hook.

## Prerequisites

Node.js 18.18+ (or 20+) and npm. **Node is not currently installed on this
machine** — install it first from <https://nodejs.org> (LTS), then reopen your
terminal so `node`/`npm` are on `PATH`.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build (static export)

```bash
npm run build        # outputs a static site to ./out
```

`npm run build` type-checks the project and writes the fully static site to
`out/`. You can preview it with any static server, e.g. `npx serve out`.

## Deploy to Vercel

The repo works on Vercel with zero config (Vercel detects Next.js).

```bash
npm i -g vercel
vercel               # first run links/creates the project (preview)
vercel --prod        # production deploy
```

Vercel serves the static export automatically. Alternatively, deploy the
generated `out/` folder to Netlify or GitHub Pages.

## Project structure

```
app/            layout (SEO, fonts, JSON-LD), page (composes sections),
                globals.css, robots.ts, sitemap.ts
components/     SectionHeader, Card, Chip, TechTags, MetricRow, Button,
                Carousel, Banner
sections/       Header, Hero, CoreExpertise, Backend, Cloud, AI, Projects,
                Experience, ResearchCerts, Writing, Contact
data/           content.json (source of truth), content.ts, types.ts
lib/            useViewport hook
public/         profile-photo.png, banners/*.svg
```

## Open items still needed from the owner

Carried over from the handoff (`design_handoff_portfolio/README.md`):

1. **CV link** — the "Curriculum Vitae" link in the hero currently points to
   `#contact`. Add a real PDF (e.g. `public/cv.pdf`) and update the link in
   `sections/Hero.tsx`.
2. **4 article URLs** — Database Performance, Travel Platform Migration, Virtual
   Threads, and Race Conditions have no Medium URL yet and fall back to the
   Medium profile page. Their dates and read times are placeholders.
   (`data/content.json` → `articles`.)
3. **FortifyStack copy** — its project summary and case study are placeholders
   pending your real description.
4. **Certification verification URL** — "Verify on LinkedIn" should be swapped
   for the Credly / AWS verification link if one exists
   (`sections/ResearchCerts.tsx`).
5. **Metric consistency** — cost reduction shows as **75%** in sections 02/03
   but **60%** in Experience; downtime is "zero" in some places and "near-zero"
   in others. These are reproduced verbatim from the approved content — confirm
   before launch.
6. **Site URL** — `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` use the
   placeholder `https://nuwanmadhusanka.dev`. Replace with the real domain.
```
