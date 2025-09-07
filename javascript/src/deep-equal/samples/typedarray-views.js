/**
 * TypedArray views on same buffer
 * - Different offsets/lengths produce different views.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== TypedArray Views ===");
  const buf = new ArrayBuffer(8);
  const base = new Uint8Array(buf);
  base.set([1,2,3,4,5,6,7,8]);

  const v1 = new Uint8Array(buf, 0, 4);
  const v2 = new Uint8Array(buf, 0, 4);
  const v3 = new Uint8Array(buf, 2, 4);

  check("same slice \"(Equal)\"", v1, v2, true);
  check("different slice \"(Unequal)\"", v1, v3, false);
}


