import { Component, TemplateRef, input, contentChild, computed } from '@angular/core';

import { imports, viewProviders } from './config';

type Context<T> = {
  $implicit: T; item: T;
  index: number; count: number;
  first: boolean; last: boolean; even: boolean; odd: boolean;
};

@Component({
  selector: 'repeater',
  imports, viewProviders,
  template: `

    <ng-template #defaultTemplate let-item>
      <ect-pokemon-card [pokemon]="item" gradientPurple></ect-pokemon-card>
    </ng-template>

    @for (templateItem of items();let index = $index; track templateItem) {
      <ng-container
        [ngTemplateOutlet]="template() || defaultTemplate"
        [ngTemplateOutletContext]="context(index, templateItem)">
      </ng-container>
    }

  `
})
export class TemplateRepeater<T = unknown> {

  /** Array to repeat over (required) */
  readonly option = input.required<readonly T[]>({ alias: 'option' });

  /** Projected template; accessed as a signal */
  readonly template = contentChild<TemplateRef<Context<T>>>(TemplateRef);

  // --- derived signals ---
  readonly items = computed<readonly T[]>(() => this.option() ?? []);
  readonly count = computed(() => this.items().length);

  // Build the template context for each item
  context(index: number, templateItem: T): Context<T> {
    const count = this.count();
    return {
      $implicit: templateItem,
      item: templateItem,
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 === 1,
    };
  }

}
