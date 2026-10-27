# Personal homepage

Personal website https://ozana.cz

# Technologies 

- [Astro](https://astro.build/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Install & run

```bash
pnpm install && pnpm dev      # local dev server
pnpm build && pnpm preview    # production build + preview
```


## Resources

- [Astro](https://astro.build/)
- [Lucide Icons](https://lucide.dev/)

# Deployment

Production is deployed by GitHub Actions (`.github/workflows/deploy.yml`), not by Vercel's Git
integration: on every push to `main`, every Monday at 05:00 UTC (to refresh GitHub stars, Zdroják
articles and years of experience) and by hand via *Run workflow*. Pull requests and other branches
get a preview deployment.

The workflow runs `vercel build`, prints `/resume/` from that build to `cv.pdf` with Playwright
(`bin/cv.mjs`, driving the Google Chrome preinstalled on the runner) and ships it with `vercel deploy --prebuilt`. `cv.pdf` is not in the repository;
`make resume` generates it locally.

Repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

# Environment variables

- `GITHUB_TOKEN` - GitHub [personal access token](https://github.com/settings/personal-access-tokens),
  used locally for the repository cards; in CI the workflow's own token is used