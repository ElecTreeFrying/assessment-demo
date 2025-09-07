/**
 * Headers casing & duplicates
 * - Case-insensitive header names; last value wins per spec.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Headers casing & duplicates ===");
  if (typeof Headers !== "undefined") {
    const h1 = new Headers([["X-Foo","1"],["x-foo","2"]]);
    const h2 = new Headers([["x-FOO","2"]]);
    check("Headers case-insensitive", h1, h2, true);
  } else {
    console.log("(Headers not available)");
  }
}


