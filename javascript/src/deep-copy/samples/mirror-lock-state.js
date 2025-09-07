/**
 * Sample: Mirror lock state (freeze, seal, preventExtensions)
 * Demonstrates: deepCopy mirrors the extensibility/immutability state of the source on the clone.
 * Context: treat objects as Pokémon records with locked states.
 * Checks: isFrozen(frozenCopy), isSealed(sealedCopy), isExtensible(nonExtCopy)
 */
import { deepCopy } from '../deep-copy.js';
import { log } from './_utils.js';

export function run() {
  const base = { name: "Pikachu", stats: { hp: 35 } };
  const frozen = Object.freeze({ ...base });
  const sealed = Object.seal({ ...base });
  const nonExt = Object.preventExtensions({ ...base });

  const frozenCopy = deepCopy(frozen);
  const sealedCopy = deepCopy(sealed);
  const nonExtCopy = deepCopy(nonExt);

  log("Mirror lock state (Pokémon records)", {
    frozen_isFrozen: Object.isFrozen(frozenCopy), // true → freeze mirrored
    sealed_isSealed: Object.isSealed(sealedCopy), // true → seal mirrored
    nonExt_isExtensible: Object.isExtensible(nonExtCopy) // false → non-extensibility mirrored
  });
}


