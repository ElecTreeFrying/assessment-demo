/**
 * Sample: Map (Trainer ↔ Partner)
 * Demonstrates: deepCopy clones Map keys and values deeply; cloned keys are different refs.
 * Mutations: copyVal.friendship = 99
 * Expected identity: keySameRef === false for original vs copied key
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

function createMapFixture() {
  const k = { trainer: "Ash", partner: "Pikachu" };
  return { original: new Map([[k, { friendship: 10 }]]), key: k };
}

export function run() {
  const { original, key: k } = createMapFixture();
  const copy = deepCopy(original);
  const [copyKey, copyVal] = copy.entries().next().value;
  copyVal.friendship = 99;
  log("Map (Trainer ↔ Partner)", {
    originalFirstVal: original.get(k).friendship, // original map value
    copyFirstVal: copyVal.friendship, // value inside cloned map
    keySameRef: sameRef(k, copyKey) // false → map key cloned
  });
}


