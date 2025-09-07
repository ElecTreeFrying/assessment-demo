/**
 * Sample: Date (Pokémon era)
 * Demonstrates: deepCopy creates a new Date with the same timestamp.
 * Mutations: copy.setUTCFullYear(2030)
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const DATE_FIXTURE = new Date("1997-04-01T00:00:00Z"); // Pokémon anime premiere era

export function run() {
  const original = DATE_FIXTURE;
  const copy = deepCopy(original);
  copy.setUTCFullYear(2030);
  log("Date (Pokémon era)", {
    originalISO: original.toISOString(), // original timestamp
    copyISO: copy.toISOString(), // cloned date timestamp after mutation
    sameRef: sameRef(original, copy) // false → date cloned
  });
}


