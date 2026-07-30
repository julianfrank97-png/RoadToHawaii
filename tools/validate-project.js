#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];
const required = [
  'index.html', 'css/styles.css', 'js/game-data.js', 'js/audio.js', 'js/app.js',
  'manifest.webmanifest', 'sw.js', 'assets/favicon.svg', 'assets/icon-192.png',
  'assets/icon-512.png', 'README.md', 'INSTALLATION.md', 'package.json'
];

for (const relative of required) {
  if (!fs.existsSync(path.join(root, relative))) errors.push(`Pflichtdatei fehlt: ${relative}`);
}

function read(relative) {
  return fs.readFileSync(path.join(root, relative), 'utf8');
}

if (!errors.length) {
  const html = read('index.html');
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(match => match[1])
    .filter(ref => !/^(?:https?:|data:|#|mailto:)/.test(ref));
  for (const ref of refs) {
    const clean = ref.split(/[?#]/)[0].replace(/^\.\//, '');
    if (clean && !fs.existsSync(path.join(root, clean))) errors.push(`index.html verweist auf fehlende Datei: ${ref}`);
  }

  let manifest;
  try { manifest = JSON.parse(read('manifest.webmanifest')); }
  catch (error) { errors.push(`Manifest ist ungültiges JSON: ${error.message}`); }
  if (manifest) {
    for (const icon of manifest.icons || []) {
      if (!fs.existsSync(path.join(root, icon.src))) errors.push(`Manifest-Icon fehlt: ${icon.src}`);
    }
    if (!manifest.start_url) warnings.push('Manifest enthält keine start_url.');
  }

  const sw = read('sw.js');
  const assetMatch = sw.match(/const ASSETS=\[([^\]]+)\]/s);
  if (!assetMatch) {
    errors.push('Service Worker: ASSETS-Liste nicht gefunden.');
  } else {
    const assets = [...assetMatch[1].matchAll(/'([^']+)'/g)].map(match => match[1]);
    for (const asset of assets) {
      const clean = asset.replace(/^\.\//, '');
      if (clean && !fs.existsSync(path.join(root, clean))) errors.push(`Service Worker verweist auf fehlende Datei: ${asset}`);
    }
  }

  const packageJson = JSON.parse(read('package.json'));
  if (packageJson.version !== '2.0.0') errors.push(`package.json-Version ist ${packageJson.version}, erwartet 2.0.0.`);
  if (!read('js/game-data.js').includes('"version": "2.0.0"')) errors.push('Spieldaten melden nicht Version 2.0.0.');
  if (!sw.includes('triathlon-karriere-v2.0.0')) errors.push('Service-Worker-Cache ist nicht auf v2.0.0 gesetzt.');
}

console.log(JSON.stringify({status: errors.length ? 'failed' : 'ok', errors, warnings}, null, 2));
if (errors.length) process.exit(1);
