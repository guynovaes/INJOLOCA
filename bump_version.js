// bump_version.js
const fs = require('fs');
const semver = require('semver');

const manifestPath = './manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath));

const type = process.env.BUMP_TYPE || 'patch';
if (!['patch','minor','major'].includes(type)) {
  throw new Error('BUMP_TYPE inválido: ' + type);
}

const oldVersion = manifest.version;
if (!semver.valid(oldVersion)) {
  throw new Error('Versão inválida no manifest.json: ' + oldVersion);
}

const newVersion = semver.inc(oldVersion, type);
manifest.version = newVersion;

// Atualiza manifest.json
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

// Exporta para o GitHub Actions
fs.writeFileSync(process.env.GITHUB_OUTPUT, `new_version=${newVersion}\n`, 'utf8');
console.log(`Bumped version: ${oldVersion} -> ${newVersion}`);
