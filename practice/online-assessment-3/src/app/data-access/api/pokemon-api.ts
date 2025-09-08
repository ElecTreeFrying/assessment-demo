import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, mergeMap, Observable, shareReplay, toArray } from 'rxjs';

const POKEAPI: string = 'https://pokeapi.co/api/v2/';

const POKE_IDS: number[] = new Array(56).fill(0).map((_, i) => i + 1);

export type PokeDetail = any;

@Injectable({
  providedIn: 'root'
})
export class PokemonApi {
  
  private readonly http = inject(HttpClient)

  getPokemonById(id: number): Observable<PokeDetail> {
    return this.http.get(`${POKEAPI}/pokemon/${id}`);
  }

  getTopPokemon(): Observable<PokeDetail[]> {
    return from(POKE_IDS).pipe(
      mergeMap((id: number) => this.http.get(`${POKEAPI}/pokemon/${id}`)),
      toArray(),
      shareReplay(1)
    )
  }

}
