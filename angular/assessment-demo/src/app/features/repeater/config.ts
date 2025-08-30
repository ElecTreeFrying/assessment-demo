import { RouterModule } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { DemoNav, DemoNavImage, DemoNavText } from '@ect/ui/demo-nav';
import { RepeaterService } from './repeater-service';
import { PokemonCard } from 'src/app/ui/pokemon-card';

const COMPONENTS = [
  DemoNav,
  DemoNavImage,
  DemoNavText,
  PokemonCard
];

export const imports = [
  RouterModule,
  AsyncPipe,
  NgOptimizedImage,
  COMPONENTS
];

export const viewProviders = [
  RepeaterService
];
