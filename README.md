# All Workers GmbH — Website

A modern, multilingual website for **All Workers GmbH** (Personalbereitstellung &
Arbeitnehmerüberlassung, Wien), built from scratch with **React + Vite + TailwindCSS**.

## Highlights

- **4 languages** — Deutsch (default), English, Italiano, العربية — with full
  **right-to-left (RTL)** support for Arabic. Language choice is remembered in the browser.
- **Industrial-premium design** — dark canvas, safety-amber accent, condensed display type.
- **Real footage** — the "Unsere Arbeit / Our Work" section uses the company's own
  UMC construction-site videos (cutting, pipe & welding work), with a play-in-place lightbox.
- Animated, responsive, accessible; legal pages (Impressum, Datenschutz) included.
- Contact form wired to the existing `formsubmit.co/office@allworkers.at` endpoint.

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

### Single-file preview build (optional)

```bash
npm run build:single   # -> dist-single/index.html (everything inlined into one file)
```

## Project structure

```
public/media/        Optimised images + compressed videos (real UMC footage)
src/
  i18n/              translations.js (DE/EN/IT/AR) + LanguageContext (RTL handling)
  components/        Nav, Hero, Services, Why, Process, Work, Sectors, About, CTA, Footer …
  pages/             Home, Impressum, Datenschutz
  data/media.js      media URL helper
```

## Editing content

All visible text lives in `src/i18n/translations.js`, organised by language and section.
Services, their images and the work-gallery clips are defined at the top of that file
(`SERVICE_KEYS`, `SERVICE_IMAGES`, `WORK_ITEMS`). Contact details are in the `CONTACT` object.

## Media note

The videos in `public/media/` are web-optimised (compressed, muted, looped) versions of the
originals. The full-resolution source files remain in the original repository under
`static/images/` should you ever need them.

## Deployment

`npm run build` produces a static `dist/` folder that can be hosted anywhere
(Cloudflare Pages, Netlify, GitHub Pages, any static host). The site uses hash-based
routing, so no server rewrite rules are required.
