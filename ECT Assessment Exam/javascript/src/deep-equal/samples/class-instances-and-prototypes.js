/**
 * Class instances & prototypes
 * - Instances are equal if same prototype chain and equal own properties.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Class Instances & Prototypes ===");
  class A { constructor(n){ this.n = n; } }
  class B extends A {}
  const a1 = new A(5), a2 = new A(5), b1 = new B(5);
  check("same class & fields \"(Equal)\"", a1, a2, true);
  check("different prototype (A vs B) \"(Not Equal)\"", a1, b1, false);
}


