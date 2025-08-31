# Assessment Demo – Reviewer Overview

This Angular 20.2.2 application demonstrates solutions to the assessment tasks using modern, standalone Angular patterns, signals, and a small set of reusable UI components. Data is sourced from PokeAPI; the app displays only legendary Pokémon from Generations 1–4.

## Quick start

```bash
npm install
npm start
# open http://localhost:4200
```

## Folder structure (high level)

```
src/app
  ├─ host/                 # App shell: routes, root directives, footer
  ├─ features/             # Feature pages and their sub-features
  │   ├─ sorting-pipe/     # Custom sorting pipe demo
  │   └─ repeater/         # Template repeater demo
  ├─ modules/              # Page-level UI blocks (footer, etc.)
  │   └─ footer-nav/
  ├─ ui/                   # Dumb/presentational components (reusable)
  │   ├─ button/
  │   ├─ demo-nav/
  │   └─ pokemon-card/
  └─ data-access/          # API services, models, utils

src/styles                 # Global/shared styles (SCSS partials)
```

### Pages (feature routes)
- `home` (homepage) – simple landing with project context and links to demos.
- `sorting-pipe` – demonstrates a custom, standalone pipe that sorts the legendary Pokémon list by name, height, weight, or color. Ascending by default; prefix the key with `-` for descending.
- `repeater` – demonstrates a reusable template repeater component which renders a projected template once per item. Used here with legendary Pokémon and the dumb card component.
- `not-found` – fallback route with a minimal page for unknown URLs.

### UI dumb components (`src/app/ui`)
- `button/` (`ect-button`) – small, stateless button supporting attribute variants (`actionRed`, `actionPurple`) and `tooltip`. Ripple via Material, applied using `hostDirectives`.
- `demo-nav/` (`ect-demo-nav`) – header block with image and projected title (`ect-demo-nav-text`), exported as a small bundle for convenience.
- `pokemon-card/` (`ect-pokemon-card`) – pure presentational card for a `PokeDetail`. Supports `gradientRed`/`gradientPurple` host classes for themed borders; optimized images via `NgOptimizedImage`.

### Feature components (`src/app/modules`)
- `footer-nav/` (`ect-footer-nav`) – sticky footer with links to demos and external resources.

### Data access (`src/app/data-access`)
- `api/pokemon-legendary/` contains:
  - `pokemon-legendary-api-service.ts` – fetches Pokémon + species and maps to a single `PokeDetail` model; exposes `legendaries$` stream.
  - `model/` – typed interfaces, `PokeDetail` domain model, small helpers.

Data source: [PokeAPI](https://pokeapi.co/). In this demo, we render only legendary Pokémon from Generations 1–4.

### Shared styles (`src/styles`)
- `_text-animations.scss` – gradient text utilities and animations used across UI.
- `_element-styles.scss` – element mixins (e.g., gradient borders).
- `_demo-page-styles.scss` – layout helpers (grids, spacing) used by demo pages.
- `_text-styles.scss` – text utilities (e.g., ellipsis helpers) shared across components.

Import pattern: within component SCSS, shared partials are imported via the short form
```scss
@use 'styles/text-animations' as textAnimation;
@use 'styles/element-styles' as elementStyles;
```
The build is configured with `stylePreprocessorOptions.includePaths: ['src']` so `styles/**` resolves to `src/app/styles/**`.

### TypeScript path aliases
`tsconfig.json` defines aliases for short, explicit imports:
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@ect/api/pokemon-legendary": ["./src/app/data-access/api/pokemon-legendary"],
      "@ect/ui/button": ["./src/app/ui/button"],
      "@ect/ui/demo-nav": ["src/app/ui/demo-nav"],
      "@ect/ui/custom-card": ["src/app/ui/custom-card"],
      "@ect/styles/*": ["src/app/styles/*"]
    }
  }
}
```

### Notable tools and references
- Angular 20.2.2 standalone APIs, signals, and the new control flow – [Angular Docs](https://angular.dev/)
- Angular Material (ripple, icon, tooltip) – [Material docs](https://material.angular.io/)
- PokeAPI – [https://pokeapi.co/](https://pokeapi.co/)

### Development
```bash
npm start        # dev server on :4200
npm run build    # production build
```

This README is a high-level reviewer guide for the assessment. For implementation details, explore the feature and ui folders.
