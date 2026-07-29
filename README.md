# marly-gf-day 💗

A little website made for Marly, for National Girlfriend's Day (August 1st).
Built with React + Vite. Features a photo gallery and a "blind box"
gacha-style opener with 9 personalized collectibles across 3 rarity tiers.

## Developing

```sh
npm install
npm run dev
```

## Adding real photos

Drop files into `public/photos/` using the filenames listed in
`public/photos/README.md`. Placeholders show automatically until then.

## Writing your note

Edit the placeholder paragraph in `src/components/Note.jsx` before sharing
the site.

## Deploying

Pushing to `main` automatically builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. Enable Pages once under the repo's
**Settings → Pages → Source: GitHub Actions**.

### Using a custom domain later

1. Buy the domain.
2. Add a `public/CNAME` file containing just the domain (e.g. `marly.love`).
3. Point the domain's DNS at GitHub Pages (an `A` record to GitHub's IPs, or
   a `CNAME` record to `<your-username>.github.io` for a subdomain).
4. Add the domain under **Settings → Pages → Custom domain** in the repo.
