/**
 * DataView equality
 * - Byte content, length, and offset must match.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== DataView ===");
  const buf1 = new ArrayBuffer(4), buf2 = new ArrayBuffer(4);
  const dv1 = new DataView(buf1), dv2 = new DataView(buf2);
  dv1.setUint8(0, 11); dv2.setUint8(0, 11);
  check("equal \"(Equal)\"", dv1, dv2, true);
  dv2.setUint8(1, 99);
  check("different \"(Not Equal)\"", dv1, dv2, false);
}


