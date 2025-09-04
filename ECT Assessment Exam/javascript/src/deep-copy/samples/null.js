/**
 * Sample: null
 * Demonstrates: primitives (including null) are returned as-is; identity comparison stays true.
 * Expected identity: original === copy (both null)
 */
import { deepCopy } from '../deep-copy.js';
import { log, sameRef } from './_utils.js';

const NULL_FIXTURE = null;

export function run() {
  const original = NULL_FIXTURE;
  const copy = deepCopy(original);
  log("null", {
    original, // null literal
    copy, // null returned by deepCopy
    sameRef: sameRef(original, copy) // true → primitives returned as-is
  });
}


