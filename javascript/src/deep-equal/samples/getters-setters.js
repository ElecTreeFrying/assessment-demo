/**
 * Getters / Setters
 * - Equality is based on returned values, not descriptor identity.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Getters/Setters ===");
  const make = (v) => Object.defineProperty({}, "x", { get() { return v; }, enumerable: true });
  const g1 = make(10), g2 = make(10), g3 = make(11);

  check("getter returns same", g1, g2, true);
  check("getter returns different", g1, g3, false);

  const e1 = Object.defineProperty({ y: 1 }, "z", { value: 2, enumerable: false });
  const e2 = Object.defineProperty({ y: 1 }, "z", { value: 2, enumerable: true });
  check("descriptor flags differ (we treat equal)", e1, e2, true);
}


