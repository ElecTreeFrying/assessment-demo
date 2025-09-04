/**
 * Symbols & Non-enumerables
 * - Objects with symbol keys and non-enumerable properties.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Symbols & Non-enumerables ===");
  const S1 = Symbol("s1"), S2 = Symbol("s2");

  const a = {};
  Object.defineProperty(a, "hidden", { value: 7, enumerable: false });
  a[S1] = { deep: 1 };
  a[S2] = 42;

  const b = {};
  Object.defineProperty(b, "hidden", { value: 7, enumerable: false });
  b[S1] = { deep: 1 };
  b[S2] = 42;

  check("symbol & non-enum \"(Equal)\"", a, b, true);

  b[S1].deep = 99;
  check("symbol value differs", a, b, false);
}


