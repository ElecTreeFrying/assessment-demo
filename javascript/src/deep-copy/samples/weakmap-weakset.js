/**
 * Sample: WeakMap / WeakSet (Pokémon metadata)
 * Demonstrates: these collections are returned as-is (non-enumerable entries, not cloneable meaningfully).
 * Example: WeakMap linking trainer object → rank, WeakSet of active battle objects.
 * Expected identity: wm === deepCopy(wm); ws === deepCopy(ws)
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  const ash = { name: "Ash" };
  const battle1 = {};
  const wm = new WeakMap([[ash, 10]]); // trainer rank
  const ws = new WeakSet([battle1]);   // active battles
  const wm2 = deepCopy(wm);
  const ws2 = deepCopy(ws);
  log("WeakMap/WeakSet (Pokémon metadata)", {
    weakMapSameRef: sameRef(wm, wm2), // true → returned as-is
    weakSetSameRef: sameRef(ws, ws2) // true → returned as-is
  });
}


