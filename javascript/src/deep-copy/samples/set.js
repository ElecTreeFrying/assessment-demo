/**
 * Sample: Set (Party Pokémon)
 * Demonstrates: deepCopy clones Set values deeply; copied value is a different reference.
 * Mutations: copyVal.level = 77
 * Expected identity: sameRef(v, copyVal) === false
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

function createSetFixture() {
  const v = { name: "Pikachu", level: 12 };
  return { original: new Set([v]), value: v };
}

export function run() {
  const { original, value: v } = createSetFixture();
  const copy = deepCopy(original);
  const [copyVal] = copy.values();
  copyVal.level = 77;
  log("Set (Party Pokémon)", {
    originalItem: v.level, // original object's level
    copyItem: copyVal.level, // level inside cloned set value
    sameRef: sameRef(v, copyVal) // false → value object cloned
  });
}


