import { JsonPipe, NgTemplateOutlet } from "@angular/common";

import { UiPokemonCard } from "src/app/ui/pokemon-card";

const COMPONENTS = [
  UiPokemonCard
];

export const imports = [
  NgTemplateOutlet,
  JsonPipe,
  COMPONENTS
];
