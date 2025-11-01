// Simple Pokemon class matching the attacker/defender shape
// Properties: name, speed, attack, defense, hp, optional maxHp
// Method: setValue(stat, value) used by ability callbacks

const STAT_KEYS = ['speed', 'attack', 'defense', 'hp'];

function toInt(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return 0;
  return Math.trunc(v);
}

class PokemonClass {
  constructor(name, callback) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
      .then(res => res.json())
      .then(data => {
        const { stats, name, maxHp } = data;
        this.name = String(name);
        this.speed = toInt(stats?.find(s => s.stat.name === "speed").base_stat);
        this.attack = toInt(stats?.find(s => s.stat.name === "attack").base_stat);
        this.defense = toInt(stats?.find(s => s.stat.name === "defense").base_stat);
        this.hp = toInt(stats?.find(s => s.stat.name === "hp").base_stat);
        this.maxHp = this.hp;
        this.sprites = data.sprites;
        this.abilities = data.abilities?.map(ab => ab.ability.name);
        return this;
      })
  }

  setStat(stat, value,) {
    if (!STAT_KEYS.includes(stat)) {
      throw new Error(`Invalid stat: ${stat}. Expected one of ${STAT_KEYS.join(', ')}`);
    }
    const num = toInt(value);
    /*     if (stat === 'hp') {
          if (num <= this.maxHp) {
            this.hp = value;
          }else{
            this.hp = this.maxHp;
          }
        } */
    this[stat] = Math.max(0, num);
    return this;
  }

  getIntervalDelay() {
    return 3000 - (this.speed * 10);
  }
}

export default PokemonClass;

/*
Example usage:

import abilityCallbacks from './ability_callback.js';
import Pokemon from './pokemon.js';

const attacker = new Pokemon({ name: 'Pikachu', speed: 12, attack: 8, defense: 4, hp: 35, maxHp: 35 });
const defender = new Pokemon({ name: 'Onix', speed: 6, attack: 7, defense: 12, hp: 45, maxHp: 45 });

const msg = abilityCallbacks['sturdy'](attacker, defender);
console.log(msg);
*/

