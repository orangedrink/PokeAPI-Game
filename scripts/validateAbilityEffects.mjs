import fs from 'fs';
import path from 'path';
import abilityEffects from '../ability_effects.js';

const STAT_KEYS = new Set(['hp', 'attack', 'defense', 'speed']);
const csvPath = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'pokemon_stats_abilities.csv');

function parseCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  const lines = raw.split(/\r?\n/);
  if (lines.length <= 1) {
    return [];
  }
  const headers = lines[0].slice(1, -1).split('\",\"');
  return lines.slice(1).filter(Boolean).map((line) => {
    const cells = line.slice(1, -1).split('\",\"');
    const row = {};
    headers.forEach((key, index) => {
      row[key] = cells[index] ?? '';
    });
    return row;
  });
}

function normalizeAbilityName(name) {
  return name.trim().replace(/-/g, '_');
}

const rows = parseCsv(csvPath);

const errors = [];

for (const row of rows) {
  const abilityNames = row.abilities
    .split('|')
    .map((name) => name.trim())
    .filter(Boolean)
    .map(normalizeAbilityName);
  const uniqueNames = Array.from(new Set(abilityNames));
  const seen = new Map();
  for (const ability of uniqueNames) {
    const effect = abilityEffects[ability];
    if (!effect) {
      errors.push(`Missing ability effect for "${ability}" (pokemon: ${row.name})`);
      continue;
    }
    if (!STAT_KEYS.has(effect.stat)) {
      errors.push(`Ability "${ability}" targets invalid stat "${effect.stat}"`);
    }
    if (typeof effect.delta !== 'number' || Number.isNaN(effect.delta)) {
      errors.push(`Ability "${ability}" has non-numeric delta`);
    }
    const key = `${effect.target}|${effect.stat}|${effect.delta}`;
    if (seen.has(key)) {
      const other = seen.get(key);
      errors.push(
        `Duplicate effect for ${row.name}: abilities "${other}" and "${ability}" both use ${key}`,
      );
    } else {
      seen.set(key, ability);
    }
  }
}

if (errors.length) {
  errors.forEach((msg) => console.error(msg));
  process.exitCode = 1;
} else {
  console.log('Ability effects validated successfully.');
}
