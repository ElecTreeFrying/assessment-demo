import { Component, inject, ViewEncapsulation } from '@angular/core';

import { imports, viewProviders } from './config';
import { PokemonApi } from '@ect/api';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss',
  encapsulation: ViewEncapsulation.None,
  imports, viewProviders
})
export default class PageTwo {

  private readonly pokeApi = inject(PokemonApi);

  readonly topPokemon = toSignal(this.pokeApi.topPokemon$, { initialValue: [] });

}
