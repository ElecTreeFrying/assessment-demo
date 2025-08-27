/**
 * deepCopy(input, cache?)
 *
 * Purpose
 * - Produce a structural clone of arbitrary JavaScript values while preserving:
 *   - Prototype chain for objects and class instances
 *   - Property descriptors (including non-enumerable, getters/setters) and symbols
 *   - Special object semantics (Date, RegExp.lastIndex, Map/Set entries, typed arrays, etc.)
 * - Avoid infinite recursion via a WeakMap cache and correctly replicate cyclic graphs
 * - Mirror the “lock state” (frozen / sealed / non-extensible) of the source object on the clone
 *
 * Design notes
 * - Primitives and functions are returned as-is; cloning them is either meaningless or unsafe
 * - Promise / WeakMap / WeakSet are returned by reference because:
 *   - Promises encapsulate async state that is not safely duplicate-able
 *   - Weak collections are non-enumerable by design and cannot be “cloned” meaningfully
 * - Node Buffer, ArrayBuffer, SharedArrayBuffer, DataView, and TypedArrays are copied by bytes
 * - Error instances preserve constructor, message, name, optional stack, and all own props
 * - Map keys and values, and Set values, are deep-copied recursively
 * - URL and URLSearchParams are reconstructed from their string representations
 *
 * Complexity
 * - Time: O(N) over the traversed object graph
 * - Space: O(N) for the cache plus the cloned graph
 *
 * Parameters
 * - input: unknown value to clone
 * - cache: WeakMap used to track already-cloned references (handles cycles and shared refs)
 *
 * Returns
 * - A deep clone for supported structures, or the original reference for returned-as-is types
 */
export function deepCopy(input, cache = new WeakMap()) {

  // Mirror preventExtensions / seal / freeze AFTER populating the clone
  const mirrorLockState = (clone, source) => {
    if (Object.isFrozen(source))       return Object.freeze(clone);
    if (Object.isSealed(source))       return Object.seal(clone);
    if (!Object.isExtensible(source))  return Object.preventExtensions(clone);
    return clone;
  };

  // Primitives & functions: return as-is
  if (input === null || typeof input !== "object") return input;
  if (typeof input === "function") return input;

  // Cycles
  if (cache.has(input)) return cache.get(input);

  // Arrays
  if (Array.isArray(input)) {
    const arr = new Array(input.length);
    cache.set(input, arr);
    for (let i = 0; i < input.length; i++) arr[i] = deepCopy(input[i], cache);
    return mirrorLockState(arr, input);
  }

  // Date
  if (input instanceof Date) return mirrorLockState(new Date(input.getTime()), input);

  // RegExp
  if (input instanceof RegExp) {
    const re = new RegExp(input.source, input.flags);
    re.lastIndex = input.lastIndex;
    return mirrorLockState(re, input);
  }

  // URL / URLSearchParams
  if (typeof URL !== "undefined" && input instanceof URL) {
    return mirrorLockState(new URL(input.toString()), input);
  }
  if (typeof URLSearchParams !== "undefined" && input instanceof URLSearchParams) {
    return mirrorLockState(new URLSearchParams(input.toString()), input);
  }

  // Map
  if (input instanceof Map) {
    const m = new Map();
    cache.set(input, m);
    input.forEach((v, k) => m.set(deepCopy(k, cache), deepCopy(v, cache)));
    return mirrorLockState(m, input);
  }

  // Set
  if (input instanceof Set) {
    const s = new Set();
    cache.set(input, s);
    input.forEach(v => s.add(deepCopy(v, cache)));
    return mirrorLockState(s, input);
  }

  // ArrayBuffer
  if (input instanceof ArrayBuffer) {
    return mirrorLockState(input.slice(0), input);
  }
  
  // SharedArrayBuffer
  if (typeof SharedArrayBuffer !== "undefined" && input instanceof SharedArrayBuffer) {
    const copy = new SharedArrayBuffer(input.byteLength);
    new Uint8Array(copy).set(new Uint8Array(input));
    return mirrorLockState(copy, input);
  }

  // DataView
  if (input instanceof DataView) {
    const bufCopy = deepCopy(input.buffer, cache);
    const view = new DataView(bufCopy, input.byteOffset, input.byteLength);
    return mirrorLockState(view, input);
  }

  // Typed arrays (Int8Array, Uint8Array, Float32Array, etc.)
  if (ArrayBuffer.isView(input)) {
    const Ctor = input.constructor;
    const ta = new Ctor(input);
    return mirrorLockState(ta, input);
  }

  // Error (preserve fields + own props)
  if (input instanceof Error) {
    const copy = new input.constructor(input.message);
    copy.name = input.name;
    if (input.stack) copy.stack = input.stack;
    cache.set(input, copy);
    Reflect.ownKeys(input).forEach(key => {
      if (key === "name" || key === "message" || key === "stack") return;
      const desc = Object.getOwnPropertyDescriptor(input, key);
      if (!desc) return;
      if ("value" in desc) desc.value = deepCopy(input[key], cache);
      Object.defineProperty(copy, key, desc);
    });
    return mirrorLockState(copy, input);
  }

  // Wrapper objects
  if (input instanceof String || input instanceof Number || input instanceof Boolean) {
    const Ctor = input.constructor;
    return mirrorLockState(new Ctor(input.valueOf()), input);
  }

  // Node Buffer (if present)
  if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(input)) {
    return mirrorLockState(Buffer.from(input), input);
  }

  // Promise / WeakMap / WeakSet → return by reference (not meaningfully cloneable)
  if (input instanceof Promise || input instanceof WeakMap || input instanceof WeakSet) {
    return input;
  }

  // Generic objects / class instances: preserve prototype + descriptors + symbols
  const proto = Object.getPrototypeOf(input);
  const out = Object.create(proto);
  cache.set(input, out);

  Reflect.ownKeys(input).forEach(key => {
    const desc = Object.getOwnPropertyDescriptor(input, key);
    if (!desc) return;
    if ("value" in desc) desc.value = deepCopy(input[key], cache);
    Object.defineProperty(out, key, desc);
  });

  return mirrorLockState(out, input);
}
