/**
 * Set equality
 * - Membership compared by deep equality; order does not matter.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Set ===");
  const s1 = new Set([{ a: 1 }, { b: 2 }]);
  const s2 = new Set([{ b: 2 }, { a: 1 }]);
  const s3 = new Set([{ a: 1 }, { b: 3 }]);
  check("same members \"(Equal)\"", s1, s2, true);
  check("member differs \"(Not Equal)\"", s1, s3, false);
}


