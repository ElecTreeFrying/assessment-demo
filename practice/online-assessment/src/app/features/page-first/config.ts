import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PageFirstService } from "./page-first-service";

export const imports = [
  NgOptimizedImage,
  AsyncPipe,
  JsonPipe,
  MatCardModule
];

export const viewProviders = [
  PageFirstService
];
