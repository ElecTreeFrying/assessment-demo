/**
 * Sample: Class instance (Trainer's Pokémon) with non-enumerables, getters, symbols
 * Demonstrates: deepCopy preserves prototype chain, descriptors, and symbol properties.
 * Mutations: copy.name = "Raichu"
 * Checks: instanceof Person, non-enumerable 'id' remains non-enumerable
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

function createPersonFixture() {
  const S = Symbol("secret");
  class Person {
    constructor(name, species) { this.name = name; this.species = species; Object.defineProperty(this, "id", { value: 25, enumerable: false }); }
    get upper() { return `${this.name.toUpperCase()} (${this.species})`; }
    greet() { return `I choose you, ${this.name}!`; }
  }
  const original = new Person("Pikachu", "Electric");
  original[S] = { hidden: true };
  return { original, Person, symbol: S };
}

export function run() {
  const { original, Person, symbol: S } = createPersonFixture();
  const copy = deepCopy(original);
  copy.name = "Raichu";
  log("Class instance (Trainer's Pokémon)", {
    originalGreet: original.greet(), // method from prototype
    copyGreet: copy.greet(), // should still work after cloning
    isPerson: copy instanceof Person, // true → prototype preserved
    hasNonEnumId_copy: Object.getOwnPropertyDescriptor(copy, "id").enumerable, // false → descriptor preserved
    symbolClonedSeparateRef: sameRef(original[S], copy[S]) // false → symbol-keyed prop deep-copied
  });
}


