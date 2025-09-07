import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, mergeMap, Observable, shareReplay, toArray } from 'rxjs';

const API_ENDPOINT: string = 'https://pokeapi.co/api/v2';

const IDS: number[] = new Array(56).fill(0).map((_, i) => ++i);

@Injectable({
  providedIn: 'root'
})
export class PokemonApi {

  private readonly http = inject(HttpClient);

  get pokemon$(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/pokemon`)
  }

  get topPokemon$(): Observable<any[]> {
    return from(IDS).pipe(
      mergeMap(id => this.http.get(`${API_ENDPOINT}/pokemon/${id}`)),
      toArray(),
      shareReplay(1)
    )
  }
  
}
