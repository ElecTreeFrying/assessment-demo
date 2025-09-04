import { LEGENDARY_IDS, PokeDetail, Pokemon, Species } from "..";

interface Response {
  pokemon: Pokemon;
  species: Species;
}

const clean = (s: string) => s.replace(/[\f\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();

function toProperCase(str?: string | null): string | null {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : null;
}

export function responseToPokeDetail({ pokemon, species }: Response): PokeDetail {

  // English display name & genus
  const displayName =
    species.names?.find(n => n.language?.name === 'en')?.name ?? species.name;

  const classification =
    species.genera?.find(g => g.language?.name === 'en')?.genus ?? '';

  // Pick a single English description (clean newlines)
  const description =
    clean(
      species.flavor_text_entries?.find(f => f.language?.name === 'en')?.flavor_text ?? ''
    );

  // Stats tidy
  const statMap = new Map<string, number>(
    (pokemon.stats ?? []).map(s => [s.stat.name, s.base_stat])
  );

  const stats = {
    hp: statMap.get('hp') ?? 0,
    attack: statMap.get('attack') ?? 0,
    defense: statMap.get('defense') ?? 0,
    specialAttack: statMap.get('special-attack') ?? 0,
    specialDefense: statMap.get('special-defense') ?? 0,
    speed: statMap.get('speed') ?? 0,
  };

  const total = Object.values(stats).reduce((a, b) => a + b, 0);

  const artwork = pokemon.sprites?.other?.['official-artwork']?.front_default ?? null;

  return {
    id: pokemon.id,
    nationalDexId: species.id,
    name: pokemon.name,
    displayName,
    isLegendary: species.is_legendary,
    isMythical: species.is_mythical,
    generation: species.generation?.name,

    classification,
    description,

    habitat: species.habitat?.name ?? null,
    color: toProperCase(species.color?.name) ?? null,
    growthRate: species.growth_rate?.name ?? null,
    baseHappiness: species.base_happiness,
    captureRate: species.capture_rate,

    types: [...(pokemon.types ?? [])].sort((a, b) => a.slot - b.slot).map(t => t.type.name),
    heightM: pokemon.height / 10,
    weightKg: pokemon.weight / 10,
    baseExperience: pokemon.base_experience ?? null,
    stats: { ...stats, total },

    sprite: pokemon.sprites?.front_default ?? null,
    artwork,

    movesCount: pokemon.moves?.length ?? 0,
  };
}

export function sortById(arr: PokeDetail[]): PokeDetail[] {
  return arr.sort((a, b) => LEGENDARY_IDS.indexOf(a.id) - LEGENDARY_IDS.indexOf(b.id))
}
