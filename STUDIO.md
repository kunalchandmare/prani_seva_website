# Edit the studio here

Change [src/content/studio.json](src/content/studio.json), then commit and push `main`.

The live site reads that file from GitHub. Refresh after the push lands. You do not rewrite the page.

## Words, prices, and contact

- Leave a price as `[PRICE]` until you have a real figure.
- Leave `instagram` and `facebook` as `""` until the accounts exist. Use a full `https://` link when you add one.
- Set `phoneIsPlaceholder` to `false` when the telephone number is real.
- Set each testimonial `isPlaceholder` to `false` only for a genuine review.

## Photographs

Each picture is an entry under `images`: `hero`, `calm`, `rescue`, and `hands`.

```json
"hero": {
  "src": "/photos/hero.jpg",
  "alt": "Describe what is actually in the photo."
}
```

`src` is either a file in this website or a full web address.

- Site file: save the picture under `public/` and point `src` at it. `public/photos/hero.jpg` is `"/photos/hero.jpg"`.
- Web address: `"src": "https://example.com/dog.jpg"`. Only `http` and `https` are accepted.

Change `alt` whenever the picture changes. It is the description for someone who cannot see the image.

Replacing a file:

```bash
git add public/photos/hero.jpg src/content/studio.json
git commit -m "Update hero photo"
git push
```

Pushing updates the live site on the next Vercel deploy.
