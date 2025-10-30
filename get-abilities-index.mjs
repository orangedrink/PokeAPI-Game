// save as get-abilities-with-effects.mjs
import fs from 'node:fs/promises';

const ABILITY_INDEX = 'https://pokeapi.co/api/v2/ability?limit=20000';
const CONCURRENCY = 10;       // be kind to the API
const PAUSE_MS = 250;         // short pause between batches
const RETRIES = 3;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchJSON(url, attempt = 1) {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'AbilityEffectCollector/1.0' }});
    if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
    return await r.json();
  } catch (err) {
    if (attempt < RETRIES) {
      await sleep(300 * attempt);
      return fetchJSON(url, attempt + 1);
    }
    console.error(`Failed after ${RETRIES} attempts: ${url}\n${err}`);
    return null;
  }
}

function pickEnglishEffect(effectEntries = []) {
  const en = effectEntries.find(e => e.language?.name === 'en');
  if (!en) return '';
  return en.effect?.trim() || en.short_effect?.trim() || '';
}

function toCSV(rows) {
  return rows
    .map(r => r.map(x => `"${String(x ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n');
}

console.log('Fetching ability index…');
const index = await fetchJSON(ABILITY_INDEX);
if (!index?.results) throw new Error('No abilities returned');

const abilities = index.results; // [{name,url}]
console.log(`Found ${abilities.length} abilities. Fetching effects…`);

const out = [['name','url','effect']];
for (let i = 0; i < abilities.length; i += CONCURRENCY) {
  const batch = abilities.slice(i, i + CONCURRENCY);
  const details = await Promise.all(batch.map(a => fetchJSON(a.url)));

  details.forEach((d, j) => {
    const info = abilities[i + j];
    if (!d) {
      out.push([info.name, info.url, '']); // keep row even if failed
      return;
    }
    const effect = pickEnglishEffect(d.effect_entries);
    out.push([info.name, info.url, effect]);
  });

  process.stdout.write(
    `\rProcessed ${Math.min(i + CONCURRENCY, abilities.length)}/${abilities.length}`
  );
  await sleep(PAUSE_MS);
}

const csv = toCSV(out);
await fs.writeFile('abilities_with_effects.csv', csv, 'utf8');
console.log(`\nWrote abilities_with_effects.csv with ${abilities.length} rows`);
