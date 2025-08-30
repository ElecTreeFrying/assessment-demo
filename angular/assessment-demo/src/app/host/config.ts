import { RouterOutlet } from "@angular/router";
import { RouteGradientDirective } from "./route-gradient";

const DIRECTIVES = [
  RouteGradientDirective
];

export const imports = [
  RouterOutlet, 
  DIRECTIVES,
];

export const viewProviders = [
];
