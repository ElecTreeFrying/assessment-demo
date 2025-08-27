/**
 * Wrapper objects
 * - new String/Number/Boolean equality by value; primitives vs wrappers are not equal.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Wrapper Objects ===");
  check("new String \"(Equal)\"", new String("jam"), new String("jam"), true);
  check("new Number \"(Not Equal)\"", new Number(1), new Number(2), false);
  check("string primitive vs new String \"(Not Equal)\"", "jam", new String("jam"), false);
}


