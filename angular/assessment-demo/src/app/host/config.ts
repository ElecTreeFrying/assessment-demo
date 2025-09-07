import { RouterOutlet } from "@angular/router";

import { FooterNav } from "@ect/feature/footer-nav";
import { RootFeatureDirective } from "./directives";

const COMPONENTS = [
  FooterNav
];

const DIRECTIVES = [
  RootFeatureDirective
];

export const imports = [
  RouterOutlet, 
  COMPONENTS,
  DIRECTIVES
];
