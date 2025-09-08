import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, forkJoin, mergeMap, map, toArray, shareReplay, Observable } from 'rxjs';

import { POKEAPI_ENDPOINT, LEGENDARY_IDS, Pokemon, Species, PokeDetail, KANTO_LEGENDARY_IDS, JOHTO_LEGENDARY_IDS, HOENN_LEGENDARY_IDS, SINNOH_LEGENDARY_IDS } from './model';
import { responseToPokeDetail, sortById } from './utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonLegendaryApiService {

  private readonly http = inject(HttpClient);

  readonly legendaries$ = this.getLegendariesByIds(LEGENDARY_IDS);
  readonly kanto$ = this.getLegendariesByIds(KANTO_LEGENDARY_IDS);
  readonly johto$ = this.getLegendariesByIds(JOHTO_LEGENDARY_IDS);
  readonly hoenn$ = this.getLegendariesByIds(HOENN_LEGENDARY_IDS);
  readonly sinnoh$ = this.getLegendariesByIds(SINNOH_LEGENDARY_IDS);

  private getLegendariesByIds(ids: number[]): Observable<PokeDetail[]> {
    return from(ids).pipe(
      mergeMap((id: number) => forkJoin({
        pokemon: this.http.get<Pokemon>(`${POKEAPI_ENDPOINT}/pokemon/${id}`),
        species: this.http.get<Species>(`${POKEAPI_ENDPOINT}/pokemon-species/${id}`),
      }), 8),
      map(responseToPokeDetail.bind(this)),
      toArray(),
      map(sortById.bind(this)),
      shareReplay(1)
    );
  }

}
