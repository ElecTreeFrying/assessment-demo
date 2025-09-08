import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { imports } from './config';
import { PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';

export type Item = { id: number; name: string };

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.html',
  styleUrls: ['./repeater.scss'],
  imports
})
export class Repeater {

  readonly pokemonLegendaryApi = inject(PokemonLegendaryApiService);
  readonly pokemon = toSignal(this.pokemonLegendaryApi.legendaries$)

}
