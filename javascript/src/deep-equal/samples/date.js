/**
 * Date equality
 * - Equal if timestamps match.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Date ===");
  const d1 = new Date("2024-01-02T03:04:05Z");
  const d2 = new Date("2024-01-02T03:04:05Z");
  const d3 = new Date("2030-01-01T00:00:00Z");
  check("same time \"(Equal)\"", d1, d2, true);
  check("different time \"(Not Equal)\"", d1, d3, false);
}


