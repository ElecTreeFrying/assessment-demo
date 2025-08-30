import { Component, inject } from '@angular/core';

import { imports, viewProviders } from './config';
import { PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';

@Component({
  selector: 'app-sorting-pipe',
  templateUrl: './sorting-pipe.html',
  styleUrls: ['./sorting-pipe.scss'],
  imports, viewProviders
})
export class SortingPipe {

  pokemonLegendaryApi = inject(PokemonLegendaryApiService);

} 
