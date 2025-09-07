/**
 * Sample: Promise (Pokémon fetch)
 * Demonstrates: Promises are returned as-is because cloning is not meaningful.
 * Expected identity: original === copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  const original = Promise.resolve({ name: "Pikachu", id: 25 });
  const copy = deepCopy(original);
  log("Promise (as-is)", {
    sameRef: sameRef(original, copy), // true → returned as-is
  });
}


