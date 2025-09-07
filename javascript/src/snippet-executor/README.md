# Snippet Executor (fn: execute)

An isolated, debuggable JavaScript snippet runner with a small standard library (`$math`, `$logger`). It executes string code safely within a controlled scope and assigns a virtual filename for better stack traces.

## Highlights
- Injects user variables plus built-ins: `$math` (arithmetic/aggregation/random/geometry) and `$logger`
- Prevents user shadowing of control names (`$name`, `$math`, `$logger`)
- Derives a readable virtual filename from the code (e.g., `sum-snippet.js`) using `//# sourceURL`

## API
```js
import { execute } from './snippet-executor.js';
execute('$logger("sum:", $math.sum(a,b))', { a: 2, b: 3 });
```

### $math reference (selected)
- Arithmetic: `sum`, `sub`, `mul`, `div`, `mod`, `pow`
- Aggregates/bounds: `min`, `max`, `avg`, `clamp`
- Rounding/roots: `abs`, `sqrt`, `floor`, `ceil`, `round(digits=0)`
- Random: `random()`, `randomRange(min,max)`, `randInt(min,max)`
- Geometry: `hypot(...nums)`

## Layout
- `snippet-executor.js` – implementation and name inference helper
- `index.js` – runs the samples
- `samples/` – runnable examples (exports `run()`); see `math-operations.js`

## How to run
From the `javascript` directory:
```bash
npm run start-snippet-executor
# or live-reload
npm run dev-snippet-executor
```

## Notes for reviewers
- `samples/math-operations.js` prints a short description before each executed snippet and shows console output.
- The virtual filename makes the executed code easy to identify in debuggers.

