/**
 * Intl.* equality
 * - Compares resolvedOptions for supported Intl constructors.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Intl.* ===");
  if (typeof Intl !== "undefined") {
    check("Intl.DateTimeFormat \"(Equal)\"",
      new Intl.DateTimeFormat("en-US", { dateStyle: "long" }),
      new Intl.DateTimeFormat("en-US", { dateStyle: "long" }),
      true
    );
    check("Intl.NumberFormat \"(Not Equal)\" (options)",
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
      new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }),
      false
    );
  } else {
    console.log("(Intl not available)");
  }
}


