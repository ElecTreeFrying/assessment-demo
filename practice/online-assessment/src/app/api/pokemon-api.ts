import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, mergeMap, Observable, shareReplay, toArray } from 'rxjs';

const API_ENDPOINT: string = 'https://pokeapi.co/api/v2';
const POKEMON_IDS: number[] = new Array(28).fill(0).map((_, i) => i+1);

export type PokeDetail = Record<string, any>;

@Injectable({
  providedIn: 'root'
})
export class PokemonApi {

  http = inject(HttpClient)
 
  getPokemonById(pokedexId: number): Observable<any> {
    return this.http.get<PokeDetail>(`${API_ENDPOINT}/pokemon/${pokedexId}`);
  }
 
  getTopPokemon(): Observable<any[]> {
    return from(POKEMON_IDS).pipe(
      mergeMap((id: number) => this.http.get<PokeDetail>(`${API_ENDPOINT}/pokemon/${id}`)),
      toArray(),
      shareReplay()
    )
  }
  
}
