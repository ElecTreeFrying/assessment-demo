/**
 * Sample: Error (Pokémon)
 * Demonstrates: deepCopy preserves constructor, name, message, stack (if present), and own props.
 * Mutations: copy.meta.where = "Cerulean Gym"
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const ERROR_FIXTURE = (() => {
  const err = new TypeError("Pikachu fainted!");
  err.meta = { where: "Pewter Gym" };
  return err;
})();

export function run() {
  const original = ERROR_FIXTURE;
  const copy = deepCopy(original);
  copy.meta.where = "Cerulean Gym";
  log("Error (Pokémon)", {
    originalName: original.name, // TypeError
    originalMsg: original.message, // message text
    originalMeta: original.meta.where, // custom metadata on original
    copyName: copy.name, // preserved on clone
    copyMsg: copy.message,
    copyMeta: copy.meta.where, // independent object in clone
    sameRef: sameRef(original, copy) // false → error cloned
  });
}


