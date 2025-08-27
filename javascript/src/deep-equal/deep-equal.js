
export function check(label, a, b, expected) {
  const got = isDeepEqual(a, b);
  const pass = got === expected ? "PASS" : "FAIL";
  console.log(`[${pass}] ${label} → ${got}`);
};

export function isDeepEqual(a, b, seen = new WeakMap()) {
  // Treat null & undefined as equal
  if (a == null && b == null) return true;
  // If only one side is nullish, not equal (handles object vs null)
  if (a == null || b == null) return false;

  // Fast path (incl. same object ref)
  if (a === b) return true;

  // NaN equality
  if (typeof a === "number" && typeof b === "number" && Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  // After null/undefined rule, types must match
  if (typeof a !== typeof b) return false;

  // Non-objects (string/boolean/bigint/symbol) already covered by === above
  if (typeof a !== "object") return false;

  // Cyclic refs
  const cached = seen.get(a);
  if (cached && cached === b) return true;
  seen.set(a, b);

  const brand = x => Object.prototype.toString.call(x); // cross-realm safe

  // ----- Arrays -----
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!(Array.isArray(a) && Array.isArray(b))) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!isDeepEqual(a[i], b[i], seen)) return false;
    return true;
  }

  // ----- Date -----
  if (brand(a) === "[object Date]" || brand(b) === "[object Date]") {
    return brand(a) === "[object Date]" && brand(b) === "[object Date]" &&
           a.getTime() === b.getTime();
  }

  // ----- RegExp -----
  if (brand(a) === "[object RegExp]" || brand(b) === "[object RegExp]") {
    return brand(a) === "[object RegExp]" && brand(b) === "[object RegExp]" &&
           a.source === b.source && a.flags === b.flags && a.lastIndex === b.lastIndex;
  }

  // ----- Map -----
  if (brand(a) === "[object Map]" || brand(b) === "[object Map]") {
    if (brand(a) !== "[object Map]" || brand(b) !== "[object Map]" || a.size !== b.size) return false;
    const used = new Set();
    outer: for (const [ka, va] of a) {
      let i = 0;
      for (const kb of b.keys()) {
        if (used.has(i)) { i++; continue; }
        if (isDeepEqual(ka, kb, seen)) {
          used.add(i);
          if (!isDeepEqual(va, b.get(kb), seen)) return false;
          continue outer;
        }
        i++;
      }
      return false;
    }
    return true;
  }

  // ----- Set -----
  if (brand(a) === "[object Set]" || brand(b) === "[object Set]") {
    if (brand(a) !== "[object Set]" || brand(b) !== "[object Set]" || a.size !== b.size) return false;
    const unmatched = Array.from(b);
    for (const va of a) {
      const idx = unmatched.findIndex(vb => isDeepEqual(va, vb, seen));
      if (idx === -1) return false;
      unmatched.splice(idx, 1);
    }
    return true;
  }

  // ----- ArrayBuffer / SharedArrayBuffer -----
  if (brand(a) === "[object ArrayBuffer]" || brand(b) === "[object ArrayBuffer]" ||
      brand(a) === "[object SharedArrayBuffer]" || brand(b) === "[object SharedArrayBuffer]") {
    if (brand(a) !== brand(b)) return false;
    if (a.byteLength !== b.byteLength) return false;
    const ua = new Uint8Array(a), ub = new Uint8Array(b);
    for (let i = 0; i < ua.length; i++) if (ua[i] !== ub[i]) return false;
    return true;
  }

  // ----- DataView -----
  if (brand(a) === "[object DataView]" || brand(b) === "[object DataView]") {
    if (brand(a) !== "[object DataView]" || brand(b) !== "[object DataView]") return false;
    if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) return false;
    for (let i = 0; i < a.byteLength; i++) if (a.getUint8(i) !== b.getUint8(i)) return false;
    return true;
  }

  // ----- TypedArrays (includes Node Buffer) -----
  if (ArrayBuffer.isView(a) || ArrayBuffer.isView(b)) {
    if (!(ArrayBuffer.isView(a) && ArrayBuffer.isView(b))) return false;
    if (a.constructor !== b.constructor || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }

  // ----- Error -----
  if (brand(a).endsWith("Error]") || brand(b).endsWith("Error]")) {
    if (!brand(a).endsWith("Error]") || !brand(b).endsWith("Error]")) return false;
    if (a.name !== b.name || a.message !== b.message) return false;
    // compare extra own props below
  }

  // ----- Wrapper objects -----
  if ((brand(a) === "[object String]"  && brand(b) === "[object String]") ||
      (brand(a) === "[object Number]"  && brand(b) === "[object Number]") ||
      (brand(a) === "[object Boolean]" && brand(b) === "[object Boolean]")) {
    if (a.valueOf() !== b.valueOf()) return false;
    // extra own props below
  } else if (brand(a) === "[object String]"  || brand(b) === "[object String]" ||
             brand(a) === "[object Number]"  || brand(b) === "[object Number]" ||
             brand(a) === "[object Boolean]" || brand(b) === "[object Boolean]") {
    return false;
  }

  // ----- URL & URLSearchParams -----
  if (typeof URL !== "undefined" && (a instanceof URL || b instanceof URL)) {
    return (a instanceof URL) && (b instanceof URL) && a.href === b.href;
  }
  if (typeof URLSearchParams !== "undefined" &&
      (a instanceof URLSearchParams || b instanceof URLSearchParams)) {
    return (a instanceof URLSearchParams) && (b instanceof URLSearchParams) &&
           a.toString() === b.toString();
  }

  // ----- Blob / File -----
  if (typeof Blob !== "undefined" && (a instanceof Blob || b instanceof Blob)) {
    if (!(a instanceof Blob && b instanceof Blob)) return false;
    if (a.size !== b.size || a.type !== b.type) return false;
    if (typeof File !== "undefined" && (a instanceof File || b instanceof File)) {
      if (!(a instanceof File && b instanceof File)) return false;
      return a.name === b.name && a.lastModified === b.lastModified &&
             a.size === b.size && a.type === b.type;
    }
    return true;
  }

  // ----- Headers / FormData / Request / Response -----
  if (typeof Headers !== "undefined" && (a instanceof Headers || b instanceof Headers)) {
    if (!(a instanceof Headers && b instanceof Headers)) return false;
    return isDeepEqual(new Map(a.entries()), new Map(b.entries()), seen);
  }
  if (typeof FormData !== "undefined" && (a instanceof FormData || b instanceof FormData)) {
    if (!(a instanceof FormData && b instanceof FormData)) return false;
    return isDeepEqual(Array.from(a.entries()), Array.from(b.entries()), seen);
  }
  if (typeof Request !== "undefined" && (a instanceof Request || b instanceof Request)) {
    if (!(a instanceof Request && b instanceof Request)) return false;
    return a.url === b.url && a.method === b.method && a.mode === b.mode &&
           a.credentials === b.credentials && a.cache === b.cache &&
           a.redirect === b.redirect && a.referrer === b.referrer;
  }
  if (typeof Response !== "undefined" && (a instanceof Response || b instanceof Response)) {
    if (!(a instanceof Response && b instanceof Response)) return false;
    return a.status === b.status && a.statusText === b.statusText &&
           a.type === b.type && a.url === b.url;
  }

  // ----- Intl.* (compare resolvedOptions) -----
  if (typeof Intl !== "undefined") {
    const eqIntl = (Ctor) =>
      typeof Ctor === "function" && (a instanceof Ctor || b instanceof Ctor) &&
      (a instanceof Ctor) && (b instanceof Ctor) &&
      isDeepEqual(a.resolvedOptions?.(), b.resolvedOptions?.(), seen);
    if (eqIntl(Intl.Collator)) return true;
    if (eqIntl(Intl.DateTimeFormat)) return true;
    if (eqIntl(Intl.NumberFormat)) return true;
    if (eqIntl(Intl.PluralRules)) return true;
    if (eqIntl(Intl.RelativeTimeFormat)) return true;
    if (eqIntl(Intl.ListFormat)) return true;
    if (eqIntl(Intl.DisplayNames)) return true;
    if (eqIntl(Intl.Segmenter)) return true;
  }

  // ----- WeakRef -----
  if (typeof WeakRef !== "undefined" && (a instanceof WeakRef || b instanceof WeakRef)) {
    if (!(a instanceof WeakRef && b instanceof WeakRef)) return false;
    return isDeepEqual(a.deref?.(), b.deref?.(), seen);
  }

  // ----- DOM Nodes -----
  if (typeof Node !== "undefined" && (a instanceof Node || b instanceof Node)) {
    if (!(a instanceof Node && b instanceof Node)) return false;
    if (a === b) return true;
    if (typeof a.isEqualNode === "function") return a.isEqualNode(b);
    return false;
  }

  // ----- WeakMap / WeakSet / Promise → ref equality only (would have matched above if equal) -----
  if (brand(a) === "[object WeakMap]" || brand(b) === "[object WeakMap]" ||
      brand(a) === "[object WeakSet]" || brand(b) === "[object WeakSet]" ||
      brand(a) === "[object Promise]" || brand(b) === "[object Promise]") {
    return false;
  }

  // ----- Plain/custom objects: prototype + own keys (incl. symbols) -----
  if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;

  const keysA = Reflect.ownKeys(a);
  const keysB = Reflect.ownKeys(b);
  const unionKeys = new Set([...keysA, ...keysB]);
  for (const k of unionKeys) {
    const hasA = Object.prototype.hasOwnProperty.call(a, k);
    const hasB = Object.prototype.hasOwnProperty.call(b, k);
    const va = hasA ? a[k] : undefined;
    const vb = hasB ? b[k] : undefined;
    if (!isDeepEqual(va, vb, seen)) return false;
  }
  return true;
}
