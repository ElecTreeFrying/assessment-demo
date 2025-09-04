# Snippet Executor Samples

Showcase scripts for `execute()` using the `$math` and `$logger` built-ins. Each file exports a `run()` function and prints a short description before executing the snippet.

## How to run
From the `javascript` directory:
```bash
npm run start-snippet-executor
# or
npm run dev-snippet-executor
```

## Scenario overview
- `math-operations.js` – grouped demonstrations for SUMMATION, SUBTRACTION, MULTIPLICATION, DIVISION, MODULO, POWER, MINIMUM, MAXIMUM, AVERAGE, CLAMP, ABSOLUTE, SQUARE ROOT, FLOOR, CEIL, ROUND (DIGITS), RANDOM, RANDOM RANGE, RANDOM INT, HYPOTENUSE.

## What the logs show
- A description of the example (e.g., “Basic product: 6 × 7 = 42”)
- The snippet being executed (as a preview)
- The console output produced by the snippet via `$logger`

## Notes for reviewers
- Snippet names are inferred (e.g., `sum-snippet.js`, `multi-snippet.js`) for easier debugging.
- The `$math` API used by samples mirrors common numerical utilities to keep examples concise.
