# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Rosary — a bilingual (Farsi/English, RTL-default) showcase site for a solid-wood
furniture atelier, built with **Astro** (static output). Farsi-first: the page
renders RTL-by-content before first paint.

The site was migrated from a single self-contained `index.html` to an Astro
component structure (see git history for the original file). Fonts are still
inlined as base64 in the CSS; hero/craft/quote/trade images and product photos are
served as files under `public/assets/`.

## Structure

```
src/
  data/products.ts        # COLORS, SIZES, PRODUCTS (typed) — the catalog
  layouts/Base.astro      # document shell; pre-paint is:inline lang/theme scripts
  components/
    Nav, Hero, Craft, Quote, Products, ProductCard, Trade, Contact, Footer, Logo
  scripts/site.ts         # language toggle, theme, sticky/auto-hide header,
                          # reveal-on-scroll, demo contact form
  styles/global.css       # all site CSS (incl. base64 @font-face), verbatim
  pages/index.astro       # composes the section components
public/assets/products/*.jpg   # 22 product variant photos, at /assets/products/
public/assets/img/*.jpg        # hero/craft/quote/trade images
```

## Preview

Local only — `npm run dev` (hot-reload at http://localhost:4321). There is **no**
Claude Artifact preview anymore; the old canonical-URL artifact was retired during
the Astro migration. If a shareable link is wanted later, do a static deploy
(GitHub Pages / Netlify / Vercel) from `npm run build` (`dist/`).

## Products section

- One card per product model. Colour swatches swap the product photo; sizes
  (where present) are informational, non-interactive tags.
- Cards are server-rendered from `PRODUCTS` (`src/data/products.ts`) via
  `ProductCard.astro`, in their default-colour state. Each swatch carries
  `data-src` / `data-alt` / `data-c-en` / `data-c-fa`; the small client script in
  `Products.astro` wires clicks to switch the photo (multi-colour cards only).
- Keep everything bilingual/RTL: put `data-en`/`data-fa` on text nodes so
  `apply(lang)` in `site.ts` swaps them. Do **not** put `data-en`/`data-fa` on the
  swatch buttons — `apply()` would overwrite their content; use the `data-c-*`
  attributes instead.

## RTL / layout notes

- The composition is frozen LTR (`.wrap` gets `dir="ltr"` at runtime); only text
  swaps between languages, so the layout never mirrors. Never put `dir` on
  `<html>`/`<body>`.
- Astro emits a doctype, so the site runs in **standards mode** (the original was
  quirks mode). This is verified to produce no horizontal overflow in either
  language; the CSS is safe because of `box-sizing:border-box`, frozen-LTR `.wrap`,
  and no `overflow-x` on `html`/`body`. Do not add `overflow-x` to the body.

## Git workflow (IMPORTANT)

- **Commit and push all work** — after making changes, commit and push so nothing
  is left only in the working tree. Standing authorization; no need to ask.
- **Only ever push to a branch — never to `main`.** If on `main`, create a feature
  branch first. Never `git push` (or force-push) against `main`.
- Open a PR from the branch when appropriate; let the user merge to `main`.

## Conventions

- Farsi-first (RTL-by-content before first paint); keep `<meta charset="utf-8">`
  first in `Base.astro`'s `<head>` for Persian text.
- The pre-paint lang/theme scripts must stay `is:inline` so they run before paint.
- Commit deliverables to the repo; the scratchpad is wiped between turns.
