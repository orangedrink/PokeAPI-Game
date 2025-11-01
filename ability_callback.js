import abilityEffects from './ability_effects.js';

const DEFAULT_EFFECT = { target: 'attacker', stat: 'attack', delta: 2 };

function formatAbilityName(name) {
  return String(name).replace(/_/g, '-');
}

function createAbilityCallback(abilityName, effect) {
  const { target, stat, delta } = effect;
  const resolvedTarget = target === 'defender' ? 'defender' : 'attacker';
  const resolvedDelta = Number.isFinite(delta) ? delta : DEFAULT_EFFECT.delta;
  const resolvedStat = ['hp', 'attack', 'defense', 'speed'].includes(stat) ? stat : DEFAULT_EFFECT.stat;

  return (attacker, defender) => {
    const actor = resolvedTarget === 'attacker' ? attacker : defender;
    const currentValue = Number(actor?.[resolvedStat]) || 0;
    const nextValue = currentValue + resolvedDelta;
    actor.setStat(resolvedStat, nextValue);

    const deltaText = resolvedDelta > 0 ? `+${resolvedDelta}` : `${resolvedDelta}`;

    return {
      attackerMsg: `${attacker.name} used ${formatAbilityName(abilityName)} (${resolvedStat} ${deltaText})`,
      affectedMsg: {
        affected: resolvedTarget,
        text: deltaText,
        type: resolvedStat,
      },
    };
  };
}

const abilityCallbacks = {};

for (const [abilityName, effect] of Object.entries(abilityEffects)) {
  abilityCallbacks[abilityName] = createAbilityCallback(abilityName, effect);
}

export default new Proxy(abilityCallbacks, {
  get(target, prop, receiver) {
    if (typeof prop !== 'string') {
      return Reflect.get(target, prop, receiver);
    }
    if (!Object.prototype.hasOwnProperty.call(target, prop)) {
      target[prop] = createAbilityCallback(prop, DEFAULT_EFFECT);
    }
    return target[prop];
  },
});
