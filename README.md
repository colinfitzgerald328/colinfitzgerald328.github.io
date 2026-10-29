# colinfitzgerald328.github.io

Colin FitzGerald's personal site. Astro (static output) with Motion for the hero animation, deployed on Railway.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

- Pages live in `src/pages/`; shared pieces in `src/components/`.
- Posts are Markdown in `src/content/posts/`. Old Jekyll URLs redirect via `astro.config.mjs`.
- The January 2021 training log is data in `src/data/training.ts` (it drives both the hero lanes and `/training/`).
- Images and resume PDFs are served from `public/assets/` at the same URLs the Jekyll site used.
- Railway builds with Railpack and serves `dist/` with Caddy; `Staticfile` turns off SPA fallback so missing pages 404.
