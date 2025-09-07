/**
 * Sample: URL (Pokémon API)
 * Demonstrates: deepCopy creates a new URL with the same href; modifications are isolated.
 * Mutations: copy.searchParams.set("pokemon", "pikachu")
 * Expected identity: original !== copy (if URL is supported)
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  if (typeof URL !== "undefined") {
    const original = new URL("https://pokeapi.co/api/v2/pokemon?pokemon=bulbasaur#stats");
    const copy = deepCopy(original);
    copy.searchParams.set("pokemon", "pikachu");
    log("URL (Pokémon API)", {
      originalHref: original.href, // original URL
      copyHref: copy.href, // cloned and mutated URL
      sameRef: sameRef(original, copy) // false → URL cloned
    });
  } else {
    log("URL", "Not available in this environment.");
  }
}


