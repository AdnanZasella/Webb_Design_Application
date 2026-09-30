# Design Library

A personal library of web design references. I collect designs I like, describe them in a consistent format, and browse them for inspiration when a new client project starts. When I pick one, I hand it to a fresh Claude Code session as a written brief plus the screenshots, so the session understands the look in words and in pictures.

![The library grid](docs/screenshot-library.png)

![A design's detail view with the brief and hand-off buttons](docs/screenshot-detail.png)

> Each design is an original mock page I built from a reference screenshot, with made-up content. The pattern and the feeling are the point, not the copy. The raw reference screenshots stay on my computer.

## What it does

- **Browse** a grid of designs with category filters, live search and a saved list.
- **Open** a design to see its screenshots, palette, typography, layout and style notes, or switch to the live mock page and scroll it.
- **Hand off** a design to another Claude session:
  - *Copy brief* copies a structured markdown brief. It lists the image file paths and tells the session to look at them first.
  - *Copy image* puts the current screenshot on the clipboard, ready to paste into a chat.
  - *Download zip* bundles `brief.md` and the images into one file.
- Works offline. Plain HTML, CSS and JavaScript, no build step, no dependencies.

## Run it

Double-click `index.html` to browse.

For *Copy image* and *Download zip*, start the tiny local server instead. It needs [Node.js](https://nodejs.org) 18 or newer:

```
start.bat            # Windows
node server.mjs      # anywhere
```

It opens <http://localhost:4173>. Use `PORT=4180 node server.mjs` if that port is taken.

## Add a design

1. Drop the reference screenshot in `inbox/` and ask Claude for a new batch. It builds the mock page in `designs/<design-id>/`, screenshots it into `images/<design-id>/`, and writes the entry.
2. Or do it by hand: add the page and images, copy an entry in `data/designs.js`, and reload.

An entry looks like this:

```js
{
  id: "night-ledger",
  title: "Night Ledger",
  source: "https://dribbble.com/shots/...",   // or null
  category: "Data-as-Texture",
  descriptor: "dark terminal x finance",
  summary: "One sentence on the feeling.",
  page: "designs/night-ledger/index.html",   // optional live mock page
  images: [{ file: "images/night-ledger/cover.png", caption: "Hero" }],
  tags: ["near-black ground", "mint accent"],
  colors: [{ role: "background", hex: "#0f1412" }],
  typography: { heading: "...", body: "...", notes: "..." },
  layout: "...",
  style: "...",
  bestFor: ["fintech", "analytics"],
  notes: "..."
}
```


## Project layout

| Path | Purpose |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | The app |
| `data/designs.js` | The library |
| `designs/` | The original mock pages, one folder per design |
| `images/` | Preview screenshots, one folder per design |
| `inbox/` | Drop zone for reference screenshots (kept local, not committed) |
| `fonts/` | Self-hosted fonts for the app and the mock pages |
| `server.mjs`, `start.bat` | Optional local server for image copy and zip |
| `PRODUCT.md` | Who the app is for and what it must do |
| `.claude/` | [Impeccable](https://github.com/pbakaus/impeccable) design skill for Claude Code |

## Design

The interface is a warm paper ground with thin ink borders, serif titles, and monospace for labels and data, so the screenshots stay the loudest thing on the page. It was built and checked with Impeccable, which also provides the anti-pattern detector:

```
npx impeccable detect index.html styles.css app.js
```

## Ideas for later

- Import a Dribbble screenshot and draft the entry automatically.
- Extract the palette from each image.
- Tag a design with the client it was used for.
