/**
 * Sample: Int16Array (Pokémon stats)
 * Demonstrates: deepCopy creates a new typed array with copied elements.
 * Mutations: copy[1] = 999 // attack
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

// simplified stats: [hp, attack, defense]
const INT16ARRAY_FIXTURE = new Int16Array([35, 55, 40]);

export function run() {
  const original = INT16ARRAY_FIXTURE;
  const copy = deepCopy(original);
  copy[1] = 999;
  log("TypedArray (Pokémon stats: Int16Array)", {
    original: Array.from(original), // [hp, attack, defense]
    copy: Array.from(copy), // cloned stats (attack changed)
    sameRef: sameRef(original, copy) // false → cloned typed array
  });
}


