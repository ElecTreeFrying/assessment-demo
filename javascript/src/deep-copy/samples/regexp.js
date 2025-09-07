/**
 * Sample: RegExp (match 'pikachu' + digits)
 * Demonstrates: deepCopy preserves source, flags, lastIndex; returns a new RegExp.
 * Mutations: original.lastIndex = 3 (prior to copy)
 * Expected identity: original !== copy
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const REGEXP_FIXTURE = /pikachu\d+/gi;

export function run() {
  const original = REGEXP_FIXTURE;
  original.lastIndex = 3;
  const copy = deepCopy(original);
  log("RegExp (Pokémon)", {
    original: { source: original.source, flags: original.flags, lastIndex: original.lastIndex }, // source text, flags, and state
    copy: { source: copy.source, flags: copy.flags, lastIndex: copy.lastIndex }, // cloned values
    sameRef: sameRef(original, copy) // false → new RegExp instance
  });
}


