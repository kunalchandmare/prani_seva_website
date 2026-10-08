# Prani-Seva

Ethical dog grooming site for the Berlin studio. Studio details (name, hours, prices, phone, email, social links) live in [src/content/studio.json](src/content/studio.json). See [STUDIO.md](STUDIO.md).

## Run locally for a quick debug

You need [Node.js 22](https://nodejs.org/) or newer.

```bash
git clone https://github.com/kunalchandmare/prani_seva_website.git
cd prani_seva_website
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

Edit `src/content/studio.json`, save, and refresh the browser. Stop the server with Ctrl+C.

Check the production build before you deploy:

```bash
npm run build
npm run preview
```

Preview serves the built site. The dev server on port 8080 is the one to use while you are changing the page.

## Put the same site on the live web

1. Commit and push to the `main` branch of this repository.
2. Open [Vercel → Add New Project](https://vercel.com/new) and import `kunalchandmare/prani_seva_website`.
3. Leave the build command as `npm run build`. This repo already has `vercel.json`.
4. Deploy. Vercel gives you a public URL.
5. After that, every `git push` to `main` updates the live site.

Photographs are included. `npm run dev` and `npm run build` unpack them into `public/photos` before the site starts. After this is on `main`, Vercel rebuilds and the pictures show on the live site. If they stay blank, open the Vercel project and click Redeploy.
