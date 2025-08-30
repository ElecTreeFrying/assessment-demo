import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, forkJoin, mergeMap, map, toArray, shareReplay } from 'rxjs';

import { POKEAPI_ENDPOINT, LEGENDARY_IDS, Pokemon, Species } from './model';
import { responseToPokeDetail, sortById } from './utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonLegendaryApiService {

  private http = inject(HttpClient);

  readonly legendaries$ = from(LEGENDARY_IDS).pipe(
    mergeMap((id) => forkJoin({
      pokemon: this.http.get<Pokemon>(`${POKEAPI_ENDPOINT}/pokemon/${id}`),
      species: this.http.get<Species>(`${POKEAPI_ENDPOINT}/pokemon-species/${id}`),
    }), 8),
    map(responseToPokeDetail.bind(this)),
    toArray(),
    map(sortById.bind(this)),
    shareReplay(1)
  );

}
