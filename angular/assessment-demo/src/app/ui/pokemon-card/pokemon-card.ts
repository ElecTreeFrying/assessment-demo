import { Component, ViewEncapsulation, booleanAttribute, input } from '@angular/core';

import { imports, viewProviders } from './config';
import { PokeDetail } from '@ect/api/pokemon-legendary';

@Component({
  selector: 'ect-pokemon-card',
  templateUrl: './pokemon-card.html',
  styleUrls: ['./pokemon-card.scss'],
  host: {
    class: 'ect-pokemon-card',
    '[class.gradient-red]': 'gradientRed()',
    '[class.gradient-purple]': 'gradientPurple()'
  },
  encapsulation: ViewEncapsulation.None,
  imports, viewProviders,
})
export class UiPokemonCard {

  pokemon = input.required<PokeDetail>();
  gradientRed = input(false, { transform: booleanAttribute });
  gradientPurple = input(false, { transform: booleanAttribute });

}
