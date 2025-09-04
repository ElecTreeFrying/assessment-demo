# Deep Copy Samples

Standalone, Pokémon-themed demos that exercise the behavior of `deepCopy`. Each file exports a `run()` function and focuses on one idea so reviewers can quickly verify outcomes.

## How to run
From the `javascript` directory:
```bash
npm run start-deep-copy
# or live-reload during editing
npm run dev-deep-copy
```

## What you will see
Logs print a structured object per scenario. Common fields:
- `original`, `copy` – input and its deep clone
- `sameRef`, `sameRef_top`, `sameRef_nested` – reference checks (`===`) proving copies are independent
- `originalISO` / `copyISO`, `originalBytes` / `copyBytes`, `keySameRef`, etc. – per‑scenario helpers

## Scenarios overview
- `plain-object.js` – nested objects and arrays; mutating the clone does not affect the original
- `array-top-level.js` – array of Pokémon entries; nested object elements are cloned
- `null.js` – primitives returned as‑is
- `date.js` – `Date` cloned by timestamp
- `regexp.js` – `RegExp` source/flags and `lastIndex` preserved
- `map.js` / `set.js` – keys/values are deep‑cloned; references broken
- `arraybuffer.js`, `shared-array-buffer.js`, `dataview.js`, `typedarray-int16.js`, `node-buffer.js` – byte‑level clones
- `error.js` – `Error` with extra metadata is copied with descriptors
- `symbols-non-enumerables.js` – non‑enumerables and Symbols cloned with descriptors
- `class-instance.js` – class instance clone keeps prototype and getters/setters
- `function-as-is.js`, `promise.js`, `weakmap-weakset.js` – returned as‑is by design
- `url.js`, `urlsearchparams.js` – URL‑related objects cloned
- `circular-refs.js` – cycles preserved (clone points to itself)
- `mirror-lock-state.js` – freeze/seal/non‑extensible mirrored to the clone

## Notes for reviewers
- Inline comments next to log fields explain why each boolean should be true/false.
- The Pokémon theme provides realistic but readable structures that stress deep copy semantics.
