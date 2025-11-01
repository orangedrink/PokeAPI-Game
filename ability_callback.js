const abilityCallbacks = {
stench: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return { attackerMsg: `${attacker.name} used stench (attack -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'attack' } }
},
drizzle: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used drizzle (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
speed_boost: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used speed-boost (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
battle_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used battle-armor (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sturdy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used sturdy (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
damp: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used drizzle (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
limber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used limber (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
sand_veil: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  40)
  return { attackerMsg: `${attacker.name} used sand-veil (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
static: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used static (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
volt_absorb: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used volt-absorb (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
water_absorb: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used water-absorb (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
oblivious: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used oblivious (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
cloud_nine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used cloud-nine (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
compound_eyes: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used compound-eyes (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
insomnia: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used insomnia (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
color_change: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used color-change (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
immunity: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used immunity (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
flash_fire: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used flash-fire (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
shield_dust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return { attackerMsg: `${attacker.name} used shield-dust (defense +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'defense' } }
},
own_tempo: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used own-tempo (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
suction_cups: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used suction-cups (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
intimidate: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used intimidate (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
shadow_tag: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used shadow-tag (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
rough_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used rough-skin (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
wonder_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used wonder-guard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
levitate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used levitate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
effect_spore: (attacker, defender) => {
  defender.setStat('defense', defender.defense -  20)
  return { attackerMsg: `${attacker.name} used effect-spore (defense -20)`, affectedMsg: { affected: 'defender', text: '-20' , type: 'defense' } }
},
synchronize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used synchronize (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
clear_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  20)
  return { attackerMsg: `${attacker.name} used clear-body (defense +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'defense' } }
},
natural_cure: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used natural-cure (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
lightning_rod: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used lightning-rod (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
serene_grace: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return { attackerMsg: `${attacker.name} used serene-grace (attack +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'attack' } }
},
swift_swim: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used swift-swim (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
chlorophyll: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed +  10)
  return { attackerMsg: `${attacker.name} used chlorophyll (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
illuminate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used illuminate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
trace: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  50)
  return { attackerMsg: `${attacker.name} used trace (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
huge_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used huge-power (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
poison_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used poison-point (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
inner_focus: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used inner-focus (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
magma_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used magma-armor (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
water_veil: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used water-veil (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
magnet_pull: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used magnet-pull (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
soundproof: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used soundproof (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
rain_dish: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used rain-dish (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sand_stream: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 40)
  return { attackerMsg: `${attacker.name} used sand-stream (attack -40)`, affectedMsg: { affected: 'defender', text: '-40' , type: 'attack' } }
},
pressure: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 30)
  return { attackerMsg: `${attacker.name} used pressure (defense -30)`, affectedMsg: { affected: 'defender', text: '-30' , type: 'defense' } }
},
thick_fat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used thick-fat (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
early_bird: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used early-bird (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
flame_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  30)
  return { attackerMsg: `${attacker.name} used flame-body (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
run_away: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used run-away (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
keen_eye: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used keen-eye (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
hyper_cutter: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return { attackerMsg: `${attacker.name} used hyper-cutter (attack +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'attack' } }
},
pickup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used pickup (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
truant: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used truant (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
hustle: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used hustle (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
cute_charm: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used cute-charm (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
plus: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used plus (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
minus: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used minus (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
forecast: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used forecast (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sticky_hold: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 40)
  return { attackerMsg: `${attacker.name} used sticky-hold (attack -40)`, affectedMsg: { affected: 'defender', text: '-40' , type: 'attack' } }
},
shed_skin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used shed-skin (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
guts: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used guts (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
marvel_scale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used marvel-scale (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
liquid_ooze: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used liquid-ooze (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
overgrow: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  20)
  return { attackerMsg: `${attacker.name} used overgrow (defense +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'defense' } }
},
blaze: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return { attackerMsg: `${attacker.name} used blaze (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
torrent: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  40)
  return { attackerMsg: `${attacker.name} used torrent (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
swarm: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used swarm (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
rock_head: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used rock-head (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
drought: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 20)
  return { attackerMsg: `${attacker.name} used drought (attack -20)`, affectedMsg: { affected: 'defender', text: '-20' , type: 'attack' } }
},
arena_trap: (attacker, defender) => {
  defender.setStat('defense', defender.defense -  10)
  return { attackerMsg: `${attacker.name} used arena-trap (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
vital_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used vital-spirit (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
white_smoke: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used white-smoke (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
pure_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used pure-power (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
shell_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used shell-armor (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
air_lock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used air-lock (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tangled_feet: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used tangled-feet (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
motor_drive: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used motor-drive (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
rivalry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used rivalry (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
steadfast: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used steadfast (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
snow_cloak: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used snow-cloak (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
gluttony: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used gluttony (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
anger_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used anger-point (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
unburden: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used unburden (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
heatproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used heatproof (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
simple: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  30)
  return { attackerMsg: `${attacker.name} used simple (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
dry_skin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used dry-skin (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
download: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used download (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
iron_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used iron-fist (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
poison_heal: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used poison-heal (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
adaptability: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used adaptability (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
skill_link: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used skill-link (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
hydration: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used hydration (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
solar_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used solar-power (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
quick_feet: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used quick-feet (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
normalize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used normalize (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
sniper: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sniper (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
magic_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return { attackerMsg: `${attacker.name} used magic-guard (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
no_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used no-guard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
stall: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used stall (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
technician: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used technician (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
leaf_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used leaf-guard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
klutz: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used klutz (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
mold_breaker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used mold-breaker (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
super_luck: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used super-luck (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
aftermath: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used aftermath (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
anticipation: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used anticipation (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
forewarn: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used forewarn (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
unaware: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used unaware (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tinted_lens: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used tinted-lens (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
filter: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used filter (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
slow_start: (attacker, defender) => {
  defender.setStat('speed', defender.speed -  10)
  return { attackerMsg: `${attacker.name} used slow-start (speed -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'speed' } }
},
scrappy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used scrappy (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
storm_drain: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  50)
  return { attackerMsg: `${attacker.name} used storm-drain (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
ice_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  40)
  return { attackerMsg: `${attacker.name} used ice-body (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
solid_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used solid-rock (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
snow_warning: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 20)
  return { attackerMsg: `${attacker.name} used snow-warning (defense -20)`, affectedMsg: { affected: 'defender', text: '-20' , type: 'defense' } }
},
honey_gather: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used honey-gather (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
frisk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used frisk (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
reckless: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used reckless (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
multitype: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used multitype (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
flower_gift: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used flower-gift (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
bad_dreams: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used bad-dreams (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
pickpocket: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used pickpocket (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
sheer_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sheer-force (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
contrary: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used contrary (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
unnerve: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used unnerve (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
defiant: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used defiant (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
defeatist: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used defeatist (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
cursed_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used cursed-body (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
healer: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used healer (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
friend_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used friend-guard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
weak_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used weak-armor (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
heavy_metal: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used heavy-metal (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
light_metal: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used light-metal (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
multiscale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used multiscale (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
toxic_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used toxic-boost (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
flare_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used flare-boost (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
harvest: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used harvest (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
telepathy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used telepathy (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
moody: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used moody (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
overcoat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used overcoat (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
poison_touch: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used poison-touch (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
regenerator: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used regenerator (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
big_pecks: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used big-pecks (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
sand_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 40)
  return { attackerMsg: `${attacker.name} used sand-rush (speed +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'speed' } }
},
wonder_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used wonder-skin (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
analytic: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used analytic (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
illusion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used illusion (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
imposter: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used imposter (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
infiltrator: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used infiltrator (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
mummy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used mummy (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
moxie: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used moxie (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
justified: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used justified (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
rattled: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used rattled (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
magic_bounce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used magic-bounce (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sap_sipper: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used sap-sipper (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
prankster: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used prankster (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
sand_force: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  30)
  return { attackerMsg: `${attacker.name} used sand-force (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
iron_barbs: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used iron-barbs (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
zen_mode: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used zen-mode (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
victory_star: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return { attackerMsg: `${attacker.name} used victory-star (attack -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'attack' } }
},
turboblaze: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used turboblaze (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
teravolt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used teravolt (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
aroma_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used aroma-veil (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
flower_veil: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  50)
  return { attackerMsg: `${attacker.name} used flower-veil (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
cheek_pouch: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used cheek-pouch (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
protean: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used protean (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
fur_coat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used fur-coat (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
magician: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used magician (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
bulletproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used bulletproof (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
competitive: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used competitive (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
strong_jaw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used strong-jaw (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
refrigerate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used refrigerate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sweet_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sweet-veil (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
stance_change: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used stance-change (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
gale_wings: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 40)
  return { attackerMsg: `${attacker.name} used gale-wings (speed +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'speed' } }
},
mega_launcher: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used mega-launcher (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
grass_pelt: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used grass-pelt (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
symbiosis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used symbiosis (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tough_claws: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used tough-claws (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
pixilate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used pixilate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
gooey: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 50)
  return { attackerMsg: `${attacker.name} used gooey (defense -50)`, affectedMsg: { affected: 'defender', text: '-50' , type: 'defense' } }
},
aerilate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used aerilate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
parental_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used parental-bond (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
dark_aura: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used dark-aura (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
fairy_aura: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used fairy-aura (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
aura_break: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used aura-break (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
primordial_sea: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used primordial-sea (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
desolate_land: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used desolate-land (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
delta_stream: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used delta-stream (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
stamina: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used stamina (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
wimp_out: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used wimp-out (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
emergency_exit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used emergency-exit (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
water_compaction: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used water-compaction (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
merciless: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used merciless (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
shields_down: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used shields-down (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
stakeout: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used stakeout (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
water_bubble: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used water-bubble (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
steelworker: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used steelworker (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
berserk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used berserk (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
slush_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used slush-rush (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
long_reach: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used long-reach (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
liquid_voice: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used liquid-voice (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
triage: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used triage (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
galvanize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used galvanize (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
surge_surfer: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used surge-surfer (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
schooling: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used schooling (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
disguise: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used disguise (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
battle_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used battle-bond (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
power_construct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used power-construct (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
corrosion: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used corrosion (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
comatose: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used comatose (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
queenly_majesty: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used queenly-majesty (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
innards_out: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used innards-out (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
dancer: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used dancer (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
battery: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used battery (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
fluffy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used fluffy (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
dazzling: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used dazzling (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
soul_heart: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used soul-heart (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tangling_hair: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used tangling-hair (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
receiver: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used receiver (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
power_of_alchemy: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used power-of-alchemy (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
beast_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used beast-boost (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
rks_system: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used rks-system (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
electric_surge: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used electric-surge (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
psychic_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used psychic-surge (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
misty_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used misty-surge (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
grassy_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used grassy-surge (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
full_metal_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used full-metal-body (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
shadow_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used shadow-shield (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
prism_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return { attackerMsg: `${attacker.name} used prism-armor (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
neuroforce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used neuroforce (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
intrepid_sword: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used intrepid-sword (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
dauntless_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used dauntless-shield (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
libero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used libero (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
ball_fetch: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used ball-fetch (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
cotton_down: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 40)
  return { attackerMsg: `${attacker.name} used cotton-down (defense -40)`, affectedMsg: { affected: 'defender', text: '-40' , type: 'defense' } }
},
propeller_tail: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used propeller-tail (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
mirror_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return { attackerMsg: `${attacker.name} used mirror-armor (defense +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'defense' } }
},
gulp_missile: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used gulp-missile (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
stalwart: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used stalwart (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
steam_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used steam-engine (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
punk_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used punk-rock (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
sand_spit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sand-spit (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
ice_scales: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used ice-scales (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
ripen: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used ripen (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
ice_face: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used ice-face (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
power_spot: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used power-spot (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
mimicry: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used mimicry (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
screen_cleaner: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used screen-cleaner (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
steely_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used steely-spirit (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
perish_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used perish-body (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
wandering_spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used wandering-spirit (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
gorilla_tactics: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used gorilla-tactics (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
neutralizing_gas: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used neutralizing-gas (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
pastel_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used pastel-veil (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
hunger_switch: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used hunger-switch (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
quick_draw: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed +  10)
  return { attackerMsg: `${attacker.name} used quick-draw (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
unseen_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used unseen-fist (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
curious_medicine: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used curious-medicine (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
transistor: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used transistor (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
dragons_maw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return { attackerMsg: `${attacker.name} used dragons-maw (attack +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'attack' } }
},
chilling_neigh: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used chilling-neigh (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
grim_neigh: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return { attackerMsg: `${attacker.name} used grim-neigh (attack +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'attack' } }
},
as_one_glastrier: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used as-one-glastrier (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
as_one_spectrier: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used as-one-spectrier (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
lingering_aroma: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used lingering-aroma (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
seed_sower: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used seed-sower (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
thermal_exchange: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used thermal-exchange (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
anger_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used anger-shell (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
purifying_salt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used purifying-salt (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
well_baked_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used well-baked-body (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
wind_rider: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used wind-rider (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
guard_dog: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used guard-dog (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
rocky_payload: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used rocky-payload (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
wind_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used wind-power (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
zero_to_hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used zero-to-hero (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
commander: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used commander (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
electromorphosis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  40)
  return { attackerMsg: `${attacker.name} used electromorphosis (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
protosynthesis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return { attackerMsg: `${attacker.name} used protosynthesis (defense +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'defense' } }
},
quark_drive: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used quark-drive (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
good_as_gold: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used good-as-gold (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
vessel_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return { attackerMsg: `${attacker.name} used vessel-of-ruin (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
sword_of_ruin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sword-of-ruin (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
tablets_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used tablets-of-ruin (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
beads_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  30)
  return { attackerMsg: `${attacker.name} used beads-of-ruin (defense +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'defense' } }
},
orichalcum_pulse: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used orichalcum-pulse (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
hadron_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return { attackerMsg: `${attacker.name} used hadron-engine (attack +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'attack' } }
},
opportunist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return { attackerMsg: `${attacker.name} used opportunist (attack +30)`, affectedMsg: { affected: 'attacker', text: '+30' , type: 'attack' } }
},
cud_chew: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used cud-chew (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sharpness: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return { attackerMsg: `${attacker.name} used sharpness (attack +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'attack' } }
},
supreme_overlord: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return { attackerMsg: `${attacker.name} used supreme-overlord (attack +50)`, affectedMsg: { affected: 'attacker', text: '+50' , type: 'attack' } }
},
costar: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used costar (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
toxic_debris: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used toxic-debris (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
armor_tail: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used armor-tail (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
earth_eater: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used earth-eater (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
mycelium_might: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used mycelium-might (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
minds_eye: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return { attackerMsg: `${attacker.name} used minds-eye (defense +40)`, affectedMsg: { affected: 'attacker', text: '+40' , type: 'defense' } }
},
supersweet_syrup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return { attackerMsg: `${attacker.name} used supersweet-syrup (defense +20)`, affectedMsg: { affected: 'attacker', text: '+20' , type: 'defense' } }
},
hospitality: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used hospitality (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
toxic_chain: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used toxic-chain (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
embody_aspect: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used embody-aspect (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tera_shift: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used tera-shift (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
tera_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used tera-shell (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
teraform_zero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used teraform-zero (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
poison_puppeteer: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used poison-puppeteer (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
mountaineer: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used mountaineer (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
wave_rider: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used wave-rider (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
skater: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used skater (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
thrust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used thrust (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
perception: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used perception (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
parry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used parry (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
instinct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used instinct (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
dodge: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used dodge (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
jagged_edge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used jagged-edge (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
frostbite: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return { attackerMsg: `${attacker.name} used frostbite (attack -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'attack' } }
},
tenacity: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used tenacity (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
pride: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used pride (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
deep_sleep: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used deep-sleep (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
power_nap: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used power-nap (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used spirit (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
warm_blanket: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used warm-blanket (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
gulp: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used gulp (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
herbivore: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used herbivore (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sandpit: (attacker, defender) => {
  defender.setStat('defense', defender.defense -  10)
  return { attackerMsg: `${attacker.name} used sandpit (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
hot_blooded: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used hot-blooded (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
medic: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used medic (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
life_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used life-force (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
lunchbox: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used lunchbox (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
nurse: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used nurse (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
melee: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used melee (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sponge: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used sponge (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
bodyguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used bodyguard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used hero (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
last_bastion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used last-bastion (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
stealth: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used stealth (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
vanguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used vanguard (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
nomad: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used nomad (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
sequence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used sequence (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
grass_cloak: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used grass-cloak (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
celebrate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used celebrate (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
lullaby: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used lullaby (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
calming: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used calming (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
daze: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return { attackerMsg: `${attacker.name} used daze (attack -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'attack' } }
},
frighten: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used frighten (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
interference: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used interference (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
mood_maker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used mood-maker (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
confidence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used confidence (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
fortune: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used fortune (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
bonanza: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used bonanza (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
explode: (attacker, defender) => {
  defender.setStat('defense', defender.defense -  30)
  return { attackerMsg: `${attacker.name} used explode (defense -30)`, affectedMsg: { affected: 'defender', text: '-30' , type: 'defense' } }
},
omnipotent: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used omnipotent (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
share: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used share (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
black_hole: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense +  10)
  return { attackerMsg: `${attacker.name} used black-hole (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
shadow_dash: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used shadow-dash (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
sprint: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used sprint (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
disgust: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return { attackerMsg: `${attacker.name} used disgust (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
high_rise: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used high-rise (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
climber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used climber (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
flame_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack +  10)
  return { attackerMsg: `${attacker.name} used flame-boost (attack +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'attack' } }
},
aqua_boost: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used aqua-boost (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
run_up: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return { attackerMsg: `${attacker.name} used run-up (speed +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'speed' } }
},
conqueror: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used conqueror (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
shackle: (attacker, defender) => {
  defender.setStat('defense', defender.defense -  10)
  return { attackerMsg: `${attacker.name} used shackle (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
decoy: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return { attackerMsg: `${attacker.name} used decoy (defense -10)`, affectedMsg: { affected: 'defender', text: '-10' , type: 'defense' } }
},
shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return { attackerMsg: `${attacker.name} used shield (defense +10)`, affectedMsg: { affected: 'attacker', text: '+10' , type: 'defense' } }
},
};

export default abilityCallbacks;
