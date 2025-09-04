import { Directive } from '@angular/core';

import { RouteGradientDirective } from './route-gradient';
import { ScrollTopOnNavigateDirective } from './scroll-top-on-navigate';

/**
 * Provides a single, declarative attribute 
 * to attach multiple host behaviors to the root container element.
 */
@Directive({
  selector: '[appRootFeature]',
  standalone: true,
  hostDirectives: [
    RouteGradientDirective,
    ScrollTopOnNavigateDirective
  ]
})
export class RootFeatureDirective { }
