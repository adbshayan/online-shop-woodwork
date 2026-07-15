// @ts-check
import { defineConfig } from 'astro/config';

// Rosary — static, self-contained bilingual (fa-default, RTL) showcase site.
export default defineConfig({
  // Farsi-first, quirks-mode-free: Astro emits a doctype (standards mode).
  // Compress HTML but keep the output a plain static site.
  compressHTML: true,
});
