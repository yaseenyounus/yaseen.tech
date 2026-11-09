# yaseen.tech

Personal site of Yaseen Younus, built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

## Editing content

Everything (bio, work, projects, writing, certifications, education, links) lives in
[`src/data/site.ts`](src/data/site.ts). The portrait is `src/assets/yaseen.png`.

## Structure

```
src/
  data/site.ts        # all content
  layouts/Base.astro  # <head>, SEO, analytics
  pages/              # index + 404
  styles/global.css   # colours (light/dark) and base styles
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/pages.yml`.
