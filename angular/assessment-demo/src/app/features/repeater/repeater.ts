import { Component, inject } from '@angular/core';

import { imports, viewProviders } from './config';
import { PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.html',
  styleUrls: ['./repeater.scss'],
  imports, viewProviders
})
export class Repeater {

  pokemonLegendaryApi = inject(PokemonLegendaryApiService);

} 
