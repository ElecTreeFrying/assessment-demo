/**
 * DOM Nodes (browser only)
 * - Uses Node.isEqualNode when available.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== DOM Nodes ===");
  if (typeof document !== "undefined") {
    const d1 = document.createElement("div");
    d1.setAttribute("id", "x"); d1.textContent = "hi";
    const d2 = document.createElement("div");
    d2.setAttribute("id", "x"); d2.textContent = "hi";
    const d3 = document.createElement("div");
    d3.setAttribute("id", "y"); d3.textContent = "hi";
    check("DOM \"(Equal)\"", d1, d2, true);
    check("DOM \"(Not Equal)\"", d1, d3, false);
  } else {
    console.log("(DOM not available)");
  }
}


