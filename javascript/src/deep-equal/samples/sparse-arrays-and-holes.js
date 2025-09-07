/**
 * Sparse Arrays & Holes
 * - Holes compare equal to undefined; undefined ≍ null per rule.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Sparse Arrays & Holes ===");
  const hole = Array(3);
  const withUndef = [undefined, undefined, undefined];
  const withNull = [null, null, null];

  check("holes vs undefined entries", hole, withUndef, true);
  check("undefined vs null (≍ by rule)", withUndef, withNull, true);
  check("holes vs explicit null", hole, withNull, true);
}


