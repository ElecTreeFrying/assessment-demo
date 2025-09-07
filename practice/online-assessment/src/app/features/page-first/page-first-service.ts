import { inject, Injectable } from '@angular/core';

import { PokemonApi } from '@ect/api';
import { Observable } from 'rxjs';

@Injectable()
export class PageFirstService {

  private readonly pokeApi = inject(PokemonApi);
 
  readonly pokemon$ = this.pokeApi.getPokemonById(1)
  readonly topPokemon$ = this.pokeApi.getTopPokemon();
  
}

