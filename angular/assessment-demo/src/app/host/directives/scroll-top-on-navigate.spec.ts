import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { ScrollTopOnNavigateDirective } from './scroll-top-on-navigate';

@Component({
  template: '<div id="host" appScrollTopOnNavigate style="height:200px; overflow:auto;"><div style="height:2000px"></div></div>',
  standalone: true,
  imports: [ ScrollTopOnNavigateDirective ]
})
class HostCmp { }

describe('ScrollTopOnNavigateDirective', () => {
  it('scrolls to top on navigation', async () => {

    await TestBed.configureTestingModule({
      imports: [HostCmp],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([{ path: 'next', component: HostCmp }])
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(HostCmp);
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('#host') as HTMLElement;
    host.scrollTop = 100;

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/next');
    fixture.detectChanges();

    expect(host.scrollTop).toBe(0);
  });
});
