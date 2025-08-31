## Assessment Exam – Project Overview

This repository contains two projects demonstrating solutions for the assessment exam:

- **javascript/** – Standalone Node.js demos showcasing deep copy, deep equality, and a snippet executor
- **angular/** – An Angular 20.2.2 demo app using modern standalone patterns and signals

Use the sections below for a quick start, then read each project's README for full details.

## JavaScript (Node.js demos)

Location: `javascript/`

Includes three feature directories under `src/`:
- `deep-copy/` – robust deep cloning utility with Pokémon‑themed samples
- `deep-equal/` – comprehensive deep equality with special rule `null` ≍ `undefined`
- `snippet-executor/` – isolated code runner with `$math` and `$logger`

Quick start:

```bash
cd javascript
npm install

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

Read more: [javascript/README.md](javascript/README.md)

## Angular (Assessment Demo App)

Location: `angular/`

An Angular 20.2.2 application demonstrating modern standalone Angular, signals, and a small set of reusable UI components. It renders legendary Pokémon from Generations 1–4.

Quick start:

```bash
cd angular
npm install
npm start      # open http://localhost:4200
```

Read more: [angular/README.md](angular/README.md)

## Notes for Reviewers

- Each project includes thorough README documentation and runnable demos.
- JavaScript demos are side‑effect‑free when imported and emit structured console logs for easy verification.
- Angular demo follows standalone component patterns and uses signals and the new control flow.


