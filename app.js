/* Design Library: browse, filter, and hand a design (text + pictures) to a Claude session. */
(() => {
  'use strict';

  const DESIGNS = window.DESIGNS || [];
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const pad = (n) => String(n).padStart(2, '0');

  // Original reference screenshots live in references/ (local only). Show them first when present.
  const refOk = new Set();
  const pics = (d) => (refOk.has(d.id) ? [{ file: d.reference, caption: 'Your original reference' }, ...d.images] : d.images);

  const state = { category: 'All', query: '', savedOnly: false, current: null, imageIndex: 0 };
  const dlg = $('detail');

  /* ---------- saved designs (per-browser convenience) ---------- */
  const loadSaved = () => {
    try { return new Set(JSON.parse(localStorage.getItem('dl.saved') || '[]')); } catch { return new Set(); }
  };
  const saved = loadSaved();
  const persistSaved = () => {
    try { localStorage.setItem('dl.saved', JSON.stringify([...saved])); } catch { /* storage unavailable */ }
  };

  /* ---------- filtering ---------- */
  const haystack = (d) => [d.title, d.descriptor, d.summary, d.category, ...(d.tags || []), ...(d.bestFor || []),
    ...(d.colors || []).map((c) => c.hex + ' ' + c.role)].join(' ').toLowerCase();
  const matches = (d) => {
    if (state.category !== 'All' && d.category !== state.category) return false;
    if (state.savedOnly && !saved.has(d.id)) return false;
    const q = state.query.trim().toLowerCase();
    return !q || q.split(/\s+/).every((w) => haystack(d).includes(w));
  };
  const visible = () => DESIGNS.filter(matches);

  /* ---------- chips ---------- */
  function renderChips() {
    const box = $('chips');
    box.replaceChildren();
    const cats = [...new Set(DESIGNS.map((d) => d.category))];
    const make = (label, count, active, onClick) => {
      const b = el('button', 'chip');
      b.type = 'button';
      b.setAttribute('aria-pressed', String(active));
      b.append(label, Object.assign(el('b'), { textContent: count }));
      b.addEventListener('click', onClick);
      box.append(b);
    };
    make('All', DESIGNS.length, state.category === 'All' && !state.savedOnly, () => { state.category = 'All'; state.savedOnly = false; update(); });
    cats.forEach((c) => make(c, DESIGNS.filter((d) => d.category === c).length, state.category === c,
      () => { state.category = c; state.savedOnly = false; update(); }));
    make('Saved', saved.size, state.savedOnly, () => { state.savedOnly = !state.savedOnly; state.category = 'All'; update(); });
  }

  /* ---------- grid ---------- */
  function renderGrid() {
    const grid = $('grid');
    grid.replaceChildren();
    const list = visible();
    $('empty').hidden = list.length > 0;
    $('count').textContent = list.length === DESIGNS.length
      ? `${DESIGNS.length} designs`
      : `${list.length} of ${DESIGNS.length} designs`;

    list.forEach((d) => {
      const card = el('button', 'card');
      card.type = 'button';
      card.setAttribute('aria-label', `Open ${d.title}`);

      const media = el('div', 'card__media');
      const img = el('img');
      img.src = pics(d)[0].file;
      img.alt = '';
      img.loading = 'lazy';
      media.append(img);

      const body = el('div', 'card__body');
      const head = el('div', 'card__head');
      head.append(el('h2', 'card__title', d.title), el('span', 'card__desc', d.descriptor));

      const tags = el('ul', 'pills');
      (d.tags || []).slice(0, 3).forEach((t) => tags.append(el('li', 'pill', t)));
      if ((d.tags || []).length > 3) tags.append(el('li', 'pill pill--more', `+${d.tags.length - 3}`));

      const foot = el('div', 'card__foot');
      const right = el('span');
      if (saved.has(d.id)) right.append(el('span', 'card__saved', 'saved'));
      right.append(`${pad(DESIGNS.indexOf(d) + 1)} / ${pad(DESIGNS.length)}`);
      foot.append(el('span', 'card__cat', d.category), right);

      body.append(head, tags, foot);
      card.append(media, body);
      card.addEventListener('click', () => openDetail(d.id));
      grid.append(card);
    });
  }

  function update() { renderChips(); renderGrid(); }

  /* ---------- brief text ---------- */
  let rootDir = null; // absolute folder of the library, when known

  function computeRoot() {
    if (location.protocol === 'file:') {
      const p = decodeURIComponent(location.pathname).replace(/^\/([A-Za-z]:)/, '$1');
      rootDir = p.slice(0, p.lastIndexOf('/'));
      return Promise.resolve();
    }
    return fetch('__root').then((r) => (r.ok ? r.text() : null)).then((t) => { if (t) rootDir = t.trim(); }).catch(() => {});
  }

  const imgPath = (file) => (rootDir ? `${rootDir}/${file}`.replace(/\\/g, '/') : file);

  function buildBrief(d) {
    const L = [];
    L.push(`# Design reference: ${d.title}`, '');
    L.push(`Use this as visual inspiration for the website you are building. Look at the images first, then follow the description. Capture the feeling and the system; do not copy the original site's content or branding.`, '');
    L.push('## Images (view these first)');
    pics(d).forEach((im) => L.push(`- ${imgPath(im.file)}${im.caption ? `  (${im.caption})` : ''}`));
    L.push('');
    if (d.page) {
      L.push('## Live mock page', `- ${imgPath(d.page)}  (an original HTML page in this style with placeholder content; open it in a browser or read its source for exact CSS values)`, '');
    }
    L.push('## Feeling', `${d.summary}`, `Mood: ${(d.tags || []).join(', ')}.`, `Style family: ${d.category} (${d.descriptor}).`, '');
    L.push('## Palette');
    (d.colors || []).forEach((c) => L.push(`- ${c.role}: ${c.hex}`));
    L.push('');
    if (d.typography) {
      L.push('## Typography', `- Headings: ${d.typography.heading}`, `- Body: ${d.typography.body}`);
      if (d.typography.notes) L.push(`- Notes: ${d.typography.notes}`);
      L.push('');
    }
    if (d.layout) L.push('## Layout', d.layout, '');
    if (d.style) L.push('## Style details', d.style, '');
    if (d.bestFor && d.bestFor.length) L.push('## Works well for', d.bestFor.join(', '), '');
    if (d.notes) L.push('## Notes', d.notes, '');
    if (d.source) L.push(`Source: ${d.source}`);
    if (d.placeholder) L.push('(Demo entry: illustrative only, no real source.)');
    return L.join('\n').trim() + '\n';
  }

  /* ---------- detail ---------- */
  function setLive(on) {
    const d = state.current;
    const frame = $('d-frame');
    if (on && frame.getAttribute('src') !== d.page) frame.src = d.page;
    if (!on) frame.removeAttribute('src');
    frame.hidden = !on;
    $('d-image').hidden = on;
    $('d-thumbs').hidden = on;
    $('d-caption').hidden = on;
    $('live').setAttribute('aria-pressed', String(on));
    $('live').textContent = on ? 'Screenshots' : 'Live page';
  }

  function setImage(i) {
    const d = state.current;
    state.imageIndex = i;
    const im = pics(d)[i];
    $('d-image').src = im.file;
    $('d-image').alt = `${d.title}: ${im.caption || 'screenshot'}`;
    $('d-caption').textContent = `${im.caption || 'Screenshot'}  ·  ${i + 1} / ${pics(d).length}`;
    [...$('d-thumbs').children].forEach((t, k) => t.setAttribute('aria-current', String(k === i)));
  }

  function renderSpec(d) {
    const spec = $('d-spec');
    spec.replaceChildren();
    const add = (label, content) => {
      const wrap = el('div');
      wrap.append(el('dt', null, label));
      const dd = el('dd');
      if (typeof content === 'string') dd.textContent = content; else dd.append(content);
      wrap.append(dd);
      spec.append(wrap);
    };
    const sw = el('div', 'swatches');
    (d.colors || []).forEach((c) => {
      const s = el('span', 'swatch');
      const chip = el('i');
      chip.style.background = c.hex;
      s.append(chip, `${c.hex} ${c.role}`);
      sw.append(s);
    });
    add('Palette', sw);
    if (d.typography) add('Typography', `${d.typography.heading}. ${d.typography.body}.${d.typography.notes ? ' ' + d.typography.notes : ''}`);
    if (d.layout) add('Layout', d.layout);
    if (d.style) add('Style details', d.style);
    if (d.bestFor) add('Works well for', d.bestFor.join(', '));
    if (d.notes) add('Notes', d.notes);
  }

  function openDetail(id, fromHash) {
    const d = DESIGNS.find((x) => x.id === id);
    if (!d) return;
    state.current = d;
    $('d-title').textContent = d.title;
    $('d-descriptor').textContent = d.descriptor;
    $('d-summary').textContent = d.summary;
    const tags = $('d-tags');
    tags.replaceChildren(...(d.tags || []).map((t) => el('li', 'pill', t)));

    const thumbs = $('d-thumbs');
    thumbs.replaceChildren();
    if (pics(d).length > 1) {
      pics(d).forEach((im, i) => {
        const b = el('button', 'thumb');
        b.type = 'button';
        b.setAttribute('aria-label', `Show ${im.caption || 'image ' + (i + 1)}`);
        const t = el('img');
        t.src = im.file;
        t.alt = '';
        b.append(t);
        b.addEventListener('click', () => setImage(i));
        thumbs.append(b);
      });
    }
    setImage(0);
    $('live').hidden = !d.page;
    const pl = $('page-link');
    pl.hidden = !d.page;
    if (d.page) pl.href = d.page;
    setLive(false);
    renderSpec(d);
    $('d-brief').textContent = buildBrief(d);
    syncFav();

    const src = $('source');
    src.hidden = !d.source;
    if (d.source) src.href = d.source;

    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
    if (!fromHash) history.replaceState(null, '', '#' + id);
    const list = visible();
    $('prev').disabled = $('next').disabled = list.length < 2;
  }

  function step(dir) {
    const list = visible();
    if (list.length < 2) return;
    const i = list.findIndex((x) => x.id === state.current.id);
    openDetail(list[(i + dir + list.length) % list.length].id);
  }

  function closeDetail() {
    if (dlg.open) dlg.close();
  }

  function syncFav() {
    const on = saved.has(state.current.id);
    const b = $('fav');
    b.setAttribute('aria-pressed', String(on));
    b.textContent = on ? 'Saved' : 'Save';
  }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('toast');
    (dlg.open ? dlg : document.body).append(t);
    t.textContent = msg;
    t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('is-on'), 3200);
  }

  /* ---------- clipboard ---------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = el('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      (dlg.open ? dlg : document.body).append(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    }
  }

  async function toPng(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    const bmp = await createImageBitmap(blob.type.includes('svg') ? await svgToBitmapSource(blob) : blob);
    const c = document.createElement('canvas');
    c.width = bmp.width; c.height = bmp.height;
    c.getContext('2d').drawImage(bmp, 0, 0);
    return new Promise((ok, no) => c.toBlob((b) => (b ? ok(b) : no(new Error('encode failed'))), 'image/png'));
  }
  function svgToBitmapSource(blob) {
    return new Promise((ok, no) => {
      const u = URL.createObjectURL(blob);
      const i = new Image();
      i.onload = () => { const c = document.createElement('canvas'); c.width = i.naturalWidth || 1200; c.height = i.naturalHeight || 750; c.getContext('2d').drawImage(i, 0, 0); URL.revokeObjectURL(u); c.toBlob(ok); };
      i.onerror = no;
      i.src = u;
    });
  }

  async function copyImage() {
    const d = state.current;
    const im = pics(d)[state.imageIndex];
    try {
      const png = await toPng(im.file);
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
      toast('Image copied. Paste it into the Claude chat.');
    } catch {
      await copyText(imgPath(im.file));
      toast('Could not copy the picture from here. Its file path was copied instead. Use start.bat for image copy.');
    }
  }

  /* ---------- zip (store-only, no library needed) ---------- */
  const crcTable = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  const crc32 = (u8) => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = crcTable[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };

  function makeZip(files) {
    const enc = new TextEncoder();
    const parts = [], central = [];
    let offset = 0;
    for (const f of files) {
      const name = enc.encode(f.name), crc = crc32(f.data);
      const local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034b50, true); local.setUint16(4, 20, true); local.setUint16(6, 0x0800, true);
      local.setUint32(14, crc, true); local.setUint32(18, f.data.length, true); local.setUint32(22, f.data.length, true);
      local.setUint16(26, name.length, true);
      parts.push(local.buffer, name, f.data);
      const cen = new DataView(new ArrayBuffer(46));
      cen.setUint32(0, 0x02014b50, true); cen.setUint16(4, 20, true); cen.setUint16(6, 20, true); cen.setUint16(8, 0x0800, true);
      cen.setUint32(16, crc, true); cen.setUint32(20, f.data.length, true); cen.setUint32(24, f.data.length, true);
      cen.setUint16(28, name.length, true); cen.setUint32(42, offset, true);
      central.push(cen.buffer, name);
      offset += 30 + name.length + f.data.length;
    }
    const cenSize = central.reduce((s, p) => s + (p.byteLength ?? p.length), 0);
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cenSize, true); end.setUint32(16, offset, true);
    return new Blob([...parts, ...central, end.buffer], { type: 'application/zip' });
  }

  async function downloadZip() {
    const d = state.current;
    const btn = $('zip');
    btn.disabled = true;
    try {
      const enc = new TextEncoder();
      // Inside the zip the images sit next to brief.md, so the brief points at them by relative path.
      const keep = rootDir;
      rootDir = null;
      const names = pics(d).map((im) => im.file.split('/').pop());
      let brief = buildBrief(d);
      pics(d).forEach((im, i) => { brief =brief.replace(im.file, `./images/${names[i]}`); });
      if (d.page) brief = brief.replace(/## Live mock page[\s\S]*?\n\n/, ''); // the page itself is not in the zip
      rootDir = keep;
      const files = [{ name: 'brief.md', data: enc.encode(brief) }];
      for (let i = 0; i < pics(d).length; i++) {
        const res = await fetch(pics(d)[i].file);
        files.push({ name: `images/${names[i]}`, data: new Uint8Array(await res.arrayBuffer()) });
      }
      const url = URL.createObjectURL(makeZip(files));
      const a = el('a');
      a.href = url; a.download = `${d.id}.zip`;
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast(`${d.id}.zip downloaded.`);
    } catch {
      toast('Zip needs the local server. Double-click start.bat, then try again.');
    } finally {
      btn.disabled = false;
    }
  }

  /* ---------- wiring ---------- */
  $('search').addEventListener('input', (e) => { state.query = e.target.value; renderGrid(); });
  $('clear').addEventListener('click', () => { state.category = 'All'; state.query = ''; state.savedOnly = false; $('search').value = ''; update(); });
  $('close').addEventListener('click', closeDetail);
  $('prev').addEventListener('click', () => step(-1));
  $('next').addEventListener('click', () => step(1));
  $('copy-brief').addEventListener('click', async () => {
    toast((await copyText(buildBrief(state.current))) ? 'Brief copied. Paste it, and attach the images it lists.' : 'Copy failed. Select the brief text and copy it by hand.');
  });
  $('copy-image').addEventListener('click', copyImage);
  $('live').addEventListener('click', () => setLive($('d-frame').hidden));
  $('zip').addEventListener('click', downloadZip);
  $('fav').addEventListener('click', () => {
    const id = state.current.id;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    persistSaved(); syncFav(); update();
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) closeDetail(); });
  dlg.addEventListener('close', () => { history.replaceState(null, '', location.pathname + location.search); $('toast').classList.remove('is-on'); document.body.append($('toast')); });
  dlg.addEventListener('keydown', (e) => {
    if (e.target.closest('pre, input, textarea')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
  window.addEventListener('hashchange', () => { const id = location.hash.slice(1); if (id) openDetail(id, true); });

  DESIGNS.filter((d) => d.reference).forEach((d) => {
    const probe = new Image();
    probe.onload = () => { refOk.add(d.id); renderGrid(); };
    probe.src = d.reference;
  });

  computeRoot().then(() => {
    update();
    const id = location.hash.slice(1);
    if (id) openDetail(id, true);
  });
})();
