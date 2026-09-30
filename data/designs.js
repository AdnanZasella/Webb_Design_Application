/*
  THE LIBRARY
  One object per design. Each design is an original mock page in designs/<id>/index.html,
  built from a reference screenshot, with made-up content. The pattern and feeling are what matter.

  To add a design: put the page in designs/<id>/, screenshots in images/<id>/,
  then copy an entry below. The app needs no other change.
  Set placeholder: true on demo entries that are not based on a real reference.
*/
window.DESIGNS = [
  {
    id: "dusk-voyage",
    title: "Dusk Voyage",
    source: null,
    page: "designs/dusk-voyage/index.html",
    category: "Cinematic Dark",
    descriptor: "travel x dusk photography",
    summary: "A full-bleed dusk scene fades into a navy page, so the hero image and the page feel like one continuous space.",
    images: [
      { file: "images/dusk-voyage/cover.png", caption: "Hero" },
      { file: "images/dusk-voyage/full.png", caption: "Full page" }
    ],
    tags: ["hero fades into page", "deep navy ground", "rust accent", "condensed caps headline", "night-sky section", "tall photo cards"],
    colors: [
      { role: "background", hex: "#141b25" },
      { role: "deep background", hex: "#0d131b" },
      { role: "text", hex: "#f3efe9" },
      { role: "muted text", hex: "#a9b0ba" },
      { role: "accent", hex: "#c4532b" }
    ],
    typography: {
      heading: "Barlow Condensed Bold, uppercase, up to 8.5rem, tight leading (0.88)",
      body: "Barlow Regular, small (13-16px), muted grey-blue on dark",
      notes: "Tiny tracked uppercase for nav and links. Section title is a short tracked caps label, centered."
    },
    layout: "Hero is a full-width photograph with a thin nav over it, a huge two-line headline left, a slide counter (01-05, active one larger with a line) right, and three short teasers along the bottom above a rust progress line. Below: centered section title, four tall photo cards with a dark gradient at the bottom and a centered caption, then a second full-bleed night-sky section with a large headline left, a play button, and two small video thumbnails bottom right.",
    style: "Square corners, no shadows, no borders. Depth comes from image opacity and gradients that dissolve each photo into the page color. The page color is sampled from the photograph so nothing looks pasted on. Accent rust appears only on the logo dot, the progress line, arrows and hover states.",
    bestFor: ["travel agencies", "tour operators", "hotels and resorts", "outdoor and adventure brands"],
    notes: "The trick is the gradient at the bottom of each photo: it must end exactly on the page background color. Use real photography; the mock uses vector scenery only as a stand-in."
  },
  {
    id: "bronze-hall",
    title: "Bronze Hall",
    source: null,
    page: "designs/bronze-hall/index.html",
    category: "Quiet Luxury",
    descriptor: "architecture portfolio x warm metal",
    summary: "Charcoal panels, hairline columns and one soft bronze accent give an architecture studio a calm, expensive feel.",
    images: [
      { file: "images/bronze-hall/cover.png", caption: "Hero" },
      { file: "images/bronze-hall/full.png", caption: "Full page" }
    ],
    tags: ["charcoal ground", "bronze accent", "vertical column guides", "light condensed caps", "ghost section words", "pill buttons"],
    colors: [
      { role: "background", hex: "#2a2a2b" },
      { role: "raised background", hex: "#242425" },
      { role: "text", hex: "#ece7df" },
      { role: "muted text", hex: "#9b9790" },
      { role: "accent", hex: "#c8a074" }
    ],
    typography: {
      heading: "Barlow Condensed Medium, uppercase, very wide tracking (0.2-0.3em), modest size",
      body: "Barlow Regular 13-15px, muted warm grey",
      notes: "Section titles mix white and bronze words (\"Our PROJECTS\"). Vertical rotated text labels (\"Architecture\") run along the panel edges."
    },
    layout: "A narrow dark rail on the left holds the logo, a bronze slide number and a vertical label; the hero image fills the rest with the title and a pill button right-aligned. Below: a three-column about row (text, specialization list with line icons, an abstract ribbed-facade image), then four full-height project panels side by side with vertical labels and prev/next, a huge image-filled \"12\" with a small caption, a client-name grid, and a contact form block. Faint vertical column lines run through the whole page, and huge near-invisible words (about, projects, clients, contacts) sit behind each section.",
    style: "Square edges on images, fully rounded pill buttons in bronze with dark text. Only one accent. Lots of dark space. Hover lifts the pill slightly and brightens panels.",
    bestFor: ["architects", "interior designers", "creative studios", "high-end real estate"],
    notes: "The gradient-filled number is the one flourish, use an image or bronze gradient inside the digits. Keep the ghost words at about 3% opacity so they never compete with real text."
  },
  {
    id: "violet-orbit",
    title: "Violet Orbit",
    source: null,
    page: "designs/violet-orbit/index.html",
    category: "Neon Space",
    descriptor: "space tech x violet gradient",
    summary: "Deep purple space with gradient triangles, hexagon icons and a dotted planet makes a tech page feel playful and far away.",
    images: [
      { file: "images/violet-orbit/cover.png", caption: "Hero" },
      { file: "images/violet-orbit/full.png", caption: "Full page" }
    ],
    tags: ["violet-pink gradient", "floating triangles", "hexagon icons", "wide-tracked headings", "dotted planet footer", "offset gradient frames"],
    colors: [
      { role: "background", hex: "#3a2a66" },
      { role: "raised background", hex: "#42307a" },
      { role: "nav / dark band", hex: "#2d2052" },
      { role: "text", hex: "#f2eefb" },
      { role: "gradient start", hex: "#8a5cf0" },
      { role: "gradient end", hex: "#c468d6" }
    ],
    typography: {
      heading: "Bold geometric sans uppercase for the hero, Barlow Condensed Bold for feature and frame titles, section labels in extra-wide tracking (0.42em) with the violet-pink gradient",
      body: "Light sans 14-16px in pale lilac",
      notes: "Stat numbers use light weight with very wide tracking."
    },
    layout: "Dark purple nav bar, then a hero with a subject inside a big inverted gradient-outlined triangle on the left and a large title with intro on the right. A 3x2 grid of hexagon badges with icons and short copy follows. The gallery section overlaps two images, the front one with an offset gradient block behind it and arrow buttons below, and the text sits right. Next: text left and a gradient-outlined box with big stacked words (\"Out of the box\") right, a four-number stats band, a contact card with a notched top bar, and a dotted half-planet at the very bottom.",
    style: "Flat shapes with gradient strokes and fills, hexagon clip-paths, thin lilac borders. Small triangles float at the page edges and are cropped by it. Everything stays in one hue family.",
    bestFor: ["tech and SaaS", "space and science", "gaming and events", "startups with a playful tone"],
    notes: "Keep gradient text to section labels only. The dotted planet is a radial-gradient dot pattern masked by an ellipse, no image needed."
  }
];
