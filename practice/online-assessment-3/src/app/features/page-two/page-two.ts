import { Component, contentChild, inject, input, TemplateRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { PokeDetail, PokemonApi } from '@ect/data-access/api';

interface Context<T> {
  $implicit: T;
  item: T;
}

@Component({
  selector: 'repeater',
  template: `
    
    <ng-template #defaultTemplate>
      <p>Template error.</p>
    </ng-template>

    @for (pokemon of data(); track $index) {
      <ng-container
        [ngTemplateOutlet]="template() ?? defaultTemplate"
        [ngTemplateOutletContext]="context(pokemon)">
      </ng-container>
    }
  `,
  host: {
    class: 'repeater'
  },
  imports: [ NgTemplateOutlet ]
})
export class Repeater {

  data = input.required<PokeDetail[]>();
  
  template = contentChild(TemplateRef);

  context<T>(data: T): Context<T> {
    return {
      $implicit: data,
      item: data
    }
  }

}

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss',
  imports: [
    NgOptimizedImage,
    TitleCasePipe,
    MatRippleModule,
    MatCardModule,
    Repeater
  ]
})
export default class PageTwo {

  private readonly pokeApi = inject(PokemonApi);

  readonly topPokemon = toSignal(this.pokeApi.getTopPokemon(), { initialValue: null })

}
