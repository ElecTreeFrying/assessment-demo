import { Component, ChangeDetectionStrategy, effect, signal, inject, Injector, OnInit, untracked, linkedSignal, viewChild, afterNextRender, viewChildren, contentChild, contentChildren, ElementRef, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { imports, viewProviders } from './config';
import { PokeDetail, PokemonLegendaryApiService } from '@ect/api/pokemon-legendary';
import { UiPokemonCard } from 'src/app/ui/pokemon-card';

const LUGIA: PokeDetail = {
    "id": 249,
    "nationalDexId": 249,
    "name": "lugia",
    "displayName": "Lugia",
    "isLegendary": true,
    "isMythical": false,
    "generation": "generation-ii",
    "classification": "Diving Pokémon",
    "description": "It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.",
    "habitat": "rare",
    "color": "White",
    "growthRate": "slow",
    "baseHappiness": 0,
    "captureRate": 3,
    "types": [
        "psychic",
        "flying"
    ],
    "heightM": 5.2,
    "weightKg": 216,
    "baseExperience": 306,
    "stats": {
        "hp": 106,
        "attack": 90,
        "defense": 130,
        "specialAttack": 90,
        "specialDefense": 154,
        "speed": 110,
        "total": 680
    },
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    "movesCount": 117
}

const HOOH: PokeDetail = {
    "id": 250,
    "nationalDexId": 250,
    "name": "ho-oh",
    "displayName": "Ho-Oh",
    "isLegendary": true,
    "isMythical": false,
    "generation": "generation-ii",
    "classification": "Rainbow Pokémon",
    "description": "Legends claim this POKéMON flies the world's skies con­ tinuously on its magnificent seven- colored wings.",
    "habitat": "rare",
    "color": "Red",
    "growthRate": "slow",
    "baseHappiness": 0,
    "captureRate": 3,
    "types": [
        "fire",
        "flying"
    ],
    "heightM": 3.8,
    "weightKg": 199,
    "baseExperience": 306,
    "stats": {
        "hp": 106,
        "attack": 130,
        "defense": 90,
        "specialAttack": 110,
        "specialDefense": 154,
        "speed": 90,
        "total": 680
    },
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    "movesCount": 102
}

const CELEBI: PokeDetail = {
    "id": 251,
    "nationalDexId": 251,
    "name": "celebi",
    "displayName": "Celebi",
    "isLegendary": false,
    "isMythical": true,
    "generation": "generation-ii",
    "classification": "Time Travel Pokémon",
    "description": "This POKéMON wan­ ders across time. Grass and trees flourish in the forests in which it has appeared.",
    "habitat": "forest",
    "color": "Green",
    "growthRate": "medium-slow",
    "baseHappiness": 100,
    "captureRate": 45,
    "types": [
        "psychic",
        "grass"
    ],
    "heightM": 0.6,
    "weightKg": 5,
    "baseExperience": 270,
    "stats": {
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 600
    },
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    "movesCount": 104
}

@Component({
  selector: 'app-celebi',
  template: `
    <ect-pokemon-card [pokemon]="celebi()" gradientPurple></ect-pokemon-card>
  `,
  styleUrls: ['./kanto.scss'],
  imports: [UiPokemonCard],
})
export class PokeCelebi {
  celebi = signal<PokeDetail>(CELEBI);
}
@Component({
  selector: 'app-lugia',
  template: `
    <ect-pokemon-card [pokemon]="lugia()" gradientPurple></ect-pokemon-card>
  `,
  styleUrls: ['./kanto.scss'],
  imports: [UiPokemonCard],
})
export class PokeLugia {
  lugia = signal<PokeDetail>(LUGIA);
}

@Component({
  selector: 'app-hooh',
  template: `
    <ect-pokemon-card [pokemon]="hooh()" gradientPurple (click)="createHooh()"></ect-pokemon-card>
  `,
  styleUrls: ['./kanto.scss'],
  imports: [UiPokemonCard],
})
export class PokeHooh {
  hooh = signal<PokeDetail>(HOOH);
  viewContainer = inject(ViewContainerRef);
  createHooh(): void {
    const component = this.viewContainer.createComponent(UiPokemonCard);
    (component.location.nativeElement as HTMLElement).classList.add('added')
    component.setInput('pokemon', this.hooh());
    component.setInput('gradientRed', true);
  }
}

@Component({
  selector: 'app-poke-container',
  template: `
    <div class="host--card-grid">
      <ng-content select="[poke1]"></ng-content>
      <ng-content></ng-content>
      <ng-container *ngComponentOutlet="getPokeComponent()"></ng-container>
      <ng-container *ngComponentOutlet="pokeCelebi!"></ng-container>
    </div>
  `,
  styleUrls: ['./kanto.scss'],
  imports: [NgComponentOutlet],
})
export class PokeContainer {

  elementRef = inject<ElementRef<HTMLDivElement>>(ElementRef);
  content = contentChild(UiPokemonCard);
  contents = contentChildren(UiPokemonCard)

  constructor() {
    afterNextRender(() => {
      console.log('@@@ ', this.elementRef.nativeElement);
      console.log('@@@ content', this.content()?.pokemon());
      console.log('@@@ contents', this.contents());
      this.getLazyloadedPokeLugiaComponent();
    })
  }

  pokeCelebi: {new(): PokeCelebi} | undefined;

  async getLazyloadedPokeLugiaComponent(): Promise<void> {
    const { PokeCelebi } = await import('.');
    this.pokeCelebi = PokeCelebi
  }

  getPokeComponent() {
    return true ? PokeHooh : PokeLugia;
  }

}

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.html',
  styleUrls: ['./kanto.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...imports, PokeContainer
  ], viewProviders
})
export class Kanto implements OnInit {

  pokemonState = signal<boolean>(false);
  
  lugia = signal<PokeDetail>(LUGIA);
  hooh = signal<PokeDetail>(HOOH);
  selectedPokemon = signal<PokeDetail>(this.lugia());
  previousPokemon = signal<PokeDetail>(this.lugia());
  babyPokemon = linkedSignal({
    source: () => this.selectedPokemon(),
    computation: source => ({ ...source, name: `Baby ${source.name}` }),
  });

  readonly envInjector = inject(Injector);
  readonly pokemonLegendaryApi = inject(PokemonLegendaryApiService, {
    
  });

  pokemonCard = viewChild<UiPokemonCard>(UiPokemonCard)
  pokemonCards = viewChildren<UiPokemonCard>(UiPokemonCard)
  
  initializeLogging(): void {
    effect(() => {
      console.log('@@@ initializeLogging', this.selectedPokemon());
    }, { injector: this.envInjector });
  }

  constructor() { 

    afterNextRender(() => {
      console.log('@@@ ', this.pokemonCard());
    })

    effect(onCleanup => {
      console.log('@@@ babyPokemon', this.babyPokemon());
      console.log('@@@ previousPokemon', this.previousPokemon());
      
      const interval = setInterval(() => {
        this.pokemonState.set(!this.pokemonState());
      }, 1000);
      
      untracked(() => {
        console.log('@@@ pokemonState', this.pokemonState());
        console.log('@@@ untracked', this.selectedPokemon());
      });

      onCleanup(() => {
        clearInterval(interval);
      })
    })
  }

  ngOnInit(): void {
    this.initializeLogging();
  }

}
