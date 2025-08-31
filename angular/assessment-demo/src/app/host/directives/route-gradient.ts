import { Directive, inject, Renderer2, ElementRef, OnInit, DestroyRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appRouteGradient]',
  standalone: true
})
export class RouteGradientDirective implements OnInit {

  #router = inject(Router);
  #renderer = inject(Renderer2);
  #el = inject<ElementRef<HTMLElement>>(ElementRef);
  #destroyRef = inject(DestroyRef);

  ngOnInit() {

    this.#applyForUrl(this.#router.url);

    this.#router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap(e => this.#applyForUrl(e.urlAfterRedirects || e.url)),
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe();
  }

  #applyForUrl(url: string) {
    if (url.startsWith('/sorting-pipe')) {
      this.#apply('background-gradient-red');
    } else if (url.startsWith('/repeater')) {
      this.#apply('background-gradient-purple');
    } else {
      this.#apply('background-gradient-default');
    }
  }

  #apply(backgroundClass: string) {
    this.#el.nativeElement.className = ``;
    this.#renderer.addClass(this.#el.nativeElement, backgroundClass);
  }

}
