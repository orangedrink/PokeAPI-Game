const abilityCallbacks = {
stench: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 1)
  return `${attacker.name} used stench (attack -1)`
},
drizzle: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used drizzle (defense -1)`
},
speed_boost: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used speed-boost (speed +1)`
},
battle_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used battle-armor (defense +1)`
},
sturdy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used sturdy (defense +4)`
},
damp: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used drizzle (defense -1)`
},
limber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used limber (speed +1)`
},
sand_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 4)
  return `${attacker.name} used sand-veil (hp +4)`
},
static: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used static (attack +1)`
},
volt_absorb: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used volt-absorb (hp +1)`
},
water_absorb: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used water-absorb (hp +1)`
},
oblivious: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used oblivious (attack +1)`
},
cloud_nine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used cloud-nine (attack +1)`
},
compound_eyes: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used compound-eyes (attack +5)`
},
insomnia: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used insomnia (defense +1)`
},
color_change: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used color-change (hp +1)`
},
immunity: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used immunity (hp +1)`
},
flash_fire: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used flash-fire (hp +1)`
},
shield_dust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 2)
  return `${attacker.name} used shield-dust (defense +2)`
},
own_tempo: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used own-tempo (defense +1)`
},
suction_cups: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used suction-cups (defense +4)`
},
intimidate: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used intimidate (attack +1)`
},
shadow_tag: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used shadow-tag (defense -1)`
},
rough_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used rough-skin (attack +1)`
},
wonder_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used wonder-guard (defense +1)`
},
levitate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used levitate (hp +1)`
},
effect_spore: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 2)
  return `${attacker.name} used effect-spore (hp -2)`
},
synchronize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used synchronize (defense +1)`
},
clear_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 2)
  return `${attacker.name} used clear-body (hp +2)`
},
natural_cure: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used natural-cure (hp +1)`
},
lightning_rod: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used lightning-rod (hp +1)`
},
serene_grace: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 3)
  return `${attacker.name} used serene-grace (attack +3)`
},
swift_swim: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used swift-swim (speed +1)`
},
chlorophyll: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used chlorophyll (hp +1)`
},
illuminate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used illuminate (hp +1)`
},
trace: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 5)
  return `${attacker.name} used trace (hp +5)`
},
huge_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used huge-power (attack +1)`
},
poison_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used poison-point (attack +1)`
},
inner_focus: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used inner-focus (attack +1)`
},
magma_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used magma-armor (defense +3)`
},
water_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used water-veil (hp +1)`
},
magnet_pull: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used magnet-pull (hp +1)`
},
soundproof: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used soundproof (hp +1)`
},
rain_dish: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used rain-dish (hp +1)`
},
sand_stream: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 4)
  return `${attacker.name} used sand-stream (attack -4)`
},
pressure: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 3)
  return `${attacker.name} used pressure (defense -3)`
},
thick_fat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used thick-fat (defense +1)`
},
early_bird: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used early-bird (defense +1)`
},
flame_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 5)
  return `${attacker.name} used flame-body (hp +5)`
},
run_away: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used run-away (speed +1)`
},
keen_eye: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used keen-eye (attack +5)`
},
hyper_cutter: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 3)
  return `${attacker.name} used hyper-cutter (attack +3)`
},
pickup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used pickup (defense +1)`
},
truant: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used truant (defense +1)`
},
hustle: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used hustle (attack +5)`
},
cute_charm: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used cute-charm (attack +1)`
},
plus: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used plus (hp +1)`
},
minus: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used minus (defense +1)`
},
forecast: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used forecast (defense +1)`
},
sticky_hold: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 4)
  return `${attacker.name} used sticky-hold (attack -4)`
},
shed_skin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used shed-skin (defense +1)`
},
guts: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used guts (defense +1)`
},
marvel_scale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used marvel-scale (defense +1)`
},
liquid_ooze: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used liquid-ooze (attack +1)`
},
overgrow: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 2)
  return `${attacker.name} used overgrow (hp +2)`
},
blaze: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 5)
  return `${attacker.name} used blaze (defense +5)`
},
torrent: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 4)
  return `${attacker.name} used torrent (hp +4)`
},
swarm: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used swarm (hp +1)`
},
rock_head: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used rock-head (defense +1)`
},
drought: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 2)
  return `${attacker.name} used drought (attack -2)`
},
arena_trap: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 1)
  return `${attacker.name} used arena-trap (hp -1)`
},
vital_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used vital-spirit (attack +4)`
},
white_smoke: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used white-smoke (hp +1)`
},
pure_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used pure-power (attack +1)`
},
shell_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used shell-armor (defense +1)`
},
air_lock: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used air-lock (hp +1)`
},
tangled_feet: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used tangled-feet (defense -1)`
},
motor_drive: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used motor-drive (speed +1)`
},
rivalry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used rivalry (attack +5)`
},
steadfast: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used steadfast (speed +1)`
},
snow_cloak: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used snow-cloak (attack +1)`
},
gluttony: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used gluttony (defense +3)`
},
anger_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used anger-point (attack +1)`
},
unburden: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used unburden (speed +1)`
},
heatproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used heatproof (attack +1)`
},
simple: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 3)
  return `${attacker.name} used simple (hp +3)`
},
dry_skin: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used dry-skin (hp +1)`
},
download: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used download (attack +4)`
},
iron_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used iron-fist (attack +1)`
},
poison_heal: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used poison-heal (hp +1)`
},
adaptability: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used adaptability (attack +1)`
},
skill_link: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used skill-link (hp +1)`
},
hydration: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used hydration (hp +1)`
},
solar_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used solar-power (attack +1)`
},
quick_feet: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used quick-feet (defense +1)`
},
normalize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used normalize (defense +4)`
},
sniper: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sniper (attack +1)`
},
magic_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 5)
  return `${attacker.name} used magic-guard (defense +5)`
},
no_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used no-guard (defense +1)`
},
stall: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used stall (defense +1)`
},
technician: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used technician (defense +1)`
},
leaf_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used leaf-guard (defense +1)`
},
klutz: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used klutz (attack +1)`
},
mold_breaker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used mold-breaker (attack +1)`
},
super_luck: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used super-luck (attack +1)`
},
aftermath: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used aftermath (attack +1)`
},
anticipation: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used anticipation (attack +5)`
},
forewarn: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used forewarn (hp +1)`
},
unaware: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used unaware (hp +1)`
},
tinted_lens: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used tinted-lens (defense +1)`
},
filter: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used filter (defense +1)`
},
slow_start: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 1)
  return `${attacker.name} used slow-start (hp -1)`
},
scrappy: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used scrappy (hp +1)`
},
storm_drain: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 5)
  return `${attacker.name} used storm-drain (hp +5)`
},
ice_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 4)
  return `${attacker.name} used ice-body (hp +4)`
},
solid_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used solid-rock (defense +1)`
},
snow_warning: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 2)
  return `${attacker.name} used snow-warning (defense -2)`
},
honey_gather: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used honey-gather (defense +1)`
},
frisk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used frisk (attack +1)`
},
reckless: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used reckless (defense +1)`
},
multitype: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used multitype (hp +1)`
},
flower_gift: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used flower-gift (hp +1)`
},
bad_dreams: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used bad-dreams (defense +1)`
},
pickpocket: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used pickpocket (attack +1)`
},
sheer_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sheer-force (attack +1)`
},
contrary: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used contrary (attack +1)`
},
unnerve: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used unnerve (attack +1)`
},
defiant: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used defiant (attack +1)`
},
defeatist: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used defeatist (hp +1)`
},
cursed_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used cursed-body (hp +1)`
},
healer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used healer (hp +1)`
},
friend_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used friend-guard (defense +1)`
},
weak_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used weak-armor (defense +1)`
},
heavy_metal: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used heavy-metal (attack +1)`
},
light_metal: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used light-metal (defense +1)`
},
multiscale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used multiscale (defense +1)`
},
toxic_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used toxic-boost (attack +1)`
},
flare_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used flare-boost (attack +1)`
},
harvest: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used harvest (hp +1)`
},
telepathy: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used telepathy (hp +1)`
},
moody: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used moody (attack +1)`
},
overcoat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used overcoat (defense +1)`
},
poison_touch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used poison-touch (hp +1)`
},
regenerator: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used regenerator (hp +1)`
},
big_pecks: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used big-pecks (attack +5)`
},
sand_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 4)
  return `${attacker.name} used sand-rush (speed +4)`
},
wonder_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used wonder-skin (attack +1)`
},
analytic: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used analytic (hp +1)`
},
illusion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used illusion (defense +1)`
},
imposter: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used imposter (hp +1)`
},
infiltrator: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used infiltrator (defense +1)`
},
mummy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used mummy (defense +1)`
},
moxie: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used moxie (attack +1)`
},
justified: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used justified (attack +1)`
},
rattled: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used rattled (speed +1)`
},
magic_bounce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used magic-bounce (defense +1)`
},
sap_sipper: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used sap-sipper (defense +1)`
},
prankster: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used prankster (attack +5)`
},
sand_force: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 3)
  return `${attacker.name} used sand-force (hp +3)`
},
iron_barbs: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used iron-barbs (defense +1)`
},
zen_mode: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used zen-mode (hp +1)`
},
victory_star: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 1)
  return `${attacker.name} used victory-star (attack -1)`
},
turboblaze: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used turboblaze (hp +1)`
},
teravolt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used teravolt (attack +1)`
},
aroma_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used aroma-veil (attack +1)`
},
flower_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 5)
  return `${attacker.name} used flower-veil (hp +5)`
},
cheek_pouch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used cheek-pouch (hp +1)`
},
protean: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used protean (attack +1)`
},
fur_coat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used fur-coat (defense +1)`
},
magician: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used magician (hp +1)`
},
bulletproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used bulletproof (attack +1)`
},
competitive: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used competitive (attack +1)`
},
strong_jaw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used strong-jaw (attack +1)`
},
refrigerate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used refrigerate (defense +1)`
},
sweet_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sweet-veil (attack +1)`
},
stance_change: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used stance-change (attack +1)`
},
gale_wings: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 4)
  return `${attacker.name} used gale-wings (speed +4)`
},
mega_launcher: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used mega-launcher (defense +1)`
},
grass_pelt: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used grass-pelt (defense +1)`
},
symbiosis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used symbiosis (defense +1)`
},
tough_claws: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used tough-claws (attack +1)`
},
pixilate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used pixilate (hp +1)`
},
gooey: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 5)
  return `${attacker.name} used gooey (defense -5)`
},
aerilate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used aerilate (defense +1)`
},
parental_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used parental-bond (attack +1)`
},
dark_aura: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used dark-aura (hp +1)`
},
fairy_aura: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used fairy-aura (attack +1)`
},
aura_break: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used aura-break (attack +1)`
},
primordial_sea: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used primordial-sea (attack +1)`
},
desolate_land: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used desolate-land (defense +1)`
},
delta_stream: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used delta-stream (hp +1)`
},
stamina: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used stamina (hp +1)`
},
wimp_out: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used wimp-out (hp +1)`
},
emergency_exit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used emergency-exit (defense +1)`
},
water_compaction: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 2)
  return `${attacker.name} used water-compaction (attack +2)`
},
merciless: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used merciless (hp +1)`
},
shields_down: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used shields-down (defense +1)`
},
stakeout: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used stakeout (hp +1)`
},
water_bubble: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used water-bubble (hp +1)`
},
steelworker: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used steelworker (hp +1)`
},
berserk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used berserk (attack +1)`
},
slush_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used slush-rush (speed +1)`
},
long_reach: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used long-reach (attack +1)`
},
liquid_voice: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used liquid-voice (hp +1)`
},
triage: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used triage (attack +1)`
},
galvanize: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used galvanize (hp +1)`
},
surge_surfer: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used surge-surfer (speed +1)`
},
schooling: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used schooling (attack +4)`
},
disguise: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used disguise (attack +1)`
},
battle_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used battle-bond (attack +1)`
},
power_construct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used power-construct (attack +1)`
},
corrosion: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used corrosion (attack +1)`
},
comatose: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used comatose (defense +1)`
},
queenly_majesty: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used queenly-majesty (attack +1)`
},
innards_out: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used innards-out (attack +1)`
},
dancer: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used dancer (attack +1)`
},
battery: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used battery (hp +1)`
},
fluffy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used fluffy (defense +1)`
},
dazzling: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used dazzling (hp +1)`
},
soul_heart: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used soul-heart (hp +1)`
},
tangling_hair: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used tangling-hair (attack +4)`
},
receiver: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used receiver (attack +1)`
},
power_of_alchemy: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used power-of-alchemy (attack +1)`
},
beast_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 2)
  return `${attacker.name} used beast-boost (attack +2)`
},
rks_system: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used rks-system (attack +1)`
},
electric_surge: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used electric-surge (hp +1)`
},
psychic_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used psychic-surge (attack +1)`
},
misty_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used misty-surge (attack +1)`
},
grassy_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used grassy-surge (attack +1)`
},
full_metal_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used full-metal-body (defense +4)`
},
shadow_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used shadow-shield (defense +1)`
},
prism_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 5)
  return `${attacker.name} used prism-armor (defense +5)`
},
neuroforce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used neuroforce (defense +3)`
},
intrepid_sword: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used intrepid-sword (attack +4)`
},
dauntless_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used dauntless-shield (defense +4)`
},
libero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used libero (defense +1)`
},
ball_fetch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used ball-fetch (hp +1)`
},
cotton_down: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 4)
  return `${attacker.name} used cotton-down (defense -4)`
},
propeller_tail: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used propeller-tail (attack +1)`
},
mirror_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 5)
  return `${attacker.name} used mirror-armor (defense +5)`
},
gulp_missile: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used gulp-missile (hp +1)`
},
stalwart: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used stalwart (defense +1)`
},
steam_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 2)
  return `${attacker.name} used steam-engine (attack +2)`
},
punk_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used punk-rock (defense +3)`
},
sand_spit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sand-spit (attack +1)`
},
ice_scales: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used ice-scales (defense +1)`
},
ripen: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used ripen (hp +1)`
},
ice_face: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used ice-face (hp +1)`
},
power_spot: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used power-spot (attack +5)`
},
mimicry: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used mimicry (defense +1)`
},
screen_cleaner: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used screen-cleaner (defense +1)`
},
steely_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used steely-spirit (attack +1)`
},
perish_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used perish-body (hp +1)`
},
wandering_spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used wandering-spirit (defense +1)`
},
gorilla_tactics: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used gorilla-tactics (attack +1)`
},
neutralizing_gas: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used neutralizing-gas (hp +1)`
},
pastel_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used pastel-veil (attack +1)`
},
hunger_switch: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used hunger-switch (attack +1)`
},
quick_draw: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used quick-draw (hp +1)`
},
unseen_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used unseen-fist (attack +1)`
},
curious_medicine: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used curious-medicine (hp +1)`
},
transistor: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 2)
  return `${attacker.name} used transistor (attack +2)`
},
dragons_maw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 2)
  return `${attacker.name} used dragons-maw (attack +2)`
},
chilling_neigh: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used chilling-neigh (defense +3)`
},
grim_neigh: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 3)
  return `${attacker.name} used grim-neigh (attack +3)`
},
as_one_glastrier: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used as-one-glastrier (defense +1)`
},
as_one_spectrier: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used as-one-spectrier (hp +1)`
},
lingering_aroma: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used lingering-aroma (defense +1)`
},
seed_sower: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used seed-sower (defense +1)`
},
thermal_exchange: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used thermal-exchange (attack +1)`
},
anger_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used anger-shell (defense +1)`
},
purifying_salt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used purifying-salt (attack +1)`
},
well_baked_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used well-baked-body (defense +4)`
},
wind_rider: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used wind-rider (attack +1)`
},
guard_dog: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used guard-dog (defense +4)`
},
rocky_payload: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used rocky-payload (defense +3)`
},
wind_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used wind-power (attack +1)`
},
zero_to_hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used zero-to-hero (defense +1)`
},
commander: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used commander (attack +1)`
},
electromorphosis: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 4)
  return `${attacker.name} used electromorphosis (hp +4)`
},
protosynthesis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 2)
  return `${attacker.name} used protosynthesis (defense +2)`
},
quark_drive: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used quark-drive (hp +1)`
},
good_as_gold: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used good-as-gold (hp +1)`
},
vessel_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 3)
  return `${attacker.name} used vessel-of-ruin (defense +3)`
},
sword_of_ruin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sword-of-ruin (attack +1)`
},
tablets_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used tablets-of-ruin (defense +1)`
},
beads_of_ruin: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 3)
  return `${attacker.name} used beads-of-ruin (hp +3)`
},
orichalcum_pulse: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used orichalcum-pulse (attack +1)`
},
hadron_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 3)
  return `${attacker.name} used hadron-engine (attack +3)`
},
opportunist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 3)
  return `${attacker.name} used opportunist (attack +3)`
},
cud_chew: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used cud-chew (hp +1)`
},
sharpness: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 4)
  return `${attacker.name} used sharpness (attack +4)`
},
supreme_overlord: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 5)
  return `${attacker.name} used supreme-overlord (attack +5)`
},
costar: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used costar (defense -1)`
},
toxic_debris: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used toxic-debris (defense +1)`
},
armor_tail: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used armor-tail (defense +1)`
},
earth_eater: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used earth-eater (attack +1)`
},
mycelium_might: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used mycelium-might (attack +1)`
},
minds_eye: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 4)
  return `${attacker.name} used minds-eye (defense +4)`
},
supersweet_syrup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 2)
  return `${attacker.name} used supersweet-syrup (defense +2)`
},
hospitality: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used hospitality (hp +1)`
},
toxic_chain: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used toxic-chain (hp +1)`
},
embody_aspect: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used embody-aspect (defense +1)`
},
tera_shift: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used tera-shift (hp +1)`
},
tera_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used tera-shell (defense +1)`
},
teraform_zero: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used teraform-zero (hp +1)`
},
poison_puppeteer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used poison-puppeteer (hp +1)`
},
mountaineer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used mountaineer (hp +1)`
},
wave_rider: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used wave-rider (defense +1)`
},
skater: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used skater (hp +1)`
},
thrust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used thrust (defense +1)`
},
perception: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used perception (defense +1)`
},
parry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used parry (attack +1)`
},
instinct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used instinct (attack +1)`
},
dodge: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used dodge (hp +1)`
},
jagged_edge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used jagged-edge (attack +1)`
},
frostbite: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 1)
  return `${attacker.name} used frostbite (attack -1)`
},
tenacity: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used tenacity (hp +1)`
},
pride: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used pride (defense +1)`
},
deep_sleep: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used deep-sleep (hp +1)`
},
power_nap: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used power-nap (attack +1)`
},
spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used spirit (defense +1)`
},
warm_blanket: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used warm-blanket (hp +1)`
},
gulp: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used gulp (hp +1)`
},
herbivore: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used herbivore (defense +1)`
},
sandpit: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 1)
  return `${attacker.name} used sandpit (hp -1)`
},
hot_blooded: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used hot-blooded (attack +1)`
},
medic: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used medic (defense +1)`
},
life_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used life-force (attack +1)`
},
lunchbox: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used lunchbox (defense +1)`
},
nurse: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used nurse (hp +1)`
},
melee: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used melee (defense +1)`
},
sponge: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used sponge (defense +1)`
},
bodyguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used bodyguard (defense +1)`
},
hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used hero (defense +1)`
},
last_bastion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used last-bastion (defense +1)`
},
stealth: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used stealth (defense +1)`
},
vanguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used vanguard (defense +1)`
},
nomad: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used nomad (hp +1)`
},
sequence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used sequence (attack +1)`
},
grass_cloak: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used grass-cloak (hp +1)`
},
celebrate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used celebrate (defense +1)`
},
lullaby: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used lullaby (hp +1)`
},
calming: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used calming (hp +1)`
},
daze: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 1)
  return `${attacker.name} used daze (attack -1)`
},
frighten: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used frighten (defense -1)`
},
interference: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used interference (defense +1)`
},
mood_maker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used mood-maker (attack +1)`
},
confidence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used confidence (attack +1)`
},
fortune: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used fortune (attack +1)`
},
bonanza: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used bonanza (defense +1)`
},
explode: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 3)
  return `${attacker.name} used explode (hp -3)`
},
omnipotent: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used omnipotent (defense +1)`
},
share: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used share (attack +1)`
},
black_hole: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used black-hole (hp +1)`
},
shadow_dash: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used shadow-dash (speed +1)`
},
sprint: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used sprint (speed +1)`
},
disgust: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 1)
  return `${attacker.name} used disgust (attack +1)`
},
high_rise: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used high-rise (defense +1)`
},
climber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used climber (speed +1)`
},
flame_boost: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 1)
  return `${attacker.name} used flame-boost (hp +1)`
},
aqua_boost: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used aqua-boost (defense +1)`
},
run_up: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 1)
  return `${attacker.name} used run-up (speed +1)`
},
conqueror: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used conqueror (defense +1)`
},
shackle: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 1)
  return `${attacker.name} used shackle (hp -1)`
},
decoy: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 1)
  return `${attacker.name} used decoy (defense -1)`
},
shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 1)
  return `${attacker.name} used shield (defense +1)`
},
};

export default abilityCallbacks;
