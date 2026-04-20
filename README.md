# Charles yapping zone

Personal portfolio + blog built with Astro for GitHub Pages. The site is dark-only, markdown-driven, and intentionally simple to maintain by hand.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Edit content

- Site-wide text, social links, and homepage/about metadata live in `src/config/site.ts`.
- Blog posts live in `src/data/blog/*.md`.
- Shared layout, navigation, footer, and SEO components live in `src/components` and `src/layouts`.
- Global styling is in `src/styles/global.css`.

## Deploy to GitHub Pages

1. Push the repo to GitHub.
2. In the repository settings, enable GitHub Pages and set the source to GitHub Actions.
3. Push to `main` to trigger `.github/workflows/deploy.yml`.

The Astro config derives the correct GitHub Pages base path automatically for both `username.github.io` repos and project repos. If you later use a custom domain, set `SITE_URL` in the workflow or environment to your final production URL.
