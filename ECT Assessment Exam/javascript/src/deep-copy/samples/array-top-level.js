/**
 * Sample: Pokémon team array (ID, Pokémon object, moves)
 * Demonstrates: deepCopy clones arrays and nested content; references are broken.
 * Mutations: copy[1].level = 99; copy[2].push("Iron Tail")
 * Expected identity: original !== copy; original[1] !== copy[1]
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const ARRAY_FIXTURE = [
  25,
  { name: "Pikachu", type: "Electric", level: 12 },
  ["Thunderbolt", "Quick Attack"]
];

export function run() {
  const original = ARRAY_FIXTURE;
  const copy = deepCopy(original);
  copy[1].level = 99;
  copy[2].push("Iron Tail");
  log("Array (Pokémon team)", {
    original, // team array: [id, pokemon object, moves array]
    copy, // cloned team array
    sameRef_top: sameRef(original, copy), // false → new array
    sameRef_nestedObj: sameRef(original[1], copy[1]) // false → nested object at index 1 cloned
  });
}


