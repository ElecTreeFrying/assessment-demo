import { RouterModule } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { UiDemoNav, UiDemoNavText } from '@ect/ui/demo-nav';
import { TemplateRepeater } from './template-repeater';
import { UiPokemonCard } from 'src/app/ui/pokemon-card';

const COMPONENTS = [
  UiDemoNav,
  UiDemoNavText,
  UiPokemonCard,
  TemplateRepeater
];

export const imports = [
  RouterModule,
  AsyncPipe,
  COMPONENTS,
  JsonPipe
];
