import { NgOptimizedImage, TitleCasePipe } from "@angular/common";
import { MatRippleModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";

import { Repeater } from "./repeater/repeater";

const COMPONENTS = [
  Repeater
];

export const imports = [
  MatCardModule,
  NgOptimizedImage,
  TitleCasePipe,
  MatRippleModule,
  COMPONENTS
];

export const viewProviders = [
];
