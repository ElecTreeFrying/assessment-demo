/**
 * TypedArrays and Node Buffer equality
 * - Same constructor, length, and element values.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== TypedArrays ===");
  const t1 = new Int16Array([10, 20, 30]);
  const t2 = new Int16Array([10, 20, 30]);
  const t3 = new Int16Array([10, 999, 30]);
  check("Int16 \"(Equal)\"", t1, t2, true);
  check("Int16 \"(Not Equal)\"", t1, t3, false);

  if (typeof Buffer !== "undefined" && Buffer.isBuffer) {
    const b1 = Buffer.from([1,2,3]);
    const b2 = Buffer.from([1,2,3]);
    const b3 = Buffer.from([1,2,4]);
    check("Node Buffer \"(Equal)\"", b1, b2, true);
    check("Node Buffer \"(Not Equal)\"", b1, b3, false);
  } else {
    console.log("(Node Buffer not available)");
  }
}


