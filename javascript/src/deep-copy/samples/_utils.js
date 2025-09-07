/**
 * log(title, value)
 * Utility to print a clear section header and a structured value.
 * Used across Pokémon-themed samples to make console output scannable.
 * - title: short string describing the sample
 * - value: any JSON-serializable (or inspectable) object
 */
export function log(title, value) {
  console.log(`\n\n\n\n=== ${title} ===\n`);
  console.log(value);
}

/**
 * sameRef(a, b)
 * Simple identity helper that checks if two references point to the same object.
 * Helpful for verifying deepCopy produced a distinct clone (should be false for objects),
 * and also for cases intentionally returned as-is (Promises, WeakMap/WeakSet, functions).
 */
export function sameRef(a, b) {
  return a === b;
}
