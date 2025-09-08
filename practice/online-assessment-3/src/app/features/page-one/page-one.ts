import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { imports, viewProviders } from './config';
import { PokemonApi } from '@ect/data-access/api';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss',
  imports, viewProviders
})
export default class PageOne {

  private readonly pokeApi = inject(PokemonApi);

  readonly topPokemon = toSignal(this.pokeApi.getTopPokemon(), { initialValue: null })

}
