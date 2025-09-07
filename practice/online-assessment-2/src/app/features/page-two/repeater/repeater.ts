import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';

interface Context<T> {
  $implicit: T;
  item: T
}

@Component({
  selector: 'app-repeater',
  template: `

    <ng-template #noTemplate>
      <p>No template found.</p>
    </ng-template>

    @for (data of options(); track $index) {
      <ng-container
        [ngTemplateOutlet]="template() || noTemplate"
        [ngTemplateOutletContext]="context(data)">
      </ng-container>
    }
  `,
  styleUrl: './repeater.scss',
  imports: [ NgTemplateOutlet ]
})
export class Repeater {

  options = input.required<any[]>();
  template = contentChild(TemplateRef);

  context<T>(data: T): Context<T> {
    return {
      $implicit: data,
      item: data
    }
  }

}
