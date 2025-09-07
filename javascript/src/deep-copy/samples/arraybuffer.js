/**
 * Sample: ArrayBuffer
 * Demonstrates: deepCopy duplicates raw bytes; modifying the copy does not affect the original.
 * Mutations: new Uint8Array(copy)[0] = 99
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const ARRAY_BUFFER_FIXTURE = (() => {
  const buf = new ArrayBuffer(4);
  // bytes represent simplified stats: [hp, attack, defense, speed]
  new Uint8Array(buf).set([35, 55, 40, 90]);
  return buf;
})();

export function run() {
  const original = ARRAY_BUFFER_FIXTURE;
  const copy = deepCopy(original);
  new Uint8Array(copy)[0] = 99; // mutate copied hp
  log("ArrayBuffer (Pokémon stats)", {
    originalBytes: Array.from(new Uint8Array(original)), // original hp/attack/defense/speed
    copyBytes: Array.from(new Uint8Array(copy)), // cloned bytes (hp mutated to 99)
    sameRef: sameRef(original, copy) // false → cloned buffer
  });
}


