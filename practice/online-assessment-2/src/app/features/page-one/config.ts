import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { SortPipe } from './sort-pipe';

const PIPES = [
  SortPipe
];

export const imports = [
  MatRippleModule,
  MatCardModule,
  NgOptimizedImage,
  TitleCasePipe,
  PIPES
];

export const viewProviders = [
];
