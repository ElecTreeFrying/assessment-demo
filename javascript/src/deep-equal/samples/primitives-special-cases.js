/**
 * Primitives & Special Cases
 * - Demonstrates equality checks for primitives and null/undefined/NaN edge cases.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Primitives & Special Cases ===");
  check("number \"(Equal)\"", 42, 42, true);
  check("string \"(Not Equal)\"", "a", "b", false);
  check("boolean \"(Equal)\"", true, true, true);
  check("bigint \"(Equal)\"", 10n, 10n, true);
  const sym = Symbol("x");
  check("symbol same ref", sym, sym, true);
  check("symbol different refs", Symbol("x"), Symbol("x"), false);
  check("NaN ~ NaN", NaN, NaN, true);

  check("null ≍ undefined", null, undefined, true);
  check("null vs value", null, 0, false);
  check("undefined vs value", undefined, "", false);
}


