import { Component, inject, signal } from '@angular/core';

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
  readonly sortKey = signal<string>('id');

} 
