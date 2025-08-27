/**
 * Sample: Circular references (Ditto transforms to itself)
 * Demonstrates: deepCopy preserves cycles; copied object points to itself and not the original.
 * Checks: copy.transform === copy; copy !== original
 */
import { deepCopy } from '../deep-copy.js';
import { log } from './_utils.js';

const CIRCULAR_FIXTURE = (() => {
  const pokemon = { name: "Ditto" };
  pokemon.transform = pokemon; // self-reference
  return pokemon;
})();

export function run() {
  const original = CIRCULAR_FIXTURE;
  const copy = deepCopy(original);
  log("Circular refs (Ditto)", {
    name: copy.name, // Ditto
    selfPointsToSelf: copy.transform === copy, // true → cycle preserved
    notOriginal: copy !== original // true → clone distinct from original
  });
}


