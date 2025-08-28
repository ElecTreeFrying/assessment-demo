/**
 * Deeply clones a JavaScript value with broad built-in support and strong guarantees:
 *
 * - **Recurses** through arrays, objects, and nested structures.
 * - **Preserves prototypes, own property descriptors, getters/setters, and Symbols.**
 * - **Handles cycles** using a WeakMap cache.
 * - **Clones**: Array, Object, Date, RegExp, Map, Set, ArrayBuffer, SharedArrayBuffer,
 *   DataView, all TypedArrays (incl. Node.js Buffer), URL, URLSearchParams, Error (incl. extra fields),
 *   and wrapper objects (new String/Number/Boolean).
 * - **Returns by reference** (not cloned): Promise, WeakMap, WeakSet, and functions.
 * - **Mirrors lock state** (non-extensible / sealed / frozen) from the source onto the clone **after** population.
 *
 * Notes:
 * - Functions are returned as-is (code/closure cloning is not meaningful).
 * - Streams/DOM nodes are not specially handled.
 * - For performance, only **own** properties are copied (including non-enumerables & Symbols).
 *
 * @template T
 * @param {T} input                               Value to deep-clone.
 * @param {WeakMap<object, any>} [cache=new WeakMap()]  Internal cache to break cycles and preserve graph shape.
 * @returns {T}                                   A structurally independent deep clone of `input`.
 *
 * @example
 * const a = { n: 1, d: new Date(), r: /x/g, m: new Map([[{k:1},{v:2}]]) };
 * const b = deepCopy(a);
 * b.m.forEach(v => v.v = 9);
 * console.log(a.m.values().next().value.v); // 2 (unchanged)
 *
 * @example
 * // Cycles:
 * const x = { name: 'root' }; x.self = x;
 * const y = deepCopy(x);
 * console.log(y !== x, y.self === y); // true, true
 */
export function deepCopy(input, cache = new WeakMap()) {

  /**
   * Apply the same "lock" state of `source` to `clone`:
   * - if `source` is frozen  → freeze `clone`
   * - if `source` is sealed  → seal `clone`
   * - if `source` is non-extensible → prevent extensions on `clone`
   *
   * Must be called **after** the clone has been fully populated,
   * otherwise sealing/freezing would block property definition.
   *
   * @param {any} clone
   * @param {any} source
   * @returns {any} The same `clone`, with lock state mirrored.
   */
  const mirrorLockState = (clone, source) => {
    if (Object.isFrozen(source))       return Object.freeze(clone);
    if (Object.isSealed(source))       return Object.seal(clone);
    if (!Object.isExtensible(source))  return Object.preventExtensions(clone);
    return clone;
  };

  // ----- Primitives & functions: return as-is -----
  if (input === null || typeof input !== "object") return input;
  if (typeof input === "function") return input;

  // ----- Cycles -----
  if (cache.has(input)) return cache.get(input);

  // ----- Arrays -----
  if (Array.isArray(input)) {
    const arr = new Array(input.length);
    cache.set(input, arr);
    for (let i = 0; i < input.length; i++) arr[i] = deepCopy(input[i], cache);
    return mirrorLockState(arr, input);
  }

  // ----- Date -----
  if (input instanceof Date) return mirrorLockState(new Date(input.getTime()), input);

  // ----- RegExp -----
  if (input instanceof RegExp) {
    const re = new RegExp(input.source, input.flags);
    re.lastIndex = input.lastIndex;
    return mirrorLockState(re, input);
  }

  // ----- URL / URLSearchParams -----
  if (typeof URL !== "undefined" && input instanceof URL) {
    return mirrorLockState(new URL(input.toString()), input);
  }
  if (typeof URLSearchParams !== "undefined" && input instanceof URLSearchParams) {
    return mirrorLockState(new URLSearchParams(input.toString()), input);
  }

  // ----- Map -----
  if (input instanceof Map) {
    const m = new Map();
    cache.set(input, m);
    input.forEach((v, k) => m.set(deepCopy(k, cache), deepCopy(v, cache)));
    return mirrorLockState(m, input);
  }

  // ----- Set -----
  if (input instanceof Set) {
    const s = new Set();
    cache.set(input, s);
    input.forEach(v => s.add(deepCopy(v, cache)));
    return mirrorLockState(s, input);
  }

  // ----- ArrayBuffer -----
  if (input instanceof ArrayBuffer) {
    return mirrorLockState(input.slice(0), input);
  }
  
  // ----- SharedArrayBuffer -----
  if (typeof SharedArrayBuffer !== "undefined" && input instanceof SharedArrayBuffer) {
    const copy = new SharedArrayBuffer(input.byteLength);
    new Uint8Array(copy).set(new Uint8Array(input));
    return mirrorLockState(copy, input);
  }

  // ----- DataView -----
  if (input instanceof DataView) {
    const bufCopy = deepCopy(input.buffer, cache);
    const view = new DataView(bufCopy, input.byteOffset, input.byteLength);
    return mirrorLockState(view, input);
  }

  // ----- Typed arrays (Int8Array, Uint8Array, Float32Array, etc.) -----
  if (ArrayBuffer.isView(input)) {
    const Ctor = input.constructor;
    const ta = new Ctor(input);
    return mirrorLockState(ta, input);
  }

  // ----- Error (preserve fields + own props) -----
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

  // ----- Wrapper objects -----
  if (input instanceof String || input instanceof Number || input instanceof Boolean) {
    const Ctor = input.constructor;
    return mirrorLockState(new Ctor(input.valueOf()), input);
  }

  // ----- Node Buffer (if present) -----
  if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(input)) {
    return mirrorLockState(Buffer.from(input), input);
  }

  // ----- Promise / WeakMap / WeakSet → return by reference (not meaningfully cloneable) -----
  if (input instanceof Promise || input instanceof WeakMap || input instanceof WeakSet) {
    return input;
  }

  // ----- Generic objects / class instances: preserve prototype + descriptors + symbols -----
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
