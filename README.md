# Rizky Aditya Pratama — Portfolio

Personal portfolio of a student frontend developer from Indonesia.

**Live:** https://portfoliorizky.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com) with Vercel Analytics

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Project structure

```
app/
  layout.tsx            Metadata (title template, Open Graph, canonical), fonts, skip link
  page.tsx              Composes the sections + Person JSON-LD
  opengraph-image.tsx   Generated social preview image
  sitemap.ts / robots.ts
  not-found.tsx
components/
  layout/               Header (client: active section + mobile menu), Footer
  sections/             Hero, About, Projects, Contact (server components)
  ScrollProgress.tsx    Reading-progress bar, ref-driven
lib/
  site.ts               All personal content: copy, links, stack, projects
```

## Editing content

Almost everything you would want to change lives in [`lib/site.ts`](lib/site.ts):

- **Links and contact** — `SITE.email`, `SITE.github`, `SITE.instagram`.
- **LinkedIn / CV / school** — fill `SITE.linkedin`, `SITE.cvUrl` and `SITE.school`.
  Matching buttons and rows appear automatically once they are set.
  Put the CV PDF in `public/` and set `cvUrl` to e.g. `"/cv-rizky-aditya-pratama.pdf"`.
- **Projects** — add an object to `PROJECTS`. Each project supports a summary,
  concrete `highlights`, stack tags, live/source links and an optional
  screenshot (`image`, with real `width`/`height`).

## Colors

Design tokens live at the top of [`app/globals.css`](app/globals.css)
(`--canvas`, `--ink`, `--muted`, `--dim`, `--accent`) and are exposed as Tailwind
colors (`bg-canvas`, `text-ink`, `text-muted`, `text-dim`, `bg-accent`, ...).
The accent is intentionally used in only a few places (primary button, active nav
item, availability dot, focus ring, selection). To re-theme the whole site, change
the values in `:root`.

## Notes

- Animations respect `prefers-reduced-motion`.
- The hero photo is served through `next/image`, so it is resized and converted
  to modern formats on Vercel instead of shipping the original file.
- Search/social metadata (title, description, canonical, Open Graph, JSON-LD) is
  generated from `lib/site.ts`, so it stays consistent with the page content.
