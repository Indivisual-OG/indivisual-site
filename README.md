# indivisual.art — website

A simple, fast, no-backend-needed portfolio site. Every artwork gets its own
page with the finished image plus a "process" gallery (sketches, WIP shots,
etc.), all navigable from a filterable homepage grid.

It's plain HTML/CSS/JavaScript — **no build step, no server, no database.**
You manage content by (1) dropping image files into folders and (2) editing
one plain-text JavaScript file that lists your artworks. Anyone who can edit
a text file and use drag-and-drop can maintain this.

---

## 1. Folder structure

```
indivisual-site/
├── index.html              ← homepage (gallery grid)
├── art.html                ← template for a single artwork's page
├── CNAME                   ← tells GitHub Pages this site is indivisual.art
├── .github/workflows/
│   └── deploy.yml          ← auto-publishes to GitHub Pages on every push
├── .gitignore / .gitattributes  ← housekeeping, no need to touch
├── assets/
│   ├── css/style.css       ← all styling
│   ├── js/
│   │   ├── data.js         ← *** THE FILE YOU EDIT TO ADD ARTWORK ***
│   │   ├── gallery.js      ← renders the homepage (no need to touch)
│   │   ├── art.js          ← renders a single artwork page (no need to touch)
│   │   └── lightbox.js     ← click-to-zoom image viewer (no need to touch)
│   └── img/favicon.png
└── art/
    ├── sample-cosmic-drift/       ← one folder per artwork
    │   ├── cover.jpg              ← the finished piece
    │   ├── thumb.jpg              ← (optional) smaller image for the grid
    │   └── process/
    │       ├── 01.jpg
    │       ├── 02.jpg
    │       ├── 03.jpg
    │       └── 04.jpg
    └── sample-neon-forest/
        └── ... same pattern
```

Two example/placeholder artworks ("Cosmic Drift" and "Neon Forest") are
included so you can see exactly how it fits together. Replace them with your
own.

---

## 2. Adding a new artwork (your regular workflow)

1. **Make a folder** under `/art/` named after the piece, using lowercase
   letters and dashes, e.g. `/art/blue-hour-portrait/`.
2. **Add the finished image** into that folder as `cover.jpg`.
   - Recommended: resize so the longest side is around 2000px, and export
     at ~80–85% JPEG quality. This keeps pages fast to load. Free tool:
     [squoosh.app](https://squoosh.app) (drag & drop, resize + compress,
     download) — no install needed.
   - Optionally also save a smaller copy as `thumb.jpg` (~900px wide) — this
     is what shows in the homepage grid and loads faster. If you skip this,
     `cover.jpg` is used automatically.
3. **Add a `process/` subfolder** and drop in your work-in-progress images,
   named so they sort in the order you want them viewed: `01.jpg`, `02.jpg`,
   `03.jpg`, etc. These can be phone photos of sketches, screen recordings
   exported as stills, screenshots of undo history, whatever you have.
4. **Open `assets/js/data.js`** in any text editor (Notepad, VS Code,
   TextEdit — even editing directly on GitHub.com works). Copy one of the
   existing entries in the `ARTWORKS` list, paste it, and edit the fields:

   ```js
   {
     slug: "blue-hour-portrait",
     title: "Blue Hour Portrait",
     date: "2026-08-01",
     medium: "Digital painting",
     tags: ["digital", "portrait"],
     description: "A short paragraph about the piece — inspiration, tools, story.",
     cover: "art/blue-hour-portrait/cover.jpg",
     thumb: "art/blue-hour-portrait/thumb.jpg",
     process: [
       { src: "art/blue-hour-portrait/process/01.jpg", caption: "Initial sketch." },
       { src: "art/blue-hour-portrait/process/02.jpg", caption: "Color blocking." }
     ]
   }
   ```

   > **Note:** as your gallery grows, consider hosting images on Cloudinary
   > instead of committing them to this repo, to keep it small — see
   > section 5 below. The `cover`/`thumb`/`src` fields work exactly the same
   > either way; they just become full `https://...` URLs instead of local
   > paths, e.g. `cover: "https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto/blue-hour-portrait/cover.jpg"`.

5. **Save, then upload/deploy** (see below). That's it — the homepage grid,
   filters, and the new artwork's page are generated automatically from this
   one entry. No other files need to change.

To remove a piece, delete its object from `ARTWORKS` (and optionally delete
its folder). To reorder, don't worry — pieces are automatically sorted
newest-first by the `date` field.

---

## 3. Try it locally before publishing

Since the site uses `fetch`-free, plain `<script>` includes, you can even
just double-click `index.html` to open it in a browser directly. But to be
safe (some browsers restrict local file access), it's better to preview with
a tiny local server:

```bash
cd indivisual-site
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

If you don't have Python, any static server works, e.g. with Node:

```bash
npx serve .
```

---

## 4. Publishing it to indivisual.art

You already own the domain — you just need static file hosting and to point
the domain at it. Two easy, free options:

### Option A — Netlify (easiest, no command line needed)

1. Go to [netlify.com](https://www.netlify.com) and create a free account.
2. On your dashboard, drag and drop the whole `indivisual-site` folder onto
   the "Deploy manually" / "Sites" area. Netlify uploads it and gives you a
   temporary URL like `random-name-123.netlify.app` — check it works.
3. Go to **Site settings → Domain management → Add a custom domain**, enter
   `indivisual.art`.
4. Netlify will show you DNS records to add. Go to wherever you registered
   `indivisual.art` (e.g., Namecheap, GoDaddy, Google Domains, Porkbun) and
   in its DNS settings add the records Netlify gives you (typically an
   **A record** pointing to Netlify's IP for the root domain, and/or a
   **CNAME record** for `www`). This can take a few minutes up to a few
   hours to fully propagate.
5. Netlify auto-provisions a free HTTPS certificate once DNS is verified.
6. **To update content later:** edit `data.js`/add images locally, then
   re-drag the folder onto Netlify (or, better, connect Netlify to a GitHub
   repo — see Option B — so it redeploys automatically on every push).

### Option B — GitHub Pages (best if you're open to using Git)

This repo is already fully set up for this — it's a git repository with a
`CNAME` file (pre-filled with `indivisual.art`) and a GitHub Actions workflow
at `.github/workflows/deploy.yml` that automatically builds and publishes
the site to Pages on every push to `main`. You just need to create the
GitHub repo and push to it once.

**One-time setup:**

1. Create a free GitHub account if you don't have one.
2. Create a new **empty** repository (no README/license) at
   [github.com/new](https://github.com/new), e.g. named `indivisual-site`.
   It can be public or private — GitHub Pages works with either on a free
   account.
3. From inside this project folder, run:
   ```bash
   git remote add origin https://github.com/<your-username>/indivisual-site.git
   git push -u origin main
   ```
   (This folder is already initialized as a git repo with everything
   committed, so this just connects it to GitHub and uploads it.)
4. On GitHub, go to your repo's **Settings → Pages**, and under "Build and
   deployment → Source" choose **GitHub Actions** (not "Deploy from a
   branch"). The workflow will run automatically after your push and
   publish the site — check the **Actions** tab to watch it deploy the
   first time (takes about a minute).
5. Still in **Settings → Pages**, under "Custom domain" enter
   `indivisual.art` and save (this reads from/updates the `CNAME` file).
6. At your domain registrar's DNS settings, add these records for the apex
   domain:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```
   and, if you also want `www.indivisual.art` to work:
   ```
   CNAME www   <your-username>.github.io
   ```
   DNS changes can take anywhere from a few minutes to a few hours to take
   effect.
7. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes
   available (GitHub provisions a free certificate automatically once DNS
   is verified).

**From then on, updating the site is just:**

```bash
git add -A
git commit -m "Add new piece: <title>"
git push
```

The Actions workflow re-runs automatically and the live site updates within
about a minute — no manual redeploying, no dashboard, no dragging folders.
You can watch each deploy under the repo's **Actions** tab, and every past
version of the site is preserved in the git history.

*(Vercel works essentially the same way as Netlify, if you prefer it.)*

### Which should you pick?

- Want the simplest possible workflow with drag-and-drop updates? **Netlify.**
- Comfortable with (or want to learn) Git, and want a permanent version
  history of every artwork you add? **GitHub Pages** (and you get a free
  backup of everything in the repo).

---

## 5. Keeping the git repo small: hosting images on Cloudinary

Committing every JPG straight into this repo works fine at first, but GitHub
recommends repos stay under ~1GB and starts warning/blocking well before
that if a lot of high-res art (plus all their process shots) piles up. The
fix: host the images somewhere else, and just point `data.js` at the URLs.
**No code changes are needed for this** — every image field in `data.js`
(`cover`, `thumb`, `process[].src`) is used as a plain `<img src="...">`, so
it doesn't matter whether that's a local path or a full external URL.

[Cloudinary](https://cloudinary.com) is a good fit: it has a generous free
tier (25GB storage + 25GB bandwidth/month), a simple drag-and-drop web
dashboard (no command line needed), and it can automatically optimize/resize
images on the fly via the URL itself.

**One-time setup:**

1. Create a free account at [cloudinary.com](https://cloudinary.com).
2. In the Media Library, create a folder per artwork to keep things tidy,
   matching your `art/<slug>/` naming, e.g. a folder named
   `blue-hour-portrait`.
3. Drag and drop `cover.jpg`, `thumb.jpg`, and the `process/*.jpg` images
   for that piece into the folder.

**Getting the URL for `data.js`:**

1. Click any uploaded image in the Media Library and copy its URL — it'll
   look like:
   ```
   https://res.cloudinary.com/<your-cloud-name>/image/upload/v1699999999/blue-hour-portrait/cover.jpg
   ```
2. Optional but recommended: insert `f_auto,q_auto` right after `/upload/`
   to let Cloudinary automatically serve the best format/compression for
   each visitor's browser:
   ```
   https://res.cloudinary.com/<your-cloud-name>/image/upload/f_auto,q_auto/blue-hour-portrait/cover.jpg
   ```
   You can also resize on the fly by adding e.g. `w_1600` (max width 1600px)
   into that same comma-separated list — handy for `thumb` to keep the
   gallery grid fast: `f_auto,q_auto,w_900`.
3. Paste the resulting URL directly into the matching field:

   ```js
   {
     slug: "blue-hour-portrait",
     title: "Blue Hour Portrait",
     date: "2026-08-01",
     medium: "Digital painting",
     tags: ["digital", "portrait"],
     description: "A short paragraph about the piece.",
     cover: "https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto/blue-hour-portrait/cover.jpg",
     thumb: "https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto,w_900/blue-hour-portrait/thumb.jpg",
     process: [
       { src: "https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto/blue-hour-portrait/process/01.jpg", caption: "Initial sketch." },
       { src: "https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto/blue-hour-portrait/process/02.jpg", caption: "Color blocking." }
     ]
   }
   ```

4. Commit and push `data.js` as usual — since there are no image files to
   add, this commit stays tiny no matter how many pieces you add.

**Mixing both approaches is totally fine** — e.g. keep the two sample
pieces as local files, and use Cloudinary URLs for everything new. Nothing
elsewhere in the site needs to know or care which each artwork uses.

> If you'd rather not create folders manually in the dashboard for every
> single piece, you can also just drop everything into one Cloudinary
> folder and rely on distinct filenames (e.g. `blue-hour-portrait-cover.jpg`)
> — whichever is easier for your workflow.

---

## 6. Notes, tips & optional extras

- **Image sizes:** Instagram compresses images a lot; if you have the
  original higher-res files from your drawing software, use those for
  `cover.jpg` instead of an Instagram export — it'll look noticeably sharper.
- **Captions on process shots** are optional but recommended (they show
  under each thumbnail and in the lightbox) — a sentence like "second
  color pass, adjusted lighting" adds a lot for viewers.
- **Tags/filters:** whatever tags you type into `tags: [...]` automatically
  appear as filter buttons on the homepage — no extra setup.
- **Instagram link:** both the header and each artwork page link to
  `https://www.instagram.com/artbiyindivisual/` — update this in
  `index.html` / `art.html` if your handle changes.
- **Video process clips:** if you ever want to show a timelapse video
  instead of just stills, this structure can be extended to support an
  `<video>` alongside the `process` images — ask and it can be added.
- **No CMS/login is included** by design, since you're the only content
  editor and a text file is simpler and free forever. If down the road you
  want a phone-friendly upload form instead of editing `data.js` by hand,
  that's a reasonable v2 (e.g., a small Netlify CMS / Git-based admin UI) —
  happy to add it on request.
