/**
 * Sample: URLSearchParams (Pokémon query)
 * Demonstrates: deepCopy creates a new URLSearchParams with copied entries; modifications are isolated.
 * Mutations: copy.set("pokemon", "pikachu")
 * Expected identity: original !== copy (if URLSearchParams is supported)
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  if (typeof URLSearchParams !== "undefined") {
    const original = new URLSearchParams("pokemon=bulbasaur&type=grass");
    const copy = deepCopy(original);
    copy.set("pokemon", "pikachu");
    log("URLSearchParams (Pokémon query)", {
      original: original.toString(), // original query string
      copy: copy.toString(), // cloned and mutated query string
      sameRef: sameRef(original, copy) // false → params cloned
    });
  } else {
    log("URLSearchParams", "Not available in this environment.");
  }
}


