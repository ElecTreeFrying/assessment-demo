import { SortByPipe } from './sort.pipe';

import { PokeDetail } from '@ect/api/pokemon-legendary';

describe('SortByPipe', () => {
  let pipe: SortByPipe;
  let data: PokeDetail[];

  beforeEach(() => {
    pipe = new SortByPipe();
    data = [
      { id: 1, nationalDexId: 1, name: 'bulbasaur', displayName: 'Bulbasaur', isLegendary: false, isMythical: false, generation: 'i', classification: '', description: '', habitat: null, color: 'green', growthRate: null, baseHappiness: 0, captureRate: 0, types: [], heightM: 0.7, weightKg: 6.9, baseExperience: null, stats: { hp: 1, attack: 1, defense: 1, specialAttack: 1, specialDefense: 1, speed: 1, total: 6 }, sprite: null, artwork: null, movesCount: 0 },
      { id: 2, nationalDexId: 2, name: 'moltres', displayName: 'Moltres', isLegendary: true, isMythical: false, generation: 'i', classification: '', description: '', habitat: null, color: 'red', growthRate: null, baseHappiness: 0, captureRate: 0, types: [], heightM: 2.0, weightKg: 60.0, baseExperience: null, stats: { hp: 1, attack: 1, defense: 1, specialAttack: 1, specialDefense: 1, speed: 1, total: 6 }, sprite: null, artwork: null, movesCount: 0 },
      { id: 3, nationalDexId: 3, name: 'articuno', displayName: 'Articuno', isLegendary: true, isMythical: false, generation: 'i', classification: '', description: '', habitat: null, color: 'blue', growthRate: null, baseHappiness: 0, captureRate: 0, types: [], heightM: 1.7, weightKg: 55.4, baseExperience: null, stats: { hp: 1, attack: 1, defense: 1, specialAttack: 1, specialDefense: 1, speed: 1, total: 6 }, sprite: null, artwork: null, movesCount: 0 },
    ];
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('sorts by name ascending/descending', () => {
    const asc = pipe.transform(data, 'name');
    expect(asc.map(p => p.displayName)).toEqual(['Articuno', 'Bulbasaur', 'Moltres']);

    const desc = pipe.transform(data, '-name');
    expect(desc.map(p => p.displayName)).toEqual(['Moltres', 'Bulbasaur', 'Articuno']);
  });

  it('sorts by height as decimal numbers', () => {
    const asc = pipe.transform(data, 'height');
    expect(asc.map(p => p.heightM)).toEqual([0.7, 1.7, 2.0]);

    const desc = pipe.transform(data, '-height');
    expect(desc.map(p => p.heightM)).toEqual([2.0, 1.7, 0.7]);
  });

  it('sorts by weight as decimal numbers', () => {
    const asc = pipe.transform(data, 'weight');
    expect(asc.map(p => p.weightKg)).toEqual([6.9, 55.4, 60.0]);

    const desc = pipe.transform(data, '-weight');
    expect(desc.map(p => p.weightKg)).toEqual([60.0, 55.4, 6.9]);
  });

});
