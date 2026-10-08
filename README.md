# Prani-Seva

Ethical dog grooming site for the Berlin studio. Everything you can change without editing the page lives in [src/content/studio.json](src/content/studio.json). The short guide is [STUDIO.md](STUDIO.md).

## Run locally for a quick debug

You need [Node.js 22](https://nodejs.org/) or newer, and [Git LFS](https://git-lfs.com/) so the photographs download.

```bash
git lfs install
git clone https://github.com/kunalchandmare/prani_seva_website.git
cd prani_seva_website
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

Edit `src/content/studio.json`, save, and refresh the browser. Stop the server with Ctrl+C.

## What `studio.json` controls

| Field | What it changes |
|---|---|
| `name`, `city`, `eyebrow`, `announcement`, `motto`, `footer` | Titles and short lines |
| `email`, `phone`, `phoneIsPlaceholder` | Contact. Set `phoneIsPlaceholder` to `false` when the number is real |
| `location`, `hours`, `accessibility`, `cancellation` | Visit details |
| `instagram`, `facebook` | Full `https://` links, or `""` if you do not have them yet |
| `prices` | Service names and amounts. Keep `[PRICE]` until you know the figure |
| `testimonials` | Quotes. Set `isPlaceholder` to `false` only for a real review |
| `images.hero`, `images.calm`, `images.rescue`, `images.hands` | The four photographs and their descriptions |

### Swap a photograph

1. Save the new file in `public/`, for example `public/photos/hero.jpg`. Git LFS tracks `jpg`, `jpeg`, `png`, and `webp`.
2. In `studio.json`, set that image’s `src` to the public path (`"/photos/hero.jpg"`) or to a full `https://` address.
3. Rewrite `alt` so it describes the new picture.
4. Push:

```bash
git add public/photos/hero.jpg src/content/studio.json
git commit -m "Update hero photo"
git push
```

Vercel pulls the Git LFS file and rebuilds. Refresh the live site after that deploy finishes.

## Put the site on the live web

1. Commit and push to the `main` branch.
2. Open [Vercel → Add New Project](https://vercel.com/new) and import `kunalchandmare/prani_seva_website`.
3. Leave the build command as `npm run build`. This repo already has `vercel.json`.
4. Deploy. Each later push to `main` updates the live site.

Check a production build locally before you deploy:

```bash
npm run build
npm run preview
```
