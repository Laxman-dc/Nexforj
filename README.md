# Praimo Innovations — Manufacturing Website

A content-rich, image-driven marketing site for a full-service precision
manufacturing company. Built with **React + Vite + Framer Motion**. Warm cream
light theme and a warm charcoal dark theme, real manufacturing photography,
scroll/parallax animations, and every route working out of the box.

## Run it

```bash
npm install
npm run dev      # local dev server (opens http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

To deploy, upload the contents of `dist/` to any static host. The app uses
**HashRouter**, so every page opens correctly on any host — and even when you
open `dist/index.html` directly — with no server rewrite rules needed.

## What's on the site

- **Home** — photographic hero, services, materials, capabilities, process,
  industries, why-us, FAQ and a call-to-action, all with scroll animations.
- **Services** (`/services`) and a detail page for each of the 11 process
  families (`/services/:id`) with a photo banner, full operation list and specs.
- **Materials** (`/materials`) — 50+ material families grouped into metals,
  plastics, composites, rubber, wood, foam and specialty, each rendered in its
  **true finish** (brushed metal, glassy acrylic, woven carbon…). Each family
  has its own page (`/materials/:id`) with grades, properties and processes.
- **Process** (`/process`), **About** (`/about`) and **Order** (`/order`).
- **No pricing anywhere.** Quotes are emailed after an engineer reviews the
  uploaded file. CAD upload lives only on the Order page.

## Swapping in your own photos

All imagery is referenced from one file: **`src/data/images.js`**. The defaults
are license-free Unsplash photos (free for commercial use). To use your own
shop photos, drop files into `public/images/` and replace the URLs, e.g.:

```js
// src/data/images.js
export const serviceImages = {
  cutting: '/images/laser-cutting.jpg',
  'cnc-machining': '/images/cnc.jpg',
  // …
}
```

That's the only file you need to touch for images.

## Adding / removing materials & services

Everything is data-driven — no layout edits required:

- **Materials** → `src/data/materials.js`. Add an object to `materials` with an
  `id`, `group`, `name`, `blurb`, `grades`, `model` (finish color), `specs` and
  `processes`. The swatch finish is generated from `model.color` / `metalness` /
  `transmission` / `weave`.
- **Services** → `src/data/services.js`. Add an object with `id`, `name`,
  `tagline`, `description`, `specs` and `groups`. Map a photo for it in
  `src/data/images.js`.
- **Navigation / copy** → `src/data/navigation.js` and `src/data/content.js`.

## Theming

Colors live in `src/styles/tokens.css` as CSS variables, with a light (cream)
and dark (warm charcoal) palette. The brand blue accent is used sparingly with
an ember highlight for warmth. The header has a light/dark toggle.

## Tech

React 18 · Vite 5 · React Router 6 (HashRouter) · Framer Motion · lucide-react.
No 3D dependencies — the site uses real photography and CSS material finishes.
