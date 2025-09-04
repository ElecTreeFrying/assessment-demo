/**
 * Function properties
 * - Functions are compared by reference; two distinct closures are not equal.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Function Properties ===");
  const f1 = () => 1, f2 = () => 1;
  const a = { fn: f1 }, b = { fn: f1 }, c = { fn: f2 };
  check("same function ref", a, b, true);
  check("different function instances", a, c, false);
}


