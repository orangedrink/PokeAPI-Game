const abilityCallbacks = {
stench: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return `${attacker.name} used stench (attack -10)`
},
drizzle: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used drizzle (defense -10)`
},
speed_boost: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used speed-boost (speed +10)`
},
battle_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used battle-armor (defense +10)`
},
sturdy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used sturdy (defense +40)`
},
damp: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used drizzle (defense -10)`
},
limber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used limber (speed +10)`
},
sand_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 40)
  return `${attacker.name} used sand-veil (hp +40)`
},
static: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used static (attack +20)`
},
volt_absorb: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used volt-absorb (hp +10)`
},
water_absorb: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used water-absorb (hp +10)`
},
oblivious: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used oblivious (attack +10)`
},
cloud_nine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used cloud-nine (attack +10)`
},
compound_eyes: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used compound-eyes (attack +50)`
},
insomnia: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used insomnia (defense +10)`
},
color_change: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used color-change (hp +10)`
},
immunity: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used immunity (hp +10)`
},
flash_fire: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used flash-fire (hp +10)`
},
shield_dust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return `${attacker.name} used shield-dust (defense +20)`
},
own_tempo: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used own-tempo (defense +10)`
},
suction_cups: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used suction-cups (defense +40)`
},
intimidate: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used intimidate (attack +10)`
},
shadow_tag: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used shadow-tag (defense -10)`
},
rough_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used rough-skin (attack +10)`
},
wonder_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used wonder-guard (defense +10)`
},
levitate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used levitate (hp +10)`
},
effect_spore: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 20)
  return `${attacker.name} used effect-spore (hp -20)`
},
synchronize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used synchronize (defense +10)`
},
clear_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 20)
  return `${attacker.name} used clear-body (hp +20)`
},
natural_cure: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used natural-cure (hp +10)`
},
lightning_rod: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used lightning-rod (hp +10)`
},
serene_grace: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return `${attacker.name} used serene-grace (attack +30)`
},
swift_swim: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used swift-swim (speed +10)`
},
chlorophyll: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used chlorophyll (hp +10)`
},
illuminate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used illuminate (hp +10)`
},
trace: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 50)
  return `${attacker.name} used trace (hp +50)`
},
huge_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used huge-power (attack +10)`
},
poison_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used poison-point (attack +10)`
},
inner_focus: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used inner-focus (attack +10)`
},
magma_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used magma-armor (defense +30)`
},
water_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used water-veil (hp +10)`
},
magnet_pull: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used magnet-pull (hp +10)`
},
soundproof: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used soundproof (hp +10)`
},
rain_dish: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used rain-dish (hp +10)`
},
sand_stream: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 40)
  return `${attacker.name} used sand-stream (attack -40)`
},
pressure: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 30)
  return `${attacker.name} used pressure (defense -30)`
},
thick_fat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used thick-fat (defense +10)`
},
early_bird: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used early-bird (defense +10)`
},
flame_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 30)
  return `${attacker.name} used flame-body (hp +30)`
},
run_away: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used run-away (speed +10)`
},
keen_eye: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used keen-eye (attack +50)`
},
hyper_cutter: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return `${attacker.name} used hyper-cutter (attack +30)`
},
pickup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used pickup (defense +10)`
},
truant: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used truant (defense +10)`
},
hustle: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used hustle (attack +50)`
},
cute_charm: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used cute-charm (attack +10)`
},
plus: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used plus (hp +10)`
},
minus: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used minus (defense +10)`
},
forecast: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used forecast (defense +10)`
},
sticky_hold: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 40)
  return `${attacker.name} used sticky-hold (attack -40)`
},
shed_skin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used shed-skin (defense +10)`
},
guts: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used guts (defense +10)`
},
marvel_scale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used marvel-scale (defense +10)`
},
liquid_ooze: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used liquid-ooze (attack +10)`
},
overgrow: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 20)
  return `${attacker.name} used overgrow (hp +20)`
},
blaze: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return `${attacker.name} used blaze (defense +50)`
},
torrent: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 40)
  return `${attacker.name} used torrent (hp +40)`
},
swarm: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used swarm (hp +10)`
},
rock_head: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used rock-head (defense +10)`
},
drought: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 20)
  return `${attacker.name} used drought (attack -20)`
},
arena_trap: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 10)
  return `${attacker.name} used arena-trap (hp -10)`
},
vital_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used vital-spirit (attack +40)`
},
white_smoke: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used white-smoke (hp +10)`
},
pure_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used pure-power (attack +10)`
},
shell_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used shell-armor (defense +10)`
},
air_lock: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used air-lock (hp +10)`
},
tangled_feet: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used tangled-feet (defense -10)`
},
motor_drive: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used motor-drive (speed +10)`
},
rivalry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used rivalry (attack +50)`
},
steadfast: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used steadfast (speed +10)`
},
snow_cloak: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used snow-cloak (attack +10)`
},
gluttony: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used gluttony (defense +30)`
},
anger_point: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used anger-point (attack +10)`
},
unburden: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used unburden (speed +10)`
},
heatproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used heatproof (attack +10)`
},
simple: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 30)
  return `${attacker.name} used simple (hp +30)`
},
dry_skin: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used dry-skin (hp +10)`
},
download: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used download (attack +40)`
},
iron_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used iron-fist (attack +10)`
},
poison_heal: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used poison-heal (hp +10)`
},
adaptability: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used adaptability (attack +10)`
},
skill_link: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used skill-link (hp +10)`
},
hydration: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used hydration (hp +10)`
},
solar_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used solar-power (attack +10)`
},
quick_feet: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used quick-feet (defense +10)`
},
normalize: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used normalize (defense +40)`
},
sniper: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sniper (attack +10)`
},
magic_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return `${attacker.name} used magic-guard (defense +50)`
},
no_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used no-guard (defense +10)`
},
stall: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used stall (defense +10)`
},
technician: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used technician (defense +10)`
},
leaf_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used leaf-guard (defense +10)`
},
klutz: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used klutz (attack +10)`
},
mold_breaker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used mold-breaker (attack +10)`
},
super_luck: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used super-luck (attack +10)`
},
aftermath: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used aftermath (attack +10)`
},
anticipation: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used anticipation (attack +50)`
},
forewarn: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used forewarn (hp +10)`
},
unaware: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used unaware (hp +10)`
},
tinted_lens: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used tinted-lens (defense +10)`
},
filter: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used filter (defense +10)`
},
slow_start: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 10)
  return `${attacker.name} used slow-start (hp -10)`
},
scrappy: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used scrappy (hp +10)`
},
storm_drain: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 50)
  return `${attacker.name} used storm-drain (hp +50)`
},
ice_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 40)
  return `${attacker.name} used ice-body (hp +40)`
},
solid_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used solid-rock (defense +10)`
},
snow_warning: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 20)
  return `${attacker.name} used snow-warning (defense -20)`
},
honey_gather: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used honey-gather (defense +10)`
},
frisk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used frisk (attack +10)`
},
reckless: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used reckless (defense +10)`
},
multitype: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used multitype (hp +10)`
},
flower_gift: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used flower-gift (hp +10)`
},
bad_dreams: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used bad-dreams (defense +10)`
},
pickpocket: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used pickpocket (attack +10)`
},
sheer_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sheer-force (attack +10)`
},
contrary: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used contrary (attack +10)`
},
unnerve: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used unnerve (attack +10)`
},
defiant: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used defiant (attack +10)`
},
defeatist: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used defeatist (hp +10)`
},
cursed_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used cursed-body (hp +10)`
},
healer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used healer (hp +10)`
},
friend_guard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used friend-guard (defense +10)`
},
weak_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used weak-armor (defense +10)`
},
heavy_metal: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used heavy-metal (attack +10)`
},
light_metal: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used light-metal (defense +10)`
},
multiscale: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used multiscale (defense +10)`
},
toxic_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used toxic-boost (attack +10)`
},
flare_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used flare-boost (attack +10)`
},
harvest: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used harvest (hp +10)`
},
telepathy: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used telepathy (hp +10)`
},
moody: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used moody (attack +10)`
},
overcoat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used overcoat (defense +10)`
},
poison_touch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used poison-touch (hp +10)`
},
regenerator: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used regenerator (hp +10)`
},
big_pecks: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used big-pecks (attack +50)`
},
sand_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 40)
  return `${attacker.name} used sand-rush (speed +40)`
},
wonder_skin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used wonder-skin (attack +10)`
},
analytic: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used analytic (hp +10)`
},
illusion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used illusion (defense +10)`
},
imposter: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used imposter (hp +10)`
},
infiltrator: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used infiltrator (defense +10)`
},
mummy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used mummy (defense +10)`
},
moxie: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used moxie (attack +10)`
},
justified: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used justified (attack +10)`
},
rattled: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used rattled (speed +10)`
},
magic_bounce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used magic-bounce (defense +10)`
},
sap_sipper: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used sap-sipper (defense +10)`
},
prankster: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used prankster (attack +50)`
},
sand_force: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 30)
  return `${attacker.name} used sand-force (hp +30)`
},
iron_barbs: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used iron-barbs (defense +10)`
},
zen_mode: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used zen-mode (hp +10)`
},
victory_star: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return `${attacker.name} used victory-star (attack -10)`
},
turboblaze: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used turboblaze (hp +10)`
},
teravolt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used teravolt (attack +10)`
},
aroma_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used aroma-veil (attack +10)`
},
flower_veil: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 50)
  return `${attacker.name} used flower-veil (hp +50)`
},
cheek_pouch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used cheek-pouch (hp +10)`
},
protean: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used protean (attack +10)`
},
fur_coat: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used fur-coat (defense +10)`
},
magician: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used magician (hp +10)`
},
bulletproof: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used bulletproof (attack +10)`
},
competitive: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used competitive (attack +10)`
},
strong_jaw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used strong-jaw (attack +10)`
},
refrigerate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used refrigerate (defense +10)`
},
sweet_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sweet-veil (attack +10)`
},
stance_change: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used stance-change (attack +10)`
},
gale_wings: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 40)
  return `${attacker.name} used gale-wings (speed +40)`
},
mega_launcher: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used mega-launcher (defense +10)`
},
grass_pelt: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used grass-pelt (defense +10)`
},
symbiosis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used symbiosis (defense +10)`
},
tough_claws: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used tough-claws (attack +10)`
},
pixilate: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used pixilate (hp +10)`
},
gooey: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 50)
  return `${attacker.name} used gooey (defense -50)`
},
aerilate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used aerilate (defense +10)`
},
parental_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used parental-bond (attack +10)`
},
dark_aura: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used dark-aura (hp +10)`
},
fairy_aura: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used fairy-aura (attack +10)`
},
aura_break: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used aura-break (attack +10)`
},
primordial_sea: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used primordial-sea (attack +10)`
},
desolate_land: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used desolate-land (defense +10)`
},
delta_stream: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used delta-stream (hp +10)`
},
stamina: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used stamina (hp +10)`
},
wimp_out: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used wimp-out (hp +10)`
},
emergency_exit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used emergency-exit (defense +10)`
},
water_compaction: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used water-compaction (attack +20)`
},
merciless: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used merciless (hp +10)`
},
shields_down: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used shields-down (defense +10)`
},
stakeout: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used stakeout (hp +10)`
},
water_bubble: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used water-bubble (hp +10)`
},
steelworker: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used steelworker (hp +10)`
},
berserk: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used berserk (attack +10)`
},
slush_rush: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used slush-rush (speed +10)`
},
long_reach: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used long-reach (attack +10)`
},
liquid_voice: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used liquid-voice (hp +10)`
},
triage: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used triage (attack +10)`
},
galvanize: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used galvanize (hp +10)`
},
surge_surfer: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used surge-surfer (speed +10)`
},
schooling: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used schooling (attack +40)`
},
disguise: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used disguise (attack +10)`
},
battle_bond: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used battle-bond (attack +10)`
},
power_construct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used power-construct (attack +10)`
},
corrosion: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used corrosion (attack +10)`
},
comatose: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used comatose (defense +10)`
},
queenly_majesty: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used queenly-majesty (attack +10)`
},
innards_out: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used innards-out (attack +10)`
},
dancer: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used dancer (attack +10)`
},
battery: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used battery (hp +10)`
},
fluffy: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used fluffy (defense +10)`
},
dazzling: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used dazzling (hp +10)`
},
soul_heart: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used soul-heart (hp +10)`
},
tangling_hair: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used tangling-hair (attack +40)`
},
receiver: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used receiver (attack +10)`
},
power_of_alchemy: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used power-of-alchemy (attack +10)`
},
beast_boost: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used beast-boost (attack +20)`
},
rks_system: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used rks-system (attack +10)`
},
electric_surge: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used electric-surge (hp +10)`
},
psychic_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used psychic-surge (attack +10)`
},
misty_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used misty-surge (attack +10)`
},
grassy_surge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used grassy-surge (attack +10)`
},
full_metal_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used full-metal-body (defense +40)`
},
shadow_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used shadow-shield (defense +10)`
},
prism_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return `${attacker.name} used prism-armor (defense +50)`
},
neuroforce: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used neuroforce (defense +30)`
},
intrepid_sword: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used intrepid-sword (attack +40)`
},
dauntless_shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used dauntless-shield (defense +40)`
},
libero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used libero (defense +10)`
},
ball_fetch: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used ball-fetch (hp +10)`
},
cotton_down: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 40)
  return `${attacker.name} used cotton-down (defense -40)`
},
propeller_tail: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used propeller-tail (attack +10)`
},
mirror_armor: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 50)
  return `${attacker.name} used mirror-armor (defense +50)`
},
gulp_missile: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used gulp-missile (hp +10)`
},
stalwart: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used stalwart (defense +10)`
},
steam_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used steam-engine (attack +20)`
},
punk_rock: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used punk-rock (defense +30)`
},
sand_spit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sand-spit (attack +10)`
},
ice_scales: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used ice-scales (defense +10)`
},
ripen: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used ripen (hp +10)`
},
ice_face: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used ice-face (hp +10)`
},
power_spot: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used power-spot (attack +50)`
},
mimicry: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used mimicry (defense +10)`
},
screen_cleaner: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used screen-cleaner (defense +10)`
},
steely_spirit: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used steely-spirit (attack +10)`
},
perish_body: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used perish-body (hp +10)`
},
wandering_spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used wandering-spirit (defense +10)`
},
gorilla_tactics: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used gorilla-tactics (attack +10)`
},
neutralizing_gas: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used neutralizing-gas (hp +10)`
},
pastel_veil: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used pastel-veil (attack +10)`
},
hunger_switch: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used hunger-switch (attack +10)`
},
quick_draw: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used quick-draw (hp +10)`
},
unseen_fist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used unseen-fist (attack +10)`
},
curious_medicine: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used curious-medicine (hp +10)`
},
transistor: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used transistor (attack +20)`
},
dragons_maw: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 20)
  return `${attacker.name} used dragons-maw (attack +20)`
},
chilling_neigh: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used chilling-neigh (defense +30)`
},
grim_neigh: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return `${attacker.name} used grim-neigh (attack +30)`
},
as_one_glastrier: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used as-one-glastrier (defense +10)`
},
as_one_spectrier: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used as-one-spectrier (hp +10)`
},
lingering_aroma: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used lingering-aroma (defense +10)`
},
seed_sower: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used seed-sower (defense +10)`
},
thermal_exchange: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used thermal-exchange (attack +10)`
},
anger_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used anger-shell (defense +10)`
},
purifying_salt: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used purifying-salt (attack +10)`
},
well_baked_body: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used well-baked-body (defense +40)`
},
wind_rider: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used wind-rider (attack +10)`
},
guard_dog: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used guard-dog (defense +40)`
},
rocky_payload: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used rocky-payload (defense +30)`
},
wind_power: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used wind-power (attack +10)`
},
zero_to_hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used zero-to-hero (defense +10)`
},
commander: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used commander (attack +10)`
},
electromorphosis: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 40)
  return `${attacker.name} used electromorphosis (hp +40)`
},
protosynthesis: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return `${attacker.name} used protosynthesis (defense +20)`
},
quark_drive: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used quark-drive (hp +10)`
},
good_as_gold: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used good-as-gold (hp +10)`
},
vessel_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 30)
  return `${attacker.name} used vessel-of-ruin (defense +30)`
},
sword_of_ruin: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sword-of-ruin (attack +10)`
},
tablets_of_ruin: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used tablets-of-ruin (defense +10)`
},
beads_of_ruin: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 30)
  return `${attacker.name} used beads-of-ruin (hp +30)`
},
orichalcum_pulse: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used orichalcum-pulse (attack +10)`
},
hadron_engine: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return `${attacker.name} used hadron-engine (attack +30)`
},
opportunist: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 30)
  return `${attacker.name} used opportunist (attack +30)`
},
cud_chew: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used cud-chew (hp +10)`
},
sharpness: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 40)
  return `${attacker.name} used sharpness (attack +40)`
},
supreme_overlord: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 50)
  return `${attacker.name} used supreme-overlord (attack +50)`
},
costar: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used costar (defense -10)`
},
toxic_debris: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used toxic-debris (defense +10)`
},
armor_tail: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used armor-tail (defense +10)`
},
earth_eater: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used earth-eater (attack +10)`
},
mycelium_might: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used mycelium-might (attack +10)`
},
minds_eye: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 40)
  return `${attacker.name} used minds-eye (defense +40)`
},
supersweet_syrup: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 20)
  return `${attacker.name} used supersweet-syrup (defense +20)`
},
hospitality: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used hospitality (hp +10)`
},
toxic_chain: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used toxic-chain (hp +10)`
},
embody_aspect: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used embody-aspect (defense +10)`
},
tera_shift: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used tera-shift (hp +10)`
},
tera_shell: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used tera-shell (defense +10)`
},
teraform_zero: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used teraform-zero (hp +10)`
},
poison_puppeteer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used poison-puppeteer (hp +10)`
},
mountaineer: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used mountaineer (hp +10)`
},
wave_rider: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used wave-rider (defense +10)`
},
skater: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used skater (hp +10)`
},
thrust: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used thrust (defense +10)`
},
perception: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used perception (defense +10)`
},
parry: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used parry (attack +10)`
},
instinct: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used instinct (attack +10)`
},
dodge: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used dodge (hp +10)`
},
jagged_edge: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used jagged-edge (attack +10)`
},
frostbite: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return `${attacker.name} used frostbite (attack -10)`
},
tenacity: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used tenacity (hp +10)`
},
pride: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used pride (defense +10)`
},
deep_sleep: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used deep-sleep (hp +10)`
},
power_nap: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used power-nap (attack +10)`
},
spirit: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used spirit (defense +10)`
},
warm_blanket: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used warm-blanket (hp +10)`
},
gulp: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used gulp (hp +10)`
},
herbivore: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used herbivore (defense +10)`
},
sandpit: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 10)
  return `${attacker.name} used sandpit (hp -10)`
},
hot_blooded: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used hot-blooded (attack +10)`
},
medic: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used medic (defense +10)`
},
life_force: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used life-force (attack +10)`
},
lunchbox: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used lunchbox (defense +10)`
},
nurse: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used nurse (hp +10)`
},
melee: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used melee (defense +10)`
},
sponge: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used sponge (defense +10)`
},
bodyguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used bodyguard (defense +10)`
},
hero: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used hero (defense +10)`
},
last_bastion: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used last-bastion (defense +10)`
},
stealth: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used stealth (defense +10)`
},
vanguard: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used vanguard (defense +10)`
},
nomad: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used nomad (hp +10)`
},
sequence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used sequence (attack +10)`
},
grass_cloak: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used grass-cloak (hp +10)`
},
celebrate: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used celebrate (defense +10)`
},
lullaby: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used lullaby (hp +10)`
},
calming: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used calming (hp +10)`
},
daze: (attacker, defender) => {
  defender.setStat('attack', defender.attack - 10)
  return `${attacker.name} used daze (attack -10)`
},
frighten: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used frighten (defense -10)`
},
interference: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used interference (defense +10)`
},
mood_maker: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used mood-maker (attack +10)`
},
confidence: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used confidence (attack +10)`
},
fortune: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used fortune (attack +10)`
},
bonanza: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used bonanza (defense +10)`
},
explode: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 30)
  return `${attacker.name} used explode (hp -30)`
},
omnipotent: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used omnipotent (defense +10)`
},
share: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used share (attack +10)`
},
black_hole: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used black-hole (hp +10)`
},
shadow_dash: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used shadow-dash (speed +10)`
},
sprint: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used sprint (speed +10)`
},
disgust: (attacker, defender) => {
  attacker.setStat('attack', attacker.attack + 10)
  return `${attacker.name} used disgust (attack +10)`
},
high_rise: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used high-rise (defense +10)`
},
climber: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used climber (speed +10)`
},
flame_boost: (attacker, defender) => {
  attacker.setStat('hp', attacker.hp + 10)
  return `${attacker.name} used flame-boost (hp +10)`
},
aqua_boost: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used aqua-boost (defense +10)`
},
run_up: (attacker, defender) => {
  attacker.setStat('speed', attacker.speed + 10)
  return `${attacker.name} used run-up (speed +10)`
},
conqueror: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used conqueror (defense +10)`
},
shackle: (attacker, defender) => {
  defender.setStat('hp', defender.hp - 10)
  return `${attacker.name} used shackle (hp -10)`
},
decoy: (attacker, defender) => {
  defender.setStat('defense', defender.defense - 10)
  return `${attacker.name} used decoy (defense -10)`
},
shield: (attacker, defender) => {
  attacker.setStat('defense', attacker.defense + 10)
  return `${attacker.name} used shield (defense +10)`
},
};

export default abilityCallbacks;
