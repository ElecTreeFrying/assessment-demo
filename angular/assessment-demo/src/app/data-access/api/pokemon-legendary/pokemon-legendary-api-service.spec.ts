import { TestBed } from '@angular/core/testing';

import { PokemonLegendaryApiService } from './pokemon-legendary-api-service';

describe('PokemonLegendaryApiService', () => {
  let service: PokemonLegendaryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonLegendaryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
