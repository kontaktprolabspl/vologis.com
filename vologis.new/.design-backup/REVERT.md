# Design backup — homepage redesign (2026-06-03)

This folder is a manual restore point created **before** the reference-driven
homepage redesign. It lives outside `src/`, so Astro ignores it.

## What changed in the redesign
- `src/pages/pl/index.astro` — fully rewritten (eyebrows, icon cards, navy
  process band, big stat numbers, testimonial card, gradient CTA).
- `src/styles/global.css` — **additive only**: new tokens (radius, shadows,
  gradients, blue-tint surfaces). The old homepage doesn't use them, so they
  are harmless to keep even after a revert.

## To revert the homepage to the pre-redesign version
Restore the original page from this folder:

```bash
cp .design-backup/index.astro src/pages/pl/index.astro
```

That's the whole rollback — the original homepage uses only tokens that already
existed, so no other file needs touching.

## Note
There are **no git commits** in this repo yet (git root is `/Users/michal/Claude`),
so this file-based backup is the restore point. Once you're happy with a version,
ask me to set up a proper git baseline for cleaner versioning going forward.
