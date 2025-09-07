/**
 * Map/Set edge keys: NaN, ±0, deep object keys
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Map/Set Edge Keys ===");
  const m1 = new Map([[NaN, "x"], [+0, "a"], [{k:1}, {v:2}]]);
  const m2 = new Map([[NaN, "x"], [-0, "a"], [{k:1}, {v:2}]]);
  check("Map with NaN/+0/-0/obj keys", m1, m2, true);

  const s1 = new Set([NaN, -0, {k:1}]);
  const s2 = new Set([NaN, +0, {k:1}]);
  check("Set with NaN & ±0 & obj", s1, s2, true);
}


