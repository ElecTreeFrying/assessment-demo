/**
 * Map equality
 * - Keys compared by deep equality, values compared per matched key.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Map ===");
  const ka = { id: 1 }, kb = { id: 1 };
  const m1 = new Map([[ka, { v: 10 }], ["s", 2]]);
  const m2 = new Map([[{ id: 1 }, { v: 10 }], ["s", 2]]);
  const m3 = new Map([[kb, { v: 10 }], ["s", 3]]);
  check("deep equal, order-independent \"(Equal)\"", m1, m2, true);
  check("value differs \"(Not Equal)\"", m1, m3, false);
}


