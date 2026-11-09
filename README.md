# yaseen.tech

Personal site of Yaseen Younus, built with [Astro](https://astro.build).

- `/` is the main site: hero, about, career pipeline, selected work, certifications, writing and contact.
- `/architecture` shows the same career as an interactive cloud architecture diagram (click any node to inspect it).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

## Editing content

Everything (intro, experience, projects, certifications, writing, links) lives in
[`src/data/site.ts`](src/data/site.ts). Certification badges are in `src/assets/certs/` (referenced by file name)
and the portrait is `src/assets/yaseen.png`.

## Structure

```
src/
  data/site.ts        # all content
  layouts/Base.astro  # <head>, SEO, analytics
  components/         # Header, Diagram (the /architecture page), Icon
  pages/              # index, architecture, 404
  styles/global.css   # design tokens (colours, fonts, accent) and shared styles
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/pages.yml`.
