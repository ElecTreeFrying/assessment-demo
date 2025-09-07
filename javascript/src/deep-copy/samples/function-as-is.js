/**
 * Sample: Function (Pokémon as-is)
 * Demonstrates: functions are returned by reference; cloning does not apply.
 * Example: a battle announcer function returning a move string.
 * Expected identity: original === copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

export function run() {
  function useMove(pokemon, move) { return `${pokemon} uses ${move}!`; }
  const original = useMove;
  const copy = deepCopy(original);
  log("Function (Pokémon as-is)", {
    sameRef: sameRef(original, copy), // true → returned as-is
    fnResult: copy("Pikachu", "Thunderbolt") // example invocation
  });
}


