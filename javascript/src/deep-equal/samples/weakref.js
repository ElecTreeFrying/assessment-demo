/**
 * WeakRef equality
 * - Compares dereferenced targets using deep equality.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== WeakRef ===");
  if (typeof WeakRef !== "undefined") {
    const target = { a: 1 };
    const w1 = new WeakRef(target);
    const w2 = new WeakRef(target);
    check("WeakRef same target \"(Equal)\"", w1, w2, true);

    const w3 = new WeakRef({ a: 1 });
    const w4 = new WeakRef({ a: 1 });
    check("WeakRef deep-equal targets \"(Equal)\"", w3, w4, true);
  } else {
    console.log("(WeakRef not available)");
  }
}


