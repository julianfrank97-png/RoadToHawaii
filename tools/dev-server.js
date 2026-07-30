#!/usr/bin/env node
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || process.argv[2] || 8080);
const host = process.env.HOST || '127.0.0.1';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

function safePath(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const candidate = path.resolve(root, relative);
  return candidate.startsWith(root + path.sep) || candidate === root ? candidate : null;
}

const server = http.createServer((req, res) => {
  const candidate = safePath(req.url);
  if (!candidate) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  fs.stat(candidate, (statError, stats) => {
    let filePath = candidate;
    if (!statError && stats.isDirectory()) filePath = path.join(candidate, 'index.html');

    fs.readFile(filePath, (error, body) => {
      if (error) {
        res.writeHead(error.code === 'ENOENT' ? 404 : 500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(error.code === 'ENOENT' ? 'Nicht gefunden' : 'Serverfehler');
        return;
      }
      res.writeHead(200, {
        'Content-Type': mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      res.end(body);
    });
  });
});

server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} ist bereits belegt. Starte z. B. mit: node tools/dev-server.js 8081`);
  } else {
    console.error(error);
  }
  process.exit(1);
});

server.listen(port, host, () => {
  console.log(`Triathlon Karriere läuft auf http://${host}:${port}`);
  console.log('Beenden mit Strg+C.');
});
