# Handoff: Nuwan Madhusanka — Personal Portfolio

## Overview
A single-page, dark-first portfolio for **Nuwan Madhusanka, Senior Software Engineer** (Colombo, Sri Lanka). It positions him as a backend-first engineer with AWS/Cloud architecture expertise and a growing ML / GenAI / Agentic AI specialisation. Audience: recruiters and hiring managers for Senior Backend, Cloud/AWS, AI/GenAI and Agentic AI roles.

## About the design files
Everything in `reference/` is a **design reference built in HTML**: a working prototype that shows the intended look, content and behaviour. It is **not production code to ship**. The task is to **rebuild this design in a real front-end stack**. If there is no existing codebase, use the stack recommended below.

To view the reference, open `reference/Portfolio.dc.html` in a browser; it needs `support.js` and `profile-photo.png` in the same folder. Inside the file, the markup is in `<x-dc>`. All data and logic live in the `<script data-dc-script>` block: carousel maths, banner SVG generators, and the project and article data.

## Fidelity
**High-fidelity.** Final colours, typography, spacing, copy and interactions. Recreate it pixel-accurately.

**Content rule (important): do not rewrite, shorten or add to any copy.** All text, metrics, links and technology names are final and approved by the owner. Use `content/content.json` as the source of truth.

## Recommended stack (if starting fresh)
- **Next.js 14+ (App Router), TypeScript, static export** (`output: 'export'`), or **Astro**. Both are SEO-friendly and ship almost no JS.
- **Tailwind CSS**, with the tokens below mapped into `tailwind.config`.
- Fonts via `next/font/google`: **Figtree** (300–700) and **IBM Plex Mono** (400, 500).
- Carousels: native CSS scroll-snap plus a small React hook, as in the reference. No carousel library is needed.
- Deploy: Vercel, Netlify or GitHub Pages.
- SEO: `<title>`, meta description, Open Graph tags (copy them from the reference `<head>`), semantic `<section id>` landmarks, and a JSON-LD `Person` schema (name, jobTitle, sameAs = GitHub/LinkedIn/Medium).

Suggested structure:
```
app/page.tsx              – composes sections in order
components/SectionHeader  – numbered eyebrow + H2 + lead (used by every section)
components/Card           – shared card surface
components/Carousel       – scroll-snap carousel (max 6 visible)
components/Chip, MetricRow, TechTags, Button
sections/Hero, CoreExpertise, Backend, Cloud, AI, Projects (+CaseStudyPanel), Experience, ResearchCerts, Writing, Contact
data/content.ts           – imported from content/content.json
public/banners/*.svg, public/profile-photo.png
```

---

## Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| bg | `#080B10` | page background |
| surface | `rgba(19,26,35,.55)` | card fill |
| surface-deep | `#0B1016` | banner backgrounds |
| border | `rgba(255,255,255,.08)` | card border |
| border-hover | `rgba(255,255,255,.18)` | card hover border |
| divider | `rgba(255,255,255,.06)` | section separators, inner rules |
| text | `#E6EAF0` | headings, primary text |
| text-2 | `#C9D1DC` | emphasised body / intros |
| text-3 | `#9AA6B8` | body copy |
| text-muted | `#8D99AB` | labels, meta (minimum; passes AA on bg) |
| **backend / teal** | `#7DD3C0` | Pillar 01, section 02, general accent |
| **cloud / blue** | `#8AB4F8` | Pillar 02, section 03, links |
| **ai / violet** | `#A78BFA` | Pillar 03, section 04 |
| ml / clay | `#F5A97F` | ML & CV category, research card |
| data / citron | `#C9D24A` | Data & Search category |
| devops / pink | `#F3A5C0` | DevOps category |
| link-hover | `#B9D2FB` | |
| primary button | bg `#E6EAF0`, text `#0A0E13` | |

Accent tints follow one pattern: border = accent at 33–40% alpha, fill = accent at 5–12% alpha.

### Typography
- **Figtree** for all UI and body text. **IBM Plex Mono** for eyebrows, labels, chips, meta and counters.
- H1: `clamp(30px, 3.9vw, 48px)` / 1.1 / weight 600 / letter-spacing −0.03em / `text-wrap: balance`. The second clause uses a gradient text fill `linear-gradient(100deg,#8AB4F8,#7DD3C0)`.
- H2 (section): `clamp(26px, 3.2vw, 38px)` / 1.16 / 600 / −0.028em.
- H3 card: 16–19px / 600 / −0.012 to −0.018em. Pillar H3: 22px.
- Body: 14–16.5px / line-height 1.62–1.72, colour text-3, `text-wrap: pretty`.
- Mono label: 10–11.5px, uppercase, letter-spacing .08–.16em.

### Spacing, radius, shadow
- Container: `max-width: 1180px`, side padding 24px.
- Section padding: `clamp(52px, 7vw, 76px) 0`, with a 1px `divider` border-top between sections.
- Card padding: 24px (pillars 28px). Grid gaps: 16–20px.
- Radius: **16px** on all cards and panels, 20px on the contact block, 10px on buttons, 5–7px on chips, pills 999px.
- Card hover: `translateY(-2px)`, border-hover, `box-shadow: 0 18px 40px -24px rgba(0,0,0,.85)`. Transitions are .25s.
- Background grid texture (hero card, delivery path, contact): 38px grid lines at `rgba(255,255,255,.024)`.

### Shared components
- **SectionHeader:** a row with the number badge, the uppercase mono label and a 1px gradient rule that fills the remaining width. Below it is a 2-column grid (`auto-fit, minmax(320px,1fr)`, gap 20px 56px, align end) with the H2 on the left and the lead on the right.
  - Sections 02, 03 and 04 (the three pillars) use a **solid** badge in their accent colour (teal, blue, violet) with dark text, and the label is in the accent colour.
  - All other sections use an outlined teal badge.
- **Chip (category):** mono 10px uppercase, padding 4px 9px, radius 5px, accent border/fill/text.
- **Tech tag:** mono 10.5–11px, padding 4–5px 9–10px, radius 5–6px, border `rgba(255,255,255,.08)`, fill `rgba(255,255,255,.025)`, colour text-3.
- **Metric row:** value 19px/600 with a mono uppercase label underneath. Top and bottom divider lines.
- **Buttons:**
  - Primary: solid `#E6EAF0`, dark text, padding 13×24, radius 10. Hover lifts by 2px and adds a soft glow.
  - Secondary: 1px `rgba(255,255,255,.14)` border.
  - Minimum height 44px everywhere.
- **Focus:** `:focus-visible { outline: 2px solid #8AB4F8; outline-offset: 3px }`.

---

## Page sections (in order)
Exact copy for list-based sections is in `content/content.json` under `sections`, `projects` and `articles`. Fixed copy that is not in the JSON is quoted verbatim below.

**Header.** Sticky, background `rgba(8,11,16,.82)` with a 14px backdrop blur. On the left: the logo mark (a 26px rounded square with a blue→teal gradient) and "Nuwan Madhusanka". On the right: the `navLinks` plus a "Contact" pill. **Below 900px wide**, show a 44×44 hamburger button that animates into an X. It opens a full-width dropdown with the same links and a solid "Contact" button, and tapping a link closes it.

**Hero (`#top`).**
- Layout: two columns (`auto-fit, minmax(340px,1fr)`).
- Left column, top to bottom:
  - An eyebrow pill with a teal dot: "Senior Software Engineer · Colombo, Sri Lanka".
  - H1: "Hi, I’m Nuwan. I’m a Senior Software Engineer focused on building **scalable backend systems, cloud infrastructure, and modern AI solutions.**" The bold part uses the gradient fill.
  - `heroPillars` shown as tags, each with a colour dot.
  - Three paragraphs, copied from the reference.
  - Buttons: "View Projects" (primary, links to #projects) and "Get in Touch" (secondary, links to #contact).
  - Mono underlined text links: GitHub, LinkedIn, Medium and "Curriculum Vitae" (the CV link currently points to #contact, so replace it with the real CV file).
- Right column: the profile card.
  - Photo is **92×116px**, radius 14, `object-position: center top`.
  - Next to the photo: the name, then "Senior Software Engineer · CodeGen International".
  - Below: the 7 `heroStats` rows (label on the left, value on the right, divider between rows).

**01 Core expertise (`#expertise`).**
- H2: "What I work on". Lead: "Backend engineering is where I'm strongest. Cloud is where that work actually runs. AI is what I'm building on top of both."
- Three pillar cards from `sections.pillars`. Each card links to its section: #backend, #cloud, #ai.
- Card styling:
  - A 3px accent bar across the top.
  - Background: a radial accent tint from the top-left over the surface colour.
  - Content: the number, a tag chip, H3, lead text and tech tags.

**02 Backend Engineering (`#backend`).**
- H2 and lead are in the reference.
- **Carousel** of the 8 `backendCaps` cards. Each card has a title, body, and a mono tech line (`evidence`) above a divider.

**03 AWS & Cloud Architecture (`#cloud`).**
- H2 and lead are in the reference.
- **Delivery path** panel (`cloudFlow`): 5 steps, one row of 5 columns on desktop, stacked on mobile.
- **Carousel** of the 7 `cloudCaps` cards.

**04 AI / ML & Agentic AI (`#ai`).**
- H2: "From deep-learning research to applied AI", followed by the two lead paragraphs.
- Three `aiPath` cards: title, body and tech line. The third card (Generative AI & Agentic AI) is highlighted with a violet border and tint.

**05 Selected projects (`#projects`).**
- H2: "Things I've built", followed by the lead.
- **Filter buttons**: "All work" plus the 6 categories, each showing a count. The active button takes its category colour. Changing the filter resets the carousel to page 1.
- **Carousel of project cards**, in `projectOrder`. Each card contains, top to bottom:
  - A banner (`aspect-ratio: 16/7`) using `assets/banners/project-<id>.svg`.
  - The category chip (use `project.catLabel` if present, otherwise the category label) and a kind label: Production / Research / Personal.
  - Title, summary and the metric row (if the project has metrics).
  - An optional `techLabel` above the tech tags.
  - A "Read case study ↓" button and "GitHub ↗" (if `repo` is set).
- **Case-study panel**: clicking "Read case study" opens **one** full-width panel **below the carousel** and smooth-scrolls to it, offset 90px for the sticky header. Clicking the same card again, or the panel's "Hide case study ↑" button, closes it. The open card gets a 1px accent outline.
  - Panel header: chip, kind label, H3 title, GitHub link and the close button.
  - Panel body: a grid (`auto-fit, minmax(300px,1fr)`). Each `detail` block has a mono teal heading, `body`, an optional `body2` paragraph, an optional `list` of bullets (teal dots), and an optional `after` paragraph.

**06 Professional experience (`#experience`).**
- H2: "Career timeline".
- One card per `timeline` entry:
  - Left column (160px): the period in blue mono.
  - Right column: the org (teal mono uppercase), the role (H3), the intro (text-2), then the bullet points in 2 columns on wide screens (`auto-fit, minmax(320px,1fr)`).

**07 Research & publications (`#research`) and 08 Certifications (`#certifications`).** These two sit side by side and stack on narrow screens.
- **Research card:** clay accent.
  - Label: "Journal manuscript · BSc Computer Science research".
  - Title: "Improving Convolutional Neural Network for Head Pose Estimation by using Knowledge Distillation Techniques".
  - Body: "Relational knowledge distillation from a ResNet50 Hopenet teacher into a MobileNetV2 student, with a novel exchange loss function in the distillation process."
  - Metrics: 2.2× faster inference · 195.9 → 89.9 ms per image · 3.4708 MAE vs 3.4695.
  - Link: "Research code on GitHub ↗" to https://github.com/Research-Project-4th-Year/cnn_headpose_estimation.
- **Certification card:** blue accent.
  - Label: "Amazon Web Services".
  - Title: "AWS Certified Solutions Architect – Associate".
  - Body: "Designing resilient, high-performing, secure and cost-optimised architectures on AWS — compute, storage, networking, identity and managed databases."
  - `certTech` tags.
  - Link: "Verify on LinkedIn ↗". Replace this with the Credly or AWS verification URL if one exists.

**09 Technical writing (`#writing`).**
- H2: "Things I've learned, written down", plus an "All articles on Medium ↗" link.
- **Carousel** of article cards, in `articlesDisplayOrder`. Each card is one full link (`href`, opens in a new tab) containing:
  - A banner `article-<n>.svg` (n = index in `articles` + 1).
  - The category chip in blue, the title and the blurb.
  - A footer with `read · date` and "Read Article →".
- 4 of the 9 articles have no `href` yet and fall back to the Medium profile page.

**10 Contact (`#contact`).**
- A large panel with a blue→teal gradient tint, the grid texture and radius 20.
- Left side: the eyebrow, the H2 "Let's build something great.", two paragraphs (verbatim in the reference), and the buttons "Email Me" (mailto:madhusankanuwan448@gmail.com) and "Connect on LinkedIn".
- Right side: the 5 `contactRows`, each with a label and a link.
- Footer: "© 2026 Nuwan Madhusanka — Colombo, Sri Lanka" and "Backend · AWS & Cloud · ML & GenAI · Agentic AI".

---

## Interactions & behaviour

### Carousel
Used for Backend caps, Cloud caps, Projects and Articles. The grid uses `grid-auto-flow: column`, `grid-template-rows: repeat(R, auto)` and `grid-auto-columns: calc((100% - gap*(C-1)) / C)`, with gap 20px, `overflow-x: auto`, `scroll-snap-type: x mandatory`, a hidden scrollbar, and `scroll-snap-align: start` on each card.

| Viewport | Columns × rows | Visible |
|---|---|---|
| ≥ 1024px | 3 × 2 | 6 |
| 640–1023px | 2 × 2 | 4 |
| < 640px | 1 column at 86% width (peek) × 1 | 1 |

- Controls are shown **only when there is more than one page**:
  - Page dots: 6px, the active dot stretches to 20px in the accent colour, and each dot has a 28px hit area.
  - A mono "01 / 02" counter.
  - 44×44 ← and → buttons, disabled at the ends.
- Page step: container width + gap (or 86% of width + gap on mobile). Scroll to it with `scrollTo({left, behavior:'smooth'})`.
- Update the current page from `onScroll` using `Math.round(scrollLeft / step)`. Native swipe works on touch devices.
- **Implementation note:** get the scroll container through a real ref, checking that `ref.current` is connected before calling `scrollTo`. In the prototype, the template ref didn't attach, so it falls back to `document.querySelector('[data-key]')`. In React, use a normal `useRef` on the element.

### Other interactions
- **Filters:** set the category and reset the project carousel to scrollLeft 0 and page 0.
- **Mobile menu:** state `menuOpen`. It closes when a link is tapped, and on resize to 900px or wider.
- **Hover:** cards lift, borders brighten, links go from text-3 to text. Everything uses .2–.25s ease transitions.
- **Entrance:** the hero fades up (`rise`: opacity 0→1, translateY 14px→0, .7s `cubic-bezier(.2,.7,.2,1)`). Respect `prefers-reduced-motion`.
- **Page setup:** `scroll-behavior: smooth`, `scroll-padding-top: 84px` so anchors clear the sticky header, and `overflow-x: hidden` on body.

## State
- `filter`: 'all' or a category key.
- `openId`: the id of the project whose case study is open, or null.
- `menuOpen`: boolean.
- `page`: the current page of each carousel.
- Viewport width, for the carousel layout and the nav breakpoint. A `matchMedia` hook or a resize listener works.

## Assets
- `assets/profile-photo.png`: the owner's portrait.
- `assets/banners/project-*.svg` (8 files) and `assets/banners/article-1..9.svg`: original architecture-style diagrams generated for this site.
  - Each is a 640×200 viewBox with `preserveAspectRatio="xMidYMid meet"` and a background that fills past the edges.
  - Render them with `<img>` using `object-fit: fill` inside a 16/7 box, so nothing gets cropped. The article number matches its index in `content.articles`.
- No icon library. Arrows are plain text characters (↗ → ← ↓ ↑).

## Files
- `reference/Portfolio.dc.html`: the full interactive prototype and source of truth for visuals.
- `reference/support.js`: the runtime needed to open the prototype. **Do not port it.**
- `content/content.json`: all structured content (sections, projects with full case studies, articles with links).
- `assets/`: the photo and the banner SVGs.

## Known open items for the owner
- The CV link currently points to #contact. It needs a real PDF.
- 4 articles (Database Performance, Travel Platform Migration, Virtual Threads, Race Conditions) need their Medium URLs. Their dates and read times are also placeholders.
- FortifyStack's project copy is still a placeholder.
- Metric consistency: the cost reduction appears as 75% in sections 02 and 03 but 60% in Experience, and downtime appears as "zero" in some places and "near-zero" in others. Confirm with the owner before launch.
