import { RouterModule } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { UiDemoNav, UiDemoNavImage, UiDemoNavText } from '@ect/ui/demo-nav';
import { UiPokemonCard } from 'src/app/ui/pokemon-card';
import { SortSelection } from './sort-selection';
import { SortByPipe } from './sort.pipe';

const COMPONENTS = [
  UiDemoNav,
  UiDemoNavImage,
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
  NgOptimizedImage,
  COMPONENTS,
  PIPES
];
