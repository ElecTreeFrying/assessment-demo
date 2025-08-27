/**
 * Sample: Node.js Buffer (Pokémon sprite bytes)
 * Demonstrates: deepCopy duplicates node Buffers if Buffer is available.
 * Mutations: copy[0] = 99 (simulate changing first pixel/byte)
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  if (typeof Buffer !== "undefined" && Buffer.isBuffer) {
    // pretend these bytes represent a tiny sprite header
    const original = Buffer.from([25, 0, 1]); // 25 = Pikachu id
    const copy = deepCopy(original);
    copy[0] = 99;
    log("Node Buffer (Pokémon sprite)", {
      original: Array.from(original), // original bytes
      copy: Array.from(copy), // cloned bytes with first element changed
      sameRef: sameRef(original, copy), // false → buffer cloned
    });
  } else {
    log("Node Buffer", "Not available in this environment.");
  }
}


