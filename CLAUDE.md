# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Rosary — a bilingual (Farsi/English, RTL-default) single-page showcase site for a
solid-wood furniture atelier. Everything lives in `index.html` (self-contained:
fonts and most images are inlined as base64). Product photos for the catalog are
referenced as files under `assets/products/`.

## Preview artifact — one canonical URL (IMPORTANT)

The website preview is published as a Claude Artifact at ONE permanent URL:

**https://claude.ai/code/artifact/aa16b3cf-e215-4f25-9720-8ceb39cf3640**

**Rule:** Whenever the user asks to preview or update "the site" / "the artifact",
update THIS artifact in place — pass its URL as the Artifact tool's `url`
parameter. Do **not** publish without `url`; that mints a brand-new link and
breaks the user's bookmark (the exact thing they do not want). If the URL ever
seems wrong, use the Artifact tool's `action: "list"` to find the existing
Rosary artifact and reuse it instead of creating a new one. Keep the favicon 🪵
stable across updates.

### How to regenerate the preview

Artifacts run under a strict CSP that blocks external files, so the preview must
be a **self-contained** copy with every product image inlined:

1. Make site changes in `index.html` (and `assets/products/` as needed).
2. Build a self-contained copy: base64-encode each `assets/products/*.jpg` into an
   `IMG` map and have the product switcher script use `IMG[slug]` instead of the
   `assets/products/<slug>.jpg` file path. (The scratchpad copy is disposable and
   gets wiped between turns — always regenerate it from `index.html`.)
3. Publish that file with the Artifact tool, passing the canonical `url` above.

## Products section

- One card per product model (7 total). Each card has clickable colour swatches
  and, where sizes exist, size buttons — both swap the product photo to the
  matching variant. Logic lives in the "colour + size variant switcher" script.
- Only colours that have a real single-product photo are shown as swatches.
- Cards are generated from a `PRODUCTS` data array and must stay bilingual/RTL:
  set `data-en`/`data-fa` on text nodes so the existing `apply(lang)` toggle
  picks them up. The product script must run BEFORE the main language IIFE.

## Git workflow (IMPORTANT)

- **Commit and push all work** — after making changes, commit them and push, so
  nothing is left only in the working tree. This is standing authorization for
  this repo; no need to ask each time.
- **Only ever push to a branch — never to `main`.** If the current branch is
  `main`, create a feature branch first (e.g. `feature/<short-name>`) and push
  that. Never run `git push` (or force-push) against `main`.
- Open a PR from the branch when appropriate; let the user do the merge to `main`.

## Conventions

- Keep the site self-contained and Farsi-first (RTL default before first paint).
- Persian text requires the `<meta charset="utf-8">` at the top of `index.html`.
- Commit deliverables to the repo; the scratchpad is wiped between turns.
