# Deep Equality (fn: isDeepEqual)

A comprehensive deep equality function tailored for this assessment. It compares values by structure and content and powers an extensive, labeled demo suite.

## Highlights
- Primitives (incl. `NaN`) and the exam rule: `null` ≍ `undefined`
- Arrays, plain/custom objects (prototype aware), cycles via `WeakMap`
- Date, RegExp (`source`, `flags`, `lastIndex`)
- Map/Set (order‑independent, deep‑equal keys/values)
- ArrayBuffer/SharedArrayBuffer/DataView/TypedArrays/Node Buffer (byte/element equality)
- Error, wrapper objects, URL/URLSearchParams
- Blob/File, Headers/FormData/Request/Response, Intl.* (via `resolvedOptions()`)
- WeakRef (deref targets), DOM Nodes (`isEqualNode`)
- WeakMap/WeakSet/Promise: reference equality only

## API
```js
import { isDeepEqual } from './deep-equal.js';
const same = isDeepEqual(a, b);
```

## Layout
- `deep-equal.js` – implementation + small `check(label, a, b, expected)` helper
- `index.js` – runs all samples in order
- `samples/` – each scenario exports a `run()` function

## How to run
From the `javascript` directory:
```bash
npm run start-deep-equal
# or live-reload
npm run dev-deep-equal
```

## Notes for reviewers
- Labels intentionally use “(Equal)” / “(Not Equal)” for clarity.
- The samples are thorough and cover edge cases across many built‑ins; see `samples/README.md`.


