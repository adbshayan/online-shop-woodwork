# online-shop-woodwork

Website for **CHUBIN** (placeholder name) — a Tehran atelier making bespoke solid-wood
furniture. Client project.

## Current stage: bilingual showcase

`index.html` is a **self-contained, bilingual (Farsi / English) showcase site** — a strong
first-impression brand page with a prominent contact section, serving both **retail
customers** and **wholesale / trade buyers**.

- **Languages:** Farsi (default, RTL) + English, via a header toggle that switches text,
  direction, and fonts.
- **Design:** warm contemporary-luxury identity — Fraunces (EN display) + Vazirmatn (FA),
  warm neutral palette with restrained brass, editorial layout, real photography.
- **Self-contained:** fonts and images are inlined (data URIs), so the file runs anywhere
  with no build step or external requests. Just open it in a browser.
- **Photography is placeholder** art direction, to be replaced by the client's shoot.

## Preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Roadmap

Planned evolution to a **Next.js + Payload CMS** app (Farsi-first, self-hostable on an
Iran-reachable host such as Liara) so the client can self-manage content. See the project
plan for details.
