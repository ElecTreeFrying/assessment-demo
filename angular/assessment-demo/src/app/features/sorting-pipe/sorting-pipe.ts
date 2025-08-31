import { Component, inject, signal } from '@angular/core';

import { imports, viewProviders } from './config';
import { PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';

@Component({
  selector: 'app-sorting-pipe',
  templateUrl: './sorting-pipe.html',
  styleUrls: ['./sorting-pipe.scss'],
  imports, viewProviders
})
export class SortingPipe {

  readonly pokemonLegendaryApi = inject(PokemonLegendaryApiService);
  protected readonly sortKey = signal<string>('id');

} 
