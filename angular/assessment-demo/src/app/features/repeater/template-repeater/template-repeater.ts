import { Component, TemplateRef, input, contentChild, computed } from '@angular/core';

/**
 * TemplateRepeater
 *
 * A lightweight, reusable repeater that renders a projected template once for
 * every element of an input array. The projected template receives the current
 * item as both `$implicit` and `item` to enable `let-item` syntax.
 *
 * Usage:
 *   <repeater [option]="items">
 *     <ng-template let-item>
 *       <div>{{ item.name }}</div>
 *     </ng-template>
 *   </repeater>
 *
 * Notes:
 * - If no template is provided, a `defaultTemplate` is used for graceful
 *   fallback rendering.
 */

import { imports } from './config';

/** Context available to the projected template for each item. */
interface Context<T> {
  $implicit: T;
  item: T
};

@Component({
  selector: 'repeater',
  imports,
  template: `

    <ng-template #defaultTemplate let-item>
      <ect-pokemon-card [pokemon]="item" gradientPurple></ect-pokemon-card>
    </ng-template>

    @for (data of items();track data) {
      <ng-container
        [ngTemplateOutlet]="template() || defaultTemplate"
        [ngTemplateOutletContext]="context(data)">
      </ng-container>
    }

  `
})
export class TemplateRepeater<T = unknown> {

  /** Source data (required). */
  readonly option = input.required<readonly T[]>();
  /** Projected template, exposed as a signal. */
  readonly template = contentChild<TemplateRef<Context<T>>>(TemplateRef);
  /** Derived snapshot of items (never null). */
  readonly items = computed<readonly T[]>(() => this.option() ?? []);

  /** Build the template context for a given item. */
  context(data: T): Context<T> {
    return {
      $implicit: data,
      item: data
    };
  }

}
