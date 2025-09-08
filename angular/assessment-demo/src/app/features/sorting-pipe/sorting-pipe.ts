import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { imports } from './config';
import { PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';

@Component({
  selector: 'app-sorting-pipe',
  templateUrl: './sorting-pipe.html',
  styleUrls: ['./sorting-pipe.scss'],
  imports
})
export class SortingPipe {

  readonly pokemonLegendaryApi = inject(PokemonLegendaryApiService);
  readonly pokemon = toSignal(this.pokemonLegendaryApi.legendaries$)
  readonly sortKey = signal<string>('id');

} 
