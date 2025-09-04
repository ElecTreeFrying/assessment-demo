/**
 * Primitives & Special Cases
 * - Demonstrates equality checks for primitives and null/undefined/NaN edge cases.
 */
import { isDeepEqual } from '../deep-equal.js';

export function run() {
  console.log("\n=== Assessment Exam / Javascript #2 Example ===");
  const data1 = { a: 17, b: { c: 'Test', d: null } };
  const data2 = { a: 17, b: { c: 'Test' } };
  const data3 = { a: 17, b: null };
  
  function check(label, a, b, expected) {
    const got = isDeepEqual(a, b);
    const pass = got === expected ? "PASS" : "FAIL";
    return `[${pass}] ${label} → ${got}`;
  };

  console.log('@@@ ', `
    const data1 = { a: 17, b: { c: 'Test', d: null } };
    const data2 = { a: 17, b: { c: 'Test' } };
    const data3 = { a: 17, b: null };
    [Example 1] check(data1, data2);
                -> ${check('Example 1', data1, data2, true)}
    [Example 2] check(data1, data3);
                -> ${check('Example 2', data1, data3, false)}
  `);
}
