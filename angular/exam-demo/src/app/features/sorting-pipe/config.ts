import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { UiDemoNav, UiDemoNavText } from '@ect/ui/demo-nav';
import { UiPokemonCard } from 'src/app/ui/pokemon-card';
import { SortSelection } from './sort-selection';
import { SortByPipe } from './sort.pipe';

const COMPONENTS = [
  UiDemoNav,
  UiDemoNavText,
  SortSelection,
  UiPokemonCard
];

const PIPES = [
  AsyncPipe,
  SortByPipe
];

export const imports = [
  RouterModule,
  COMPONENTS,
  PIPES
];
