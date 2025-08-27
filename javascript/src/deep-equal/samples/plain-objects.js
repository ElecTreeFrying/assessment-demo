/**
 * Plain Objects
 * - Demonstrates nested object equality, prototype differences, and null vs undefined property.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Plain Objects ===");
  const a = { x: 1, y: { z: 2 } };
  const b = { x: 1, y: { z: 2 } };
  check("identical nested \"(Equal)\"", a, b, true);

  const c1 = { m: 1, n: { p: null } };
  const c2 = { m: 1, n: {} }; // n.p is undefined
  check("null property ≍ missing (undefined) \"(Equal)\"", c1, c2, true);

  function C() { this.v = 1; }
  C.prototype.g = function(){};
  const p1 = new C();
  const p2 = { v: 1 };
  check("different prototypes \"(Not Equal)\"", p1, p2, false);
}


