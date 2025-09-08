import { UiPokemonCard } from 'src/app/ui/pokemon-card';

import { KantoService } from './kanto-service';
import { UiButton } from '@ect/ui/button';

const COMPONENTS = [
  UiPokemonCard,
  UiButton
];

export const imports = [
  COMPONENTS
];

export const viewProviders = [
  KantoService
];
