/**
 * ArrayBuffer / SharedArrayBuffer equality
 * - Byte-wise comparison; prototypes must match.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== ArrayBuffer / SharedArrayBuffer ===");
  const ab1 = new ArrayBuffer(4); new Uint8Array(ab1).set([1,2,3,4]);
  const ab2 = new ArrayBuffer(4); new Uint8Array(ab2).set([1,2,3,4]);
  const ab3 = new ArrayBuffer(4); new Uint8Array(ab3).set([1,2,3,9]);
  check("ArrayBuffer \"(Equal)\"", ab1, ab2, true);
  check("ArrayBuffer \"(Not Equal)\"", ab1, ab3, false);

  if (typeof SharedArrayBuffer !== "undefined") {
    const sab1 = new SharedArrayBuffer(3); new Uint8Array(sab1).set([7,8,9]);
    const sab2 = new SharedArrayBuffer(3); new Uint8Array(sab2).set([7,8,9]);
    const sab3 = new SharedArrayBuffer(3); new Uint8Array(sab3).set([7,0,9]);
    check("SharedArrayBuffer \"(Equal)\"", sab1, sab2, true);
    check("SharedArrayBuffer \"(Not Equal)\"", sab1, sab3, false);
  } else {
    console.log("(SharedArrayBuffer not available)");
  }
}


