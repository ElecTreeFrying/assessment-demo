/**
 * Circular references
 * - Uses cache to compare cyclic graphs safely.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Circular References ===");
  const a1 = { n: 1 }; a1.self = a1;
  const a2 = { n: 1 }; a2.self = a2;
  const a3 = { n: 2 }; a3.self = a3;
  check("same shape cycle", a1, a2, true);
  check("different inside cycle", a1, a3, false);
}


