// Tiny static server for the Design Library. No dependencies.
// Needed only for "Copy image" and "Download zip"; browsing works by opening index.html directly.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const BS = String.fromCharCode(92);
const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.json': 'application/json', '.md': 'text/markdown; charset=utf-8'
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/__root') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    return res.end(root.split(BS).join('/'));
  }
  let rel = normalize(decodeURIComponent(url.pathname)).split(BS).join('/').replace(/^\/+/, '');
  if (rel === '') rel = 'index.html';
  const file = join(root, rel);
  const hidden = /(^|\/)(\.|node_modules)/.test(rel);
  if (!file.startsWith(root) || hidden) { res.writeHead(403); return res.end('Forbidden'); }
  try {
    if (!(await stat(file)).isFile()) throw new Error('not a file');
    res.writeHead(200, { 'content-type': types[extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404); res.end('Not found');
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') console.error(`Port ${port} is busy. Close the other copy, or run with PORT=4180.`);
  else console.error(e.message);
  process.exit(1);
});

server.listen(port, '127.0.0.1', () => {
  const addr = `http://localhost:${port}/`;
  console.log(`Design Library running at ${addr}  (Ctrl+C to stop)`);
  if (!process.argv.includes('--no-open')) {
    const cmd = process.platform === 'win32' ? `start "" "${addr}"` : process.platform === 'darwin' ? `open "${addr}"` : `xdg-open "${addr}"`;
    exec(cmd);
  }
});
