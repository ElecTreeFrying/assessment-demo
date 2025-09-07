/**
 * Error equality
 * - Same constructor, name, message, and deep-equal extra own props.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Error ===");
  const e1 = new TypeError("Oops"); e1.meta = { where: "A" };
  const e2 = new TypeError("Oops"); e2.meta = { where: "A" };
  const e3 = new TypeError("Oops!");
  check("same name/msg/props \"(Equal)\"", e1, e2, true);
  check("different message \"(Not Equal)\"", e1, e3, false);
}


