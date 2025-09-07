import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  MatToolbarModule,
  MatButtonModule
];

export const imports = [
  RouterLink,
  MODULES
];

export const viewProviders = [
];
