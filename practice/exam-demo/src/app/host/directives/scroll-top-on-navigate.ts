import { Directive, ElementRef, inject, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { PlatformService } from '@ect/core/services';

/**
 * ScrollTopOnNavigateDirective
 *
 * Purpose
 * - Automatically scrolls the host element to top after each successful route navigation.
 *
 * Behavior
 * - Subscribes to Router NavigationEnd events (signalified via toSignal).
 * - Triggers hostEl.scrollTo({ top: 0 }) when navigation completes.
 */
@Directive({
  selector: '[appScrollTopOnNavigate]',
  standalone: true
})
export class ScrollTopOnNavigateDirective {

  private readonly router = inject(Router);
  private readonly hostEl = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly platform = inject(PlatformService)

  private readonly navEnd = toSignal(
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    { initialValue: null }
  );

  constructor() {
    effect(() => {
      if (!this.navEnd()) return;

      if (this.platform.isServer) return;
      this.hostEl.scrollTo({ top: 0 });
    });
  }

}
