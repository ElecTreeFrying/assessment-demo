/**
 * Sample: SharedArrayBuffer (Pokémon stats)
 * Demonstrates: deepCopy allocates a new SharedArrayBuffer and copies bytes.
 * Mutations: new Uint8Array(copy)[1] = 99 (attack)
 * Expected identity: original !== copy (if SharedArrayBuffer is supported)
 */
import { deepCopy } from '../deep-copy.js';
import { log } from './_utils.js';

const SHARED_ARRAY_BUFFER_FIXTURE = (typeof SharedArrayBuffer !== "undefined")
  ? (() => {
      const buf = new SharedArrayBuffer(4);
      // bytes represent simplified stats: [hp, attack, defense, speed]
      new Uint8Array(buf).set([35, 55, 40, 90]);
      return buf;
    })()
  : undefined;

export function run() {
  if (typeof SharedArrayBuffer !== "undefined") {
    const original = SHARED_ARRAY_BUFFER_FIXTURE;
    const copy = deepCopy(original);
    new Uint8Array(copy)[1] = 99; // mutate copied attack
    log("SharedArrayBuffer (Pokémon stats)", {
      originalBytes: Array.from(new Uint8Array(original)), // original hp/attack/defense/speed
      copyBytes: Array.from(new Uint8Array(copy)), // cloned bytes (attack changed)
      sameRef: original === copy // false → cloned buffer
    });
  } else {
    log("SharedArrayBuffer", "Not available in this environment.");
  }
}


