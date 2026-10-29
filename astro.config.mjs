import { defineConfig } from "astro/config";

// Old Jekyll URLs (permalink /:categories/:title/), kept alive as redirects so existing links still land.
const oldPosts = {
  "/tutorial/nba-statistics-project/": "nba-statistics-project",
  "/data science/collegiate-running-data/": "collegiate-running-data",
  "/econ/socialforces/": "social-forces",
  "/data science/PricklyPearInvitational/": "prickly-pear-invitational",
  "/econ/blackscholes/": "black-scholes",
  "/running/threshold-development/": "threshold-development",
  "/data science/datasciencerunning/": "running-form",
  "/data science/pinned/tfrrs-table-generator/": "tfrrs-table-generator",
  "/economics/pinned/behavioral-essay/": "behavioral-economics",
};

export default defineConfig({
  site: "https://colinfitzgerald328.github.io",
  trailingSlash: "ignore",
  redirects: {
    ...Object.fromEntries(Object.entries(oldPosts).map(([from, slug]) => [from, `/writing/${slug}/`])),
    "/blog/": "/writing/",
    "/about/": "/#story",
    "/portfolio/": "/#photos",
  },
  markdown: {
    shikiConfig: { theme: "github-light" },
  },
});
