/**
 * Sample: DataView (Pokémon stat byte)
 * Demonstrates: deepCopy clones the buffer and creates a new DataView with same offsets.
 * Mutations: copy.setUint8(0, 99) // mutate hp byte
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const DATAVIEW_FIXTURE = (() => {
  const buf = new ArrayBuffer(4);
  const dv = new DataView(buf);
  // first byte encodes a simplified stat, e.g., hp
  dv.setUint8(0, 35);
  return dv;
})();

export function run() {
  const original = DATAVIEW_FIXTURE;
  const copy = deepCopy(original);
  copy.setUint8(0, 99);
  log("DataView (Pokémon stat byte)", {
    originalFirst: original.getUint8(0), // first byte (hp)
    copyFirst: copy.getUint8(0), // hp after mutation on the cloned view
    sameRef: sameRef(original, copy) // false → cloned DataView
  });
}


