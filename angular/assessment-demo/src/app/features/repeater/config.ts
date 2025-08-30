import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { DemoNav, DemoNavImage, DemoNavText } from '@ect/ui/demo-nav';

const COMPONENTS = [
  DemoNav,
  DemoNavImage,
  DemoNavText
];

export const imports = [
  RouterModule,
  NgOptimizedImage,
  COMPONENTS
];

export const viewProviders = [
];
