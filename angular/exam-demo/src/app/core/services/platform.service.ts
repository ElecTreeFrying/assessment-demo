import { Injectable, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser: boolean = isPlatformBrowser(this.platformId);
  readonly isServer: boolean = isPlatformServer(this.platformId);

  /**
   * Run a function only in the browser (immediately).
   */
  ifBrowser<T>(fn: () => T): T | undefined {
    if (this.isBrowser) return fn();
    return undefined;
  }

  /**
   * Run a function only in the browser, **after** the first client render/hydration.
   */
  browserAfterRender(fn: () => void): void {
    if (this.isBrowser) {
      afterNextRender(() => fn());
    }
  }

}
