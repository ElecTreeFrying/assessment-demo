import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { RouteGradientDirective } from './route-gradient';

@Component({
  template: '<div id="host" appRouteGradient></div>',
  standalone: true,
  imports: [ RouteGradientDirective ]
})
class HostCmp { }

describe('RouteGradientDirective', () => {
  it('applies gradient on navigation', async () => {

    await TestBed.configureTestingModule({
      imports: [HostCmp],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([{ path: 'sorting-pipe', component: HostCmp }])
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(HostCmp);
    fixture.detectChanges();

    const router = TestBed.inject(Router);

    await router.navigateByUrl('/sorting-pipe');
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#host') as HTMLElement;
    expect(el.classList.contains('background-gradient-red')).toBeTrue();
  });
});
