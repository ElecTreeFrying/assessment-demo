/**
 * Sample: Symbols and non-enumerable properties (Pokémon)
 * Demonstrates: deepCopy copies symbol-keyed props and non-enumerable props with descriptors.
 * Mutations: copy[S].deep = 999
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const SYMBOLS_NONENUM_FIXTURE = (() => {
  const S = Symbol("s");
  const obj = {};
  Object.defineProperty(obj, "hidden", { value: 7, enumerable: false });
  obj[S] = { deep: 1 };
  return { original: obj, symbol: S };
})();

export function run() {
  const { original, symbol: S } = SYMBOLS_NONENUM_FIXTURE;
  const copy = deepCopy(original);
  copy[S].deep = 999;
  log("Symbols + non-enumerables", {
    hasHidden_copy: Object.prototype.hasOwnProperty.call(copy, "hidden"), // true → non-enumerable prop exists
    hiddenEnumerable: Object.getOwnPropertyDescriptor(copy, "hidden").enumerable, // false → descriptor preserved
    symbolSeparate: sameRef(original[S], copy[S]) // false → symbol-keyed value cloned
  });
}


