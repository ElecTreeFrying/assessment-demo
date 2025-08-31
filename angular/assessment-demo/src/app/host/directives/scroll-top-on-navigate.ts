import { Directive, ElementRef, inject, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appScrollTopOnNavigate]',
  standalone: true,
})
export class ScrollTopOnNavigateDirective {

  #router = inject(Router);
  #hostEl = inject(ElementRef<HTMLElement>).nativeElement;

  #navEnd = toSignal(
    this.#router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    { initialValue: null }
  );

  constructor() {
    effect(() => {
      if (!this.#navEnd()) return;
      this.#hostEl.scrollTo({ top: 0 });
    });
  }

}
