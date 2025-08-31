import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { UiButton } from '@ect/ui/button';

const LIBRARIES = [
  UiButton
];

export const imports = [
  RouterModule,
  NgOptimizedImage,
  LIBRARIES
];
