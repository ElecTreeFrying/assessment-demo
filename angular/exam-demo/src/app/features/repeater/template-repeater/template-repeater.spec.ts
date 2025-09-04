import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { TemplateRepeater } from './template-repeater';

@Component({
  template: `
    <repeater [option]="items">
      <ng-template let-item>
        <div class="row">{{ item }}</div>
      </ng-template>
    </repeater>
  `,
  standalone: true,
  imports: [ TemplateRepeater ]
})
class HostCmp {
  items = [ 'A', 'B', 'C' ];
}

describe('TemplateRepeater', () => {
  it('renders once per item', async () => {

    await TestBed.configureTestingModule({
      imports: [HostCmp],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    const fixture = TestBed.createComponent(HostCmp);
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('.row');
    expect(rows.length).toBe(3);
  });
});
