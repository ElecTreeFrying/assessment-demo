# Deep Copy (Assessment Guide)

This folder contains the deep copy implementation and Pokémon-themed examples that validate cloning across many JavaScript types.

## What deepCopy does

- Clones objects/arrays and nested structures
- Preserves prototypes, property descriptors (including non-enumerables), and symbols
- Handles circular references via WeakMap cache
- Mirrors object lock state on the clone (frozen, sealed, non-extensible)
- Byte-copies buffers, typed arrays, and DataView-backed memory
- Rebuilds special objects like Date, RegExp (including lastIndex), URL, URLSearchParams

## Returned as-is

- Promise, WeakMap, WeakSet, and functions (by design)

## Supported (cloned) types

Array, Object, class instances, Date, RegExp, Map, Set, ArrayBuffer, SharedArrayBuffer (if available), DataView, TypedArrays, Error, wrapper objects (new String/Number/Boolean), Node.js Buffer (if available), URL, URLSearchParams.

## API

```js
import { deepCopy } from './deep-copy.js';

const clone = deepCopy(value);
```

- Signature: `deepCopy(input, cache?)`
- Time: O(N) over the traversed graph
- Space: O(N) for cache + clone graph

## Layout

- `deep-copy.js` – the implementation
- `samples/` – runnable examples (standalone ES modules)

## How to run

Using the npm scripts defined in `javascript/package.json`:

```bash
# Run all deep-copy examples entry
npm run start-deep-copy

# Hot-reload examples during development (requires nodemon)
npm run dev-deep-copy
```

You can still run any specific file in `samples/` directly if you prefer.

## Reviewer notes

- The samples focus on tricky runtime entities (symbols, non-enumerables, DataView offsets, RegExp.lastIndex, lock states, cyclic graphs, etc.).
- The Pokémon theme keeps structures readable while still exercising deep copy semantics thoroughly.
