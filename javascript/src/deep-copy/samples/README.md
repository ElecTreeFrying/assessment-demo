# Deep Copy Samples (Pokémon Theme)

These standalone ES modules demonstrate how `deepCopy` behaves across JavaScript types using familiar Pokémon-flavored data. Each file can be run directly with Node and logs before/after details and identity checks.

## How to run

Use the npm scripts defined in `javascript/package.json`:

```bash
# Run the deep-copy examples entry
npm run start-deep-copy

# Hot-reload examples while editing (requires nodemon)
npm run dev-deep-copy
```

To run a single file directly, you can still invoke Node on that module.

## Samples index

- `plain-object.js` – nested object + array (Pikachu with stats, trainer, and moves)
- `array-top-level.js` – Pokémon team array (id, Pokémon object, moves)
- `null.js` – demonstrates primitives returned as-is
- `date.js` – Pokémon era date; shows new Date clone
- `regexp.js` – `/pikachu\d+/gi` with lastIndex preservation
- `map.js` – Trainer ↔ Partner map with deep-copied key and value
- `set.js` – Party Pokémon set; value cloned by reference
- `arraybuffer.js` – stats in bytes `[hp, attack, defense, speed]`
- `shared-array-buffer.js` – same as above (environment permitting)
- `dataview.js` – first byte as a stat; view rebuilt over cloned buffer
- `typedarray-int16.js` – Int16 stats array cloned
- `error.js` – Error with extra metadata (gym)
- `function-as-is.js` – functions returned as-is (uses move announcer)
- `promise.js` – promises returned as-is
- `weakmap-weakset.js` – weak collections returned as-is (trainer rank, active battle)
- `class-instance.js` – class instance with non-enumerables, getters, symbols
- `symbols-non-enumerables.js` – copies symbol-keyed and non-enumerable props
- `circular-refs.js` – Ditto self-reference preserved
- `url.js` – Pokémon API URL cloned
- `urlsearchparams.js` – Pokémon query parameters cloned
- `mirror-lock-state.js` – freeze/seal/non-extensibility mirrored on clone

## Utilities

- `_utils.js` – `log(title, value)` for structured output; `sameRef(a,b)` identity helper

## Console log field guide

Most samples print a small object describing the result. Here are the common fields you will see:

- `original`, `copy`: the source value and its clone. For buffers/typed arrays, these are printed as arrays of numbers for readability.
- `sameRef`, `sameRef_top`: strict-reference comparison (`===`). Expect `false` for cloned objects/arrays and `true` for values returned as-is (functions, Promise, WeakMap/WeakSet). In Node Buffer/SharedArrayBuffer examples we also show whether the references differ.
- `sameRef_nested`, `sameRef_arrayObj`, `sameRef_nestedObj`: reference checks for nested parts (e.g., nested object or array element). Expect `false` if deepCopy correctly broke references.
- `originalISO`, `copyISO`: serialized Date values.
- `originalBytes`, `copyBytes`: byte views for ArrayBuffer/SharedArrayBuffer clones.
- `originalFirst`, `copyFirst`: representative byte read from DataView.
- `originalFirstVal`, `copyFirstVal`: first Map value before/after mutation of the copy.
- `keySameRef`: whether a Map key in the clone is a different reference than the original key (should be `false` since keys are cloned too).
- `weakMapSameRef`, `weakSetSameRef`: show that weak collections are returned as-is (expect `true`).
- `originalHref`, `copyHref`: stringified URLs before/after changes to the copy.
- `originalName`, `originalMsg`, `originalMeta`, `copyName`, `copyMsg`, `copyMeta`: fields from cloned Error instances (including custom metadata).
- `originalGreet`, `copyGreet`, `isPerson`, `hasNonEnumId_copy`, `symbolClonedSeparateRef`: integrity checks for class-instance cloning (prototype/descriptor/symbol behavior).
- `hasHidden_copy`, `hiddenEnumerable`, `symbolSeparate`: verifies cloning of non-enumerable and symbol-keyed properties.
- `selfPointsToSelf`, `notOriginal` (or `transform === copy` in the Ditto example): confirms cycles are preserved and clone is distinct from the original.
- `fnResult`: output of a function to demonstrate function identity (functions are returned as-is).

Per-sample highlights:

- Plain object: `sameRef_top`, `sameRef_nested`, `sameRef_arrayObj`
- Array team: `sameRef_top`, `sameRef_nestedObj`
- Date: `originalISO`, `copyISO`, `sameRef`
- RegExp: `original` vs `copy` object with `{ source, flags, lastIndex }`
- Map: `originalFirstVal`, `copyFirstVal`, `keySameRef`
- Set: `originalItem`, `copyItem`, `sameRef`
- ArrayBuffer/SharedArrayBuffer: `originalBytes`, `copyBytes`, `sameRef`
- DataView: `originalFirst`, `copyFirst`, `sameRef`
- TypedArray: `original`, `copy`, `sameRef`
- Error: `originalName`, `originalMsg`, `originalMeta`, `copyName`, `copyMsg`, `copyMeta`, `sameRef`
- Function: `sameRef`, `fnResult`
- Promise: `sameRef` (should be true)
- WeakMap/WeakSet: `weakMapSameRef`, `weakSetSameRef` (should be true)
- Class instance: `originalGreet`, `copyGreet`, `isPerson`, `hasNonEnumId_copy`, `symbolClonedSeparateRef`
- Symbols/non-enumerables: `hasHidden_copy`, `hiddenEnumerable`, `symbolSeparate`
- Circular refs (Ditto): `name`, `selfPointsToSelf`, `notOriginal`

## Notes for reviewers

- Each script isolates a single concern so behavior is easy to verify.
- Console output highlights identity expectations (e.g., `sameRef_top`, `keySameRef`).
- The Pokémon theme provides intuitive, real-world-ish structures while exercising cloning semantics.
