/**
 * DOM: Text & DocumentFragment (browser only)
 * - Uses isEqualNode for structural equality when available.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== DOM Text & Fragments ===");
  if (typeof document !== "undefined") {
    const t1 = document.createTextNode("hi");
    const t2 = document.createTextNode("hi");
    const t3 = document.createTextNode("hello");
    check("Text equal", t1, t2, true);
    check("Text not equal", t1, t3, false);

    const f1 = document.createDocumentFragment();
    const f2 = document.createDocumentFragment();
    const d1 = document.createElement("div"); d1.textContent = "x";
    const d2 = document.createElement("div"); d2.textContent = "x";
    f1.appendChild(d1); f2.appendChild(d2);
    check("DocumentFragment equal", f1, f2, true);
  } else {
    console.log("(DOM not available)");
  }
}


