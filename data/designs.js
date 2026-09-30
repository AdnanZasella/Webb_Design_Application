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
    reference: "references/dusk-voyage.png",
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
    reference: "references/bronze-hall.png",
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
    reference: "references/violet-orbit.png",
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
  },
  {
    id: "teal-summit",
    title: "Teal Summit",
    source: null,
    page: "designs/teal-summit/index.html",
    reference: "references/teal-summit.png",
    category: "Cinematic Dark",
    descriptor: "mountain travel x teal light",
    summary: "A near-black page where one glowing turquoise lake colors every heading, so the whole site feels lit by the photograph.",
    images: [
      { file: "images/teal-summit/cover.png", caption: "Hero" },
      { file: "images/teal-summit/full.png", caption: "Full page" }
    ],
    tags: ["near-black ground", "turquoise headings", "hero fades to black", "tall rounded photo cards", "video thumbnail stack", "serif body text"],
    colors: [
      { role: "background", hex: "#050708" },
      { role: "text", hex: "#eef3f2" },
      { role: "muted text", hex: "#9fb0ad" },
      { role: "accent (headings, icons)", hex: "#4fd4c8" }
    ],
    typography: {
      heading: "Montserrat Bold, uppercase, up to 5rem, all headings in the accent turquoise",
      body: "Newsreader serif, small (12-15px), in white or pale grey",
      notes: "Nav and small labels are tiny tracked Montserrat caps. The contrast of geometric sans headings against a serif body is the signature."
    },
    layout: "Full-screen landscape photo with a thin nav, a big headline and intro left, a 01-05 slide counter right, and three short teasers with map-pin icons along the bottom above a hairline. Then a centered turquoise section title, four tall rounded photo cards where the active one lifts and gets a turquoise border, then a dark forest photo with a large headline, a circled play button and a quote at left, and five small video thumbnails stacked in a staircase at right. Social icons close the page.",
    style: "Rounded 8px photo cards with 1px light borders, no shadows. The photograph fades into pure black at the bottom of the hero, and the black continues for the rest of the page. One accent color, used for headings and icons only.",
    bestFor: ["tour operators", "outdoor and adventure brands", "national parks and lodges", "travel photography"],
    notes: "Needs real mountain photography with a strong turquoise or teal tone, because the accent color is sampled from it. The mock uses vector scenery as a stand-in."
  },
  {
    id: "temple-frame",
    title: "Temple Frame",
    source: null,
    page: "designs/temple-frame/index.html",
    reference: "references/temple-frame.png",
    category: "Cinematic Dark",
    descriptor: "device mockup x moody landscape",
    summary: "A single cinematic hero shown inside a rounded screen on a blurred backdrop, with one cyan button as the only bright note.",
    images: [
      { file: "images/temple-frame/cover.png", caption: "Hero" },
      { file: "images/temple-frame/full.png", caption: "Full view" }
    ],
    tags: ["rounded screen frame", "blurred backdrop", "stormy teal-grey photo", "cyan call to action", "glass info card", "stats along the bottom"],
    colors: [
      { role: "frame / deep background", hex: "#1a2230" },
      { role: "text", hex: "#f4f6f7" },
      { role: "muted text", hex: "#c2cacf" },
      { role: "accent", hex: "#20c8ee" }
    ],
    typography: {
      heading: "Montserrat ExtraBold, uppercase, 2-3rem, tracked slightly wide, two lines",
      body: "Montserrat Regular/SemiBold 12-14px",
      notes: "Nav and labels in small tracked uppercase. Numbers in the stats row are bold and larger than their labels."
    },
    layout: "A 16:9 screen with a thick near-black bezel and rounded corners floats on a soft grey blur. Inside: logo and nav top, headline left at mid-height, a circled play button with WATCH MOVIE under it, then one small cyan KNOW MORE button. Right side has a thin vertical slider (01 to 04) and a small glass card with a paragraph. Three stats sit across the bottom, social links bottom left.",
    style: "A dark gradient wash on the left and bottom keeps text readable over the photo. The glass card is semi-transparent with a blur. The cyan is used once per view.",
    bestFor: ["tourism boards", "film and documentary sites", "destination campaigns", "app or landing page showcases"],
    notes: "The framed-screen presentation is also a good way to show a site in a portfolio. Keep the photo moody and low-saturation so the cyan pops."
  },
  {
    id: "krai-wild",
    title: "Krai Wild",
    source: null,
    page: "designs/krai-wild/index.html",
    reference: "references/krai-wild.png",
    category: "Illustrated Bold",
    descriptor: "flat illustration x sunset contrast",
    summary: "A giant blocky wordmark over an orange-and-indigo illustrated landscape, continuing into deep navy sections with bright teardrop icons.",
    images: [
      { file: "images/krai-wild/cover.png", caption: "Hero" },
      { file: "images/krai-wild/full.png", caption: "Full page" }
    ],
    tags: ["illustrated hero", "giant wordmark", "indigo and orange", "navy sections", "teardrop icon cards", "red buttons"],
    colors: [
      { role: "background", hex: "#0d0b4a" },
      { role: "deep section", hex: "#0a0840" },
      { role: "card", hex: "#3d31b8" },
      { role: "card (alt)", hex: "#33279e" },
      { role: "accent red", hex: "#b3261e" },
      { role: "accent orange", hex: "#f59a2e" },
      { role: "text", hex: "#f4f1ff" }
    ],
    typography: {
      heading: "Wordmark in a heavy geometric sans at up to 11rem; section titles in a light, wide grotesk at 2-2.5rem, two lines",
      body: "Clean sans 12-15px in pale lavender",
      notes: "Section numbers like 01 / Range of Activities sit top right over a white rule, with the number in red."
    },
    layout: "Full-bleed illustration hero with transparent nav, huge wordmark left with an asterisk, a short intro and a small white Adventure button. Section one: heading left, index label right, intro paragraph, then three tall purple cards in a staggered row (first larger), each with a numbered corner, a circular-cut illustration, title, blurb and a red Explore button, with arrows at the sides. Section two: the same header pattern and a photo panel that overlaps a larger indigo panel with caption details.",
    style: "Flat shapes with gradients from orange to violet. Each card has a thick colored bottom edge (red, blue, orange). Cards have no radius, just strong color blocks. Buttons are solid red rectangles.",
    bestFor: ["adventure and outdoor events", "festivals and camps", "games and youth brands", "storytelling campaigns"],
    notes: "Needs custom illustration; the mock uses simple vector shapes as stand-ins. Keep the palette to indigo, orange and one red."
  },
  {
    id: "glow-agency",
    title: "Glow Agency",
    source: null,
    page: "designs/glow-agency/index.html",
    reference: "references/glow-agency.png",
    category: "Neon Dark",
    descriptor: "web3 agency x colored glow",
    summary: "Near-black canvas with warm orange and magenta glows, one gradient word in the headline and a tilted ticker strip for energy.",
    images: [
      { file: "images/glow-agency/cover.png", caption: "Hero" },
      { file: "images/glow-agency/full.png", caption: "Full page" }
    ],
    tags: ["near-black ground", "orange-pink glows", "gradient headline word", "tilted ticker strip", "glass stat chips", "white pill buttons"],
    colors: [
      { role: "background", hex: "#0d0c0e" },
      { role: "raised background", hex: "#151316" },
      { role: "text", hex: "#f6f3f7" },
      { role: "muted text", hex: "#b9b2bd" },
      { role: "gradient", hex: "#ff8a2b to #ff4fa0 to #c64bff" }
    ],
    typography: {
      heading: "Manrope/Sora-style geometric sans, 600-700 weight, up to 4.75rem, centered; one word filled with the gradient",
      body: "Same family, 12-15px, soft grey",
      notes: "Stats use bold numerals with a small grey label. The ticker uses medium 17px text with orange sparkle separators."
    },
    layout: "Centered two-line headline over a hero with a 3D-style object in the middle, stat chips on the left, a short line and white pill button on the right. A tilted dark strip runs across the page like a ticker. Then a centered section title, a two-column service block (text and checklist left, illustration right), a four-number band and a row of customer faces.",
    style: "Soft blurred color glows sit behind sections. Chips are translucent with a thin border and blur. Pills are white with dark text. Radius is generous (14px and full pill).",
    bestFor: ["web3 and crypto studios", "design and dev agencies", "SaaS and fintech landing pages", "creative tech portfolios"],
    notes: "The hero object can be any glossy 3D render. Keep glows low in opacity so text stays readable. The ticker pauses for reduced-motion users."
  },
  {
    id: "fernwood-escape",
    title: "Fernwood Escape",
    source: null,
    page: "designs/fernwood-escape/index.html",
    reference: "references/fernwood-escape.png",
    category: "Fresh Light",
    descriptor: "travel booking x organic green",
    summary: "A bright, airy booking site with organic curved photo edges, deep forest green and one warm orange for every action.",
    images: [
      { file: "images/fernwood-escape/cover.png", caption: "Hero" },
      { file: "images/fernwood-escape/full.png", caption: "Full page" }
    ],
    tags: ["off-white ground", "forest green", "orange buttons", "curved photo edge", "floating search bar", "rounded cards"],
    colors: [
      { role: "background", hex: "#f8f8f3" },
      { role: "text", hex: "#14291f" },
      { role: "muted text", hex: "#56675e" },
      { role: "primary green", hex: "#1e4a36" },
      { role: "accent orange", hex: "#f59a30" },
      { role: "soft panel", hex: "#eeeee4" }
    ],
    typography: {
      heading: "Bold serif for the hero (Newsreader here) at 3.4rem with one line underlined in orange; bold sans for section headings",
      body: "Geometric sans 12-15px in dark green-grey",
      notes: "Prices are bold orange. Ratings sit in small dark badges on photos."
    },
    layout: "Logo, pill nav and three round icon buttons on top. A full-width landscape photo with a soft organic white curve at its edges, headline and orange button on the left. A floating white search card overlaps the photo with four fields and a dark Search button. Below: a trust row with four icon items, a Popular Destinations row of four rounded photo cards with rating, name and price, a category icon row, a sand-colored stories panel, a green offer banner, a numbers row and a four-column footer with newsletter.",
    style: "White cards with soft shadows and 14-16px radii. Photos carry a dark bottom gradient for labels. Decorative leaves and flowers overlap the corners.",
    bestFor: ["travel booking sites", "eco lodges and retreats", "tour marketplaces", "outdoor activity platforms"],
    notes: "Works because the photography is bright and natural. Keep orange to buttons and prices only."
  },
  {
    id: "liquid-core",
    title: "Liquid Core",
    source: null,
    page: "designs/liquid-core/index.html",
    reference: "references/liquid-core.png",
    category: "Neon Dark",
    descriptor: "consulting x liquid chrome 3D",
    summary: "Pitch-black pages with huge glossy violet-pink liquid shapes and a wide techno wordmark make a serious firm feel futuristic.",
    images: [
      { file: "images/liquid-core/cover.png", caption: "Hero" },
      { file: "images/liquid-core/full.png", caption: "Full page" }
    ],
    tags: ["black ground", "liquid 3D shapes", "violet-pink glow", "wide techno wordmark", "outlined ghost word", "glass pill nav"],
    colors: [
      { role: "background", hex: "#050208" },
      { role: "text", hex: "#f7f3fb" },
      { role: "muted text", hex: "#b9adc9" },
      { role: "violet", hex: "#8a4dff" },
      { role: "pink", hex: "#ff5fb0" },
      { role: "blue", hex: "#4a5cff" }
    ],
    typography: {
      heading: "Wide extended display face (Michroma here), uppercase, up to 6rem, very few words",
      body: "Clean sans 13-14px in soft lilac-grey; bold short headings at 18-22px",
      notes: "Section names appear as giant outline-only words (stroke, no fill) behind the content."
    },
    layout: "A floating rounded nav bar in translucent grey. Hero has a small WE ARE label, the wordmark, a short paragraph and a dark pill button with a round white phone icon. A big glossy liquid shape fills the right with a violet glow behind it. A row below holds social links, a circular scroll button and arrows. The next section mirrors the layout: a second liquid shape bottom-left, a giant outlined ABOUT word top right, and text on the right.",
    style: "Everything is dark and the shapes provide all the color. Pills and the nav are translucent grey with a hairline border. Gloss is created with gradients and thin white highlight strokes.",
    bestFor: ["consulting firms", "AI and deep-tech companies", "creative studios", "premium software launches"],
    notes: "Needs a real 3D or generated liquid render to match. The mock uses layered gradient shapes as a stand-in."
  }
];
