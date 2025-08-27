/**
 * Sample: Plain object with nested object and array (Pokémon-themed)
 * Demonstrates: deepCopy returns a new object, clones nested structures,
 *               and breaks references so mutations on the copy do not affect the original.
 * Mutations: copy.stats.attack = 99, copy.moves[1].power = 77
 * Expected identity: original !== copy; original.stats !== copy.stats; original.moves[1] !== copy.moves[1]
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const OBJECT_FIXTURE = {
  id: 25,
  name: "Pikachu",
  type: ["Electric"],
  stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
  trainer: { name: "Ash", badges: ["Boulder", "Cascade"] },
  moves: [
    { name: "Thunderbolt", power: 90, pp: 15 },
    { name: "Quick Attack", power: 40, pp: 30 }
  ]
};

export function run() {
  const original = OBJECT_FIXTURE;
  const copy = deepCopy(original);
  copy.stats.attack = 99;
  copy.moves[1].power = 77;
  log("Plain object (Pokémon)", {
    original, // source object (Pikachu)
    copy, // deep-cloned object (independently mutated)
    sameRef_top: sameRef(original, copy), // false → different top-level reference
    sameRef_nested: sameRef(original.stats, copy.stats), // false → nested object cloned
    sameRef_arrayObj: sameRef(original.moves[1], copy.moves[1]) // false → array item object cloned
  });
}


