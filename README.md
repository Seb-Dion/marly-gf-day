# marly-gf-day 💗

A little website made for Marly, for National Girlfriend's Day (August 1st).
Built with React + Vite.

The page is one thing: a Sonny Angel blind box you **hold** to open. Holding
charges a ring, the box shakes harder as it fills, then bursts and reveals one
of 6 photos — weighted across common / rare / legendary. All 6 possible pulls
and their rarities are shown in the lineup below the box.

## Developing

```sh
npm install
npm run dev
```

## The photos

`src/assets/picks/pick-1..6.jpg` are web-optimized (max 1400px, ~250 KB each).
The full-size originals live in `originals/`, which is gitignored.

To swap or reweight a pull, edit `src/components/BlindBox/collectibles.js` —
each entry is `{ id, src, rarity }`, and rarity drives the draw weight
(common 10, rare 5, legendary 3). Current odds: commons ~23% each, rares ~12%
each, legendary ~7%.

Regenerate an optimized copy with:

```sh
sips --resampleHeightWidthMax 1400 -s format jpeg -s formatOptions 78 \
  originals/YOUR.jpg --out src/assets/picks/pick-N.jpg
```

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
