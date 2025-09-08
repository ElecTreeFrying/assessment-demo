import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { SortPipe } from './sort-pipe';

const PIPES = [
  SortPipe
];

export const imports = [
  NgOptimizedImage,
  MatRippleModule,
  MatCardModule,
  TitleCasePipe,
  PIPES
];

export const viewProviders = [
];
