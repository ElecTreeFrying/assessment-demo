/**
 * RegExp equality
 * - Equal if source, flags, and lastIndex match.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== RegExp ===");
  const r1 = /foo\d+/gi; r1.lastIndex = 3;
  const r2 = /foo\d+/gi; r2.lastIndex = 3;
  const r3 = /foo\d+/g;  r3.lastIndex = 3;
  const r4 = /foo\d+/gi; r4.lastIndex = 0;
  check("same source/flags/lastIndex \"(Equal)\"", r1, r2, true);
  check("different flags \"(Not Equal)\"", r1, r3, false);
  check("different lastIndex \"(Not Equal)\"", r1, r4, false);
}


