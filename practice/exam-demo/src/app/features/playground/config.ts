import { RouterLink, RouterOutlet } from '@angular/router';

import { UiDemoNav, UiDemoNavText } from '@ect/ui/demo-nav';
import { UiButton } from '@ect/ui/button';
import { PlaygroundService } from './playground-service';

const COMPONENTS = [
  UiDemoNav,
  UiDemoNavText,
  UiButton
];

export const imports = [
  RouterOutlet,
  RouterLink,
  COMPONENTS
];

export const viewProviders = [
  PlaygroundService
];
