/**
 * -0 vs 0
 * - We treat them equal (Object.is distinguishes them).
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== -0 vs 0 ===");
  check("-0 vs 0 treated \"(Equal)\"", -0, 0, true);
}


