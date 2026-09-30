/*
  THE LIBRARY
  One object per design. To add a design, copy an entry, drop the screenshots in
  images/<id>/, and fill in the fields. The app needs no other change.
  Entries marked placeholder: true are demo content and have no real source.
*/
window.DESIGNS = [
  {
    id: "quiet-workspace",
    title: "Quiet Workspace",
    placeholder: true,
    source: null,
    category: "Print-Tech Paper",
    descriptor: "warm editorial x print DNA",
    summary: "A calm, paper-toned product page where one illustration carries the whole mood.",
    images: [
      { file: "images/quiet-workspace/cover.svg", caption: "Hero" },
      { file: "images/quiet-workspace/detail.svg", caption: "Feature section" }
    ],
    tags: ["warm paper ground", "serif headline", "single sun illustration", "rust accent", "generous whitespace"],
    colors: [
      { role: "background", hex: "#eef2e6" },
      { role: "text", hex: "#1f2a1f" },
      { role: "accent", hex: "#c2552f" }
    ],
    typography: { heading: "High-contrast serif, medium weight, 76px", body: "Clean sans, 18-24px, 70% opacity", notes: "Second headline line takes the accent color; no italics." },
    layout: "Split hero: text left, illustration right. Thin top nav with one filled button. Three-column feature row below with large flat color blocks.",
    style: "Square corners, no shadows, flat fills. Buttons are solid ink with a matching outline secondary.",
    bestFor: ["writing tools", "wellness", "journals", "thoughtful SaaS"],
    notes: "Works because nothing competes with the illustration. Keep copy short."
  },
  {
    id: "night-ledger",
    title: "Night Ledger",
    placeholder: true,
    source: null,
    category: "Data-as-Texture",
    descriptor: "dark terminal x finance",
    summary: "A near-black data product where charts and monospaced numbers are the decoration.",
    images: [
      { file: "images/night-ledger/cover.svg", caption: "Hero" },
      { file: "images/night-ledger/detail.svg", caption: "Feature section" }
    ],
    tags: ["near-black ground", "mint accent", "monospace numerals", "bar-chart hero", "technical calm"],
    colors: [
      { role: "background", hex: "#0f1412" },
      { role: "text", hex: "#e6efe9" },
      { role: "accent", hex: "#5be3a1" }
    ],
    typography: { heading: "Monospace display, 76px, tight tracking", body: "Monospace 16-24px", notes: "Numbers are tabular and aligned." },
    layout: "Left-aligned headline over a bar-chart illustration on the right. Dense, evenly spaced feature columns.",
    style: "Square corners, hairline borders, no gradients. Accent used only for data and one button.",
    bestFor: ["fintech", "analytics", "developer tools", "AI infrastructure"],
    notes: "Restraint is the point: one accent color, everything else neutral."
  },
  {
    id: "halftone-harbor",
    title: "Halftone Harbor",
    placeholder: true,
    source: null,
    category: "Dither Mono",
    descriptor: "archival print x dot fields",
    summary: "A monochrome dot-field collage that feels like an old nautical print.",
    images: [
      { file: "images/halftone-harbor/cover.svg", caption: "Hero" },
      { file: "images/halftone-harbor/detail.svg", caption: "Feature section" }
    ],
    tags: ["halftone dot texture", "one ink color", "sand paper ground", "archival imagery", "heavy serif"],
    colors: [
      { role: "background", hex: "#e8dfcf" },
      { role: "text / ink", hex: "#1c1814" }
    ],
    typography: { heading: "Bold serif, 76px", body: "Serif 18-24px", notes: "Everything in a single ink color." },
    layout: "Headline left, large dot-field image block right. Sparse nav. Content sections as flat ink-on-sand panels.",
    style: "No color beyond ink and paper. Dot size varies to create tone. Sharp corners.",
    bestFor: ["museums", "craft brands", "publishers", "heritage shops"],
    notes: "Needs a strong photograph converted to halftone; generate it in an image editor."
  },
  {
    id: "sunday-market",
    title: "Sunday Market",
    placeholder: true,
    source: null,
    category: "Illustrated Storybook",
    descriptor: "playful shapes x bright flat color",
    summary: "Friendly overlapping blobs and a warm cream ground make a local shop feel inviting.",
    images: [
      { file: "images/sunday-market/cover.svg", caption: "Hero" },
      { file: "images/sunday-market/detail.svg", caption: "Feature section" }
    ],
    tags: ["cream ground", "flat blob shapes", "coral accent", "friendly sans", "rounded buttons"],
    colors: [
      { role: "background", hex: "#fff3d6" },
      { role: "text", hex: "#2b1d3a" },
      { role: "accent", hex: "#ff6a3d" },
      { role: "support", hex: "#7ad0b4" },
      { role: "support", hex: "#ffc83d" }
    ],
    typography: { heading: "Rounded humanist sans, 76px, medium", body: "Same family, 18-24px", notes: "Warm, casual tone of voice." },
    layout: "Text left, cluster of overlapping circles right. Cards in soft colors below.",
    style: "Flat fills, pill buttons, no outlines. Playful but tidy spacing.",
    bestFor: ["cafes", "kids brands", "local shops", "community events"],
    notes: "Limit the palette to four colors or it gets noisy."
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir",
    placeholder: true,
    source: null,
    category: "Classical Remix",
    descriptor: "luxury dark x gilded frame",
    summary: "A dark, slow luxury page with a thin gold frame that makes every image feel like an exhibit.",
    images: [
      { file: "images/atelier-noir/cover.svg", caption: "Hero" },
      { file: "images/atelier-noir/detail.svg", caption: "Feature section" }
    ],
    tags: ["charcoal ground", "gold hairline", "refined serif", "framed imagery", "slow and quiet"],
    colors: [
      { role: "background", hex: "#14110f" },
      { role: "text", hex: "#f1e7d6" },
      { role: "accent", hex: "#c9a45c" }
    ],
    typography: { heading: "Elegant serif, 76px, regular weight", body: "Serif 18-24px, warm off-white", notes: "Wide letter spacing on small caps labels." },
    layout: "Headline left, single framed image right. Ample empty space. Sections separated by gold hairlines.",
    style: "Thin 1-2px gold rules, no shadows, no rounded corners. Motion should be slow fades only.",
    bestFor: ["fashion", "jewelry", "hotels", "fine dining"],
    notes: "Gold only as lines and small details; never as big fills."
  },
  {
    id: "vast-quiet",
    title: "Vast Quiet",
    placeholder: true,
    source: null,
    category: "Vast Quiet Cinematic",
    descriptor: "layered landscape x cool haze",
    summary: "Cool layered hills and a pale sky give a cinematic feeling of space and silence.",
    images: [
      { file: "images/vast-quiet/cover.svg", caption: "Hero" },
      { file: "images/vast-quiet/detail.svg", caption: "Feature section" }
    ],
    tags: ["cool blue haze", "layered hills", "big empty sky", "serif headline", "cinematic calm"],
    colors: [
      { role: "background", hex: "#d9e2ea" },
      { role: "text", hex: "#14202b" },
      { role: "accent", hex: "#3d6a8f" }
    ],
    typography: { heading: "Classic serif, 76px, regular", body: "Sans 18-24px", notes: "Headline sits high, image fills the lower half." },
    layout: "Full-bleed landscape lower half, headline in the sky above. Minimal nav. Wide single-column sections.",
    style: "Soft tonal layers, no borders, very little UI chrome.",
    bestFor: ["travel", "outdoor brands", "retreats", "photography"],
    notes: "Needs a real photograph or layered illustration with atmospheric depth."
  }
];
