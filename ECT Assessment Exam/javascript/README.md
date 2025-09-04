# JavaScript Assessment Exam

This directory contains three core feature implementations for the assessment exam, each demonstrating advanced JavaScript concepts and comprehensive testing scenarios.

## Feature Directories

### [Deep Copy](./src/deep-copy/README.md)
**Function:** `deepCopy(value)`

A robust deep cloning utility that handles complex JavaScript types, circular references, and object metadata preservation. Includes prototype preservation, descriptor copying, and lock state mirroring.

**Key Features:**
- Handles 15+ JavaScript types (primitives, objects, arrays, dates, maps, sets, buffers, etc.)
- Circular reference detection with WeakMap
- Preserves prototypes, property descriptors, and object lock states
- Pokémon-themed demonstration samples

### [Deep Equality](./src/deep-equal/README.md)
**Function:** `isDeepEqual(a, b)`

A comprehensive deep equality comparison function that checks values by structure and content across all JavaScript built-in types, with special handling for the exam requirement that `null` and `undefined` are considered equal.

**Key Features:**
- Supports 20+ JavaScript types with specialized comparison logic
- Circular reference handling
- Special rule: `null` ≍ `undefined`
- Extensive edge case coverage with detailed test scenarios

### [Snippet Executor](./src/snippet-executor/README.md)
**Function:** `execute(code, variables)`

An isolated JavaScript code execution environment with injected variables and a custom math/logging library. Provides safe code evaluation with virtual file naming for debugging.

**Key Features:**
- Isolated execution scope with variable injection
- Built-in `$math` library (arithmetic, aggregation, geometry, random)
- Built-in `$logger` for output
- Virtual source URLs for debugger integration

## Quick Start

From this directory, run any of the demos:

```bash
# Deep Copy demos
npm run start-deep-copy        # Run once
npm run dev-deep-copy          # Live reload

# Deep Equality demos  
npm run start-deep-equal       # Run once
npm run dev-deep-equal         # Live reload

# Snippet Executor demos
npm run start-snippet-executor # Run once
npm run dev-snippet-executor   # Live reload
```

## Assessment Structure

Each feature directory contains:
- **Core implementation** (`*.js`) - The main function being assessed
- **Comprehensive samples** (`samples/`) - Individual test scenarios with detailed documentation
- **Entry point** (`index.js`) - Orchestrates all samples for demo execution
- **Documentation** (`README.md`) - Detailed feature overview and usage guide

## For Assessment Reviewers

- All implementations focus on correctness, edge case handling, and comprehensive testing
- Sample files include detailed comments explaining the purpose and expected behavior
- Console output is formatted for easy review with consistent field naming
- Each feature addresses specific JavaScript concepts: object manipulation, deep comparison, and code execution
