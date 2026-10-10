# Portfolio - Session Status

_Last updated: 2026-09-30 (end of session). Resume from here next time._

## How to run it (do this first)

New terminal (Node 24 LTS is on PATH already):

```powershell
cd "D:\Code\Nuwan Madhusanka's Portfolio"
npm run dev
```

Open http://localhost:3000 (hard-refresh with Ctrl+Shift+R if styles look stale).

## ⚠️ IMPORTANT gotcha - do NOT do this

**Never run `npm run build` while `npm run dev` is running.** They share the `.next` folder; the build overwrites the dev server's chunks and the page then renders with **zero CSS** (white background, serif fonts, blue links) - it looks broken but the code is fine.

If it happens, recover with:

```powershell
Get-Process node | Stop-Process -Force
Remove-Item -Recurse -Force ".next"
npm run dev
```

To build the deployable static export, **stop the dev server first**, then `npm run build` (output lands in `out/`).

## Done this session (2026-09-30)

- **Security:** bumped `next` 14.2.15 -> **14.2.35** (latest 14.2.x patch, pinned exact). Remaining `npm audit` warnings only apply to the Next server runtime, which does not exist for this `output:'export'` static site - not applicable.
- **Build fix:** the apostrophe in the folder name `Nuwan Madhusanka's Portfolio` broke Next's metadata-route-loader for `app/robots.ts` + `app/sitemap.ts`. Replaced them with static `public/robots.txt` + `public/sitemap.xml`. Build now compiles clean.
- **Hero card:** removed "CodeGen International" from the card subtitle; enlarged the profile photo and turned it into a **circular avatar that overlaps the top of the card** (name/title centered below). This overlap version is the approved one.
- **Hero stats:** added Python ("Java - Python - Spring Boot - Microservices"); removed the "Platform scale" and "Research" rows.
- **Core Expertise (section 01):** replaced the intro line + all three pillar cards (Backend Engineering / AWS & Cloud Architecture / ML, GenAI & Agentic AI) with the user-supplied copy; "Bedrock" -> "Amazon Bedrock", etc.
- **Writing (section 09):** added group filter tabs mirroring Projects - All writing / Backend Engineering / Cloud & AWS / AI & Agents. Mapping lives in `GROUP_OF` at the top of `sections/Writing.tsx`.
- **Projects (section 05):** collapsed the 6 categories down to the same 3 groups (Backend Engineering 2 / Cloud & AWS 2 / AI & Agents 4). Narrowed `CategoryKey` in `data/types.ts` to `'backend' | 'cloud' | 'ai'`.
- **Style rule applied everywhere:** replaced all long em-dashes (—) with plain single hyphens (-) across the source. Keep using single hyphens in any new copy.

## Verified

- Page + CSS both return HTTP 200; production build compiles clean.
- Screenshotted and visually confirmed: hero (overlap avatar), Core Expertise, Projects (05) with 3 tabs, Writing (09) with 3 tabs, Research/Certs.

## Pending / next steps (open items - need owner input)

These live in the root `README.md` too:

- Real CV PDF - hero "Curriculum Vitae" link still points to `#contact`.
- 4 missing Medium article URLs (Database Performance, Travel Platform Migration, Virtual Threads, Race Conditions).
- FortifyStack real copy.
- Cert verification URL (currently LinkedIn).
- 75% vs 60% cost-metric inconsistency to resolve.
- Real site domain (placeholder `nuwanmadhusanka.dev` in `app/layout.tsx`, `public/robots.txt`, `public/sitemap.xml`).
- **Deploy:** when ready, stop dev, `npm run build`, then host the `out/` folder on any static host.

## Minor / optional cleanup

- `tailwind.config.ts` still has 3 now-unused color tokens (`mlcv`, `data`, `devops`) - harmless dead config; prune if you want.
- En-dashes (–, e.g. "AWS Solutions Architect – Associate") were left as-is; convert to hyphens too if desired.
