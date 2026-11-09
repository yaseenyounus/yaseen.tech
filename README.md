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

Everything — profile, experience, education, certifications, projects, posts and social links — lives in
[`src/data/site.ts`](src/data/site.ts). Certification badge images are in `src/assets/certs/` (referenced by file name),
and the portrait is `src/assets/yaseen.png`.

## Structure

```
src/
  data/site.ts        # all content
  layouts/Base.astro  # <head>, SEO, analytics, background, scroll-reveal
  components/         # Nav, Hero, Bento, Experience, Certs, Work, Contact, Icon
  pages/              # index + 404
  styles/global.css   # design tokens & shared styles
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/pages.yml`.
