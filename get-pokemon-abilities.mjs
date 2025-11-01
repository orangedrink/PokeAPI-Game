import fs from 'node:fs/promises';

const LIST_API = 'https://pokeapi.co/api/v2/pokemon?limit=20000&offset=0';

const CONCURRENCY = Number(process.env.CONCURRENCY || 8);
const OUTPUT = process.env.OUTPUT || 'pokemon_stats_abilities.csv';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url);
    if (res.ok) return res.json();
    if (attempt === retries) throw new Error(`HTTP ${res.status} for ${url}`);
    await sleep(300 * (attempt + 1));
  }
}

function toCsvValue(v) {
  const s = String(v ?? '');
  return '"' + s.replace(/"/g, '""') + '"';
}

function buildRow(p) {
  const types = (p.types || [])
    .sort((a,b)=>a.slot-b.slot)
    .map(t => t.type?.name || '')
    .join('|');
  const abilities = (p.abilities || [])
    .sort((a,b)=>a.slot-b.slot)
    .map(a => a.ability?.name || '')
    .join('|');
  const statOf = (name) => (p.stats || []).find(s => s.stat?.name === name)?.base_stat ?? '';
  const hp = statOf('hp');
  const attack = statOf('attack');
  const defense = statOf('defense');
  const sp_attack = statOf('special-attack');
  const sp_defense = statOf('special-defense');
  const speed = statOf('speed');
  const cols = [
    p.id,
    p.name,
    p.base_experience ?? '',
    p.height ?? '',
    p.weight ?? '',
    types,
    abilities,
    hp, attack, defense, sp_attack, sp_defense, speed,
  ];
  return cols.map(toCsvValue).join(',');
}

async function run() {
  console.log('Fetching Pokémon list…');
  const list = await fetchJSON(LIST_API);
  const results = list?.results || [];
  console.log(`Found ${results.length} entries`);

  const header = [
    'id','name','base_experience','height','weight',
    'types','abilities','hp','attack','defense','sp_attack','sp_defense','speed'
  ];
  const rows = [header.map(toCsvValue).join(',')];

  let index = 0;

  async function worker(start) {
    for (let i = start; i < results.length; i += CONCURRENCY) {
      const item = results[i];
      try {
        const data = await fetchJSON(item.url);
        rows.push(buildRow(data));
      } catch (e) {
        console.error('Failed:', item.name, e.message);
      }
      index++;
      if (index % 50 === 0) console.log(`Progress: ${index}/${results.length}`);
      // Be polite: small delay to avoid hammering the API
      await sleep(40);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, (_, k) => worker(k));
  await Promise.all(workers);

  const csv = rows.join('\n');
  await fs.writeFile(OUTPUT, csv, 'utf8');
  console.log(`Wrote ${OUTPUT} with ${rows.length - 1} rows`);
}

run().catch((e) => {
  console.error('Error:', e);
  process.exitCode = 1;
});

