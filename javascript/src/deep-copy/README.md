# Deep Copy (fn: deepCopy)

A robust, side-effect-free deep cloning utility used for the assessment exam. The implementation in `deep-copy.js` focuses on correctness, prototype/descriptor preservation, circular reference handling, and realistic runtime types.

## Highlights
- Preserves prototypes, own property descriptors (incl. non-enumerables) and Symbols
- Handles cycles with a `WeakMap`
- Mirrors object lock state (frozen/sealed/non-extensible) on the clone
- Clones: Array, Object, Date, RegExp (with lastIndex), Map, Set, ArrayBuffer, SharedArrayBuffer, DataView, TypedArrays, Error (+ custom fields), wrapper objects, Node Buffer, URL, URLSearchParams
- Returns as-is: Promise, WeakMap, WeakSet, functions

## API
```js
import { deepCopy } from './deep-copy.js';
const clone = deepCopy(value);
```

## Layout
- `deep-copy.js` – core implementation
- `index.js` – orchestrates all samples; safe to import without side effects
- `samples/` – Pokémon-themed demonstrations (each file exports `run()`)

## How to run
From the `javascript` directory:
```bash
npm run start-deep-copy
# or live-reload
npm run dev-deep-copy
```

## Notes for reviewers
- Samples mutate the copy to prove references are broken and prototypes/descriptors preserved.
- Console output uses small, consistently named fields; see `samples/README.md` for a field guide.
