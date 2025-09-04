import { Directive, inject, Renderer2, ElementRef, OnInit, DestroyRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * RouteGradientDirective
 *
 * Purpose
 * - Applies a background gradient on the host element based on the active route.
 * - Listens to Router NavigationEnd events and updates styles accordingly.
 *
 * Behavior
 * - '/sorting-pipe' → action-red → lime
 * - '/repeater'     → action-purple → lime
 * - default         → teal → mix → lime
 */
@Directive({
  selector: '[appRouteGradient]',
  standalone: true
})
export class RouteGradientDirective implements OnInit {

  private readonly router = inject(Router);
  private readonly renderer = inject(Renderer2);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {

    this.applyForUrl(this.router.url);

    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap(e => this.applyForUrl(e.urlAfterRedirects || e.url)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  private applyForUrl(url: string) {
    if (url.startsWith('/sorting-pipe')) {
      this.apply('background-gradient-red');
    } else if (url.startsWith('/repeater')) {
      this.apply('background-gradient-purple');
    } else {
      this.apply('background-gradient-default');
    }
  }

  private apply(backgroundClass: string) {
    this.el.nativeElement.className = ``;
    this.renderer.addClass(this.el.nativeElement, backgroundClass);
  }

}
