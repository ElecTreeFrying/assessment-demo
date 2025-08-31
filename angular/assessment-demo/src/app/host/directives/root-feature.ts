import { Directive } from '@angular/core';

import { RouteGradientDirective } from './route-gradient';
import { ScrollTopOnNavigateDirective } from './scroll-top-on-navigate';

@Directive({
  selector: '[appRootFeature]',
  standalone: true,
  hostDirectives: [
    RouteGradientDirective,
    ScrollTopOnNavigateDirective
  ]
})
export class RootFeatureDirective { }
