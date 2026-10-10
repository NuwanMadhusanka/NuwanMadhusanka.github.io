# Prompt to paste into Claude Code

Put this folder (`design_handoff_portfolio/`) in the root of an empty project directory, open Claude Code there, and paste the prompt below.

---

I want you to build my personal portfolio website from the design handoff in `./design_handoff_portfolio/`.

1. Read `design_handoff_portfolio/README.md` completely. Then read `content/content.json`, and skim `reference/Portfolio.dc.html` for the exact styles.
2. Scaffold a **Next.js (App Router) + TypeScript + Tailwind CSS** project configured for static export (`output: 'export'`). Load the Figtree and IBM Plex Mono fonts with `next/font/google`.
3. Add the colour, radius and shadow tokens from the README to `tailwind.config.ts`.
4. Copy `assets/profile-photo.png` and `assets/banners/*.svg` into `public/`.
5. Import `content.json` into `data/content.ts` and add TypeScript types for it.
6. Build these shared components: `SectionHeader`, `Card`, `Chip`, `TechTags`, `MetricRow`, `Button` and `Carousel`. The Carousel shows 3×2 cards on desktop, 2×2 on tablet and 1 with a peek on mobile, and uses CSS scroll-snap with a `useRef`. Its dots, counter and prev/next buttons appear only when there is more than one page.
7. Build the sections in the README's order: Header (with the mobile menu), Hero, Core Expertise, Backend, Cloud, AI, Projects (with filters, the carousel, and the single full-width case-study panel), Experience, Research + Certifications, Writing and Contact.
8. **Do not change, rewrite, shorten or add any copy, metric, link or technology name.** Use the JSON and the verbatim text in the README exactly.
9. Add SEO: metadata and Open Graph tags from the reference `<head>`, a JSON-LD `Person` schema, `sitemap.xml` and `robots.txt`.
10. Make sure it's accessible: semantic landmarks, `aria-expanded` and `aria-pressed` where needed, visible focus rings, a minimum hit area of 44px, and support for `prefers-reduced-motion`.
11. Check that there is no horizontal page scroll at 360, 768, 1024 and 1440px widths. Also check that every carousel button actually scrolls its carousel, and that "Read case study" opens the panel and scrolls to it.
12. Run `npm run build` and fix any errors. Give me the commands to run locally and to deploy to Vercel.

When you're done, list the open items from the README ("Known open items") that I still need to provide.
