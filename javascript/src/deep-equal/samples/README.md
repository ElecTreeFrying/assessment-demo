# Deep-Equal Samples

Standalone demos that showcase `isDeepEqual` across primitives, built-ins, web platform types, and edge cases. Each file exports a `run()` function and prints concise `[PASS|FAIL]` lines.

## How to run
From the `javascript` directory:
```bash
npm run start-deep-equal
# or
npm run dev-deep-equal
```

## Console log field guide
Each line:
```
[PASS|FAIL] <Label> → <Result>
```
- Label ends with “(Equal)” or “(Not Equal)” to indicate the expected relationship
- Result is `isDeepEqual(a, b)`

Some demos also log structured objects with these common fields:
- `a`, `b`, `original`, `copy` – compared values
- `sameRef_*` – reference equality checks for subpaths
- Scenario‑specific fields such as `originalBytes/copyBytes`, `originalISO/copyISO`

## Scenario index (selected)
- `example.js` – the assessment example (`null` ≍ `undefined`) and object vs null
- Primitives & special: `primitives-special-cases.js`
- Structures: `arrays.js`, `plain-objects.js`
- Classic built-ins: `date.js`, `regexp.js`, `error.js`, `wrapper-objects.js`
- Collections: `map.js`, `set.js`
- Binary & views: `buffers.js`, `dataview.js`, `typedarrays-and-buffer.js`, `typedarray-views.js`
- URL & fetch: `url-and-searchparams.js`, `blob-file.js`, `fetch-apis.js`, `headers-casing.js`
- Intl: `intl.js`
- Advanced: `weakref.js`, `dom-nodes.js`, `weakmap-weakset-promise.js`, `circular-references.js`
- Extras: getters/setters, sparse arrays, -0 vs 0, function properties, class instances, map/set edge keys, DOM text/fragments

## Notes for reviewers
- Labels and comments explain why a case should be Equal or Not Equal.
- Coverage is wide to demonstrate correctness across runtimes and host objects when present.


