import { RouterModule } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { UiDemoNav, UiDemoNavImage, UiDemoNavText } from '@ect/ui/demo-nav';
import { TemplateRepeater } from './template-repeater';
import { UiPokemonCard } from 'src/app/ui/pokemon-card';

const COMPONENTS = [
  UiDemoNav,
  UiDemoNavImage,
  UiDemoNavText,
  UiPokemonCard,
  TemplateRepeater
];

export const imports = [
  RouterModule,
  AsyncPipe,
  NgOptimizedImage,
  COMPONENTS
];

export const viewProviders = [
];
