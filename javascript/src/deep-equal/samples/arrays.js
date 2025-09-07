/**
 * Arrays
 * - Demonstrates element-by-element equality and nested arrays.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Arrays ===");
  check("same content \"(Equal)\"", [1,2,3], [1,2,3], true);
  check("different length \"(Not Equal)\"", [1,2], [1,2,3], false);
  check("nested arrays \"(Equal)\"", [1,[2,3]], [1,[2,3]], true);
  check("array vs object \"(Not Equal)\"", [1,2], {0:1,1:2,length:2}, false);
}


