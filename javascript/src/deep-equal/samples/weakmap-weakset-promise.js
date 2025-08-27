/**
 * WeakMap / WeakSet / Promise (reference equality only)
 * - Deep equality does not enumerate weak collections; promises compared by reference.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== WeakMap / WeakSet / Promise ===");
  const wm1 = new WeakMap(), wm2 = new WeakMap();
  const ws1 = new WeakSet(), ws2 = new WeakSet();
  const p = Promise.resolve(1);
  check("WeakMap different refs \"(Not Equal)\"", wm1, wm2, false);
  check("WeakSet different refs \"(Not Equal)\"", ws1, ws2, false);
  check("Promise same ref \"(Equal)\"", p, p, true);
  check("Promise different refs \"(Not Equal)\"", Promise.resolve(1), Promise.resolve(1), false);
}


