
type SimpleNamed = { name: string };
type LangRef = { name: string };

export interface Pokemon {
  id: number;
  name: string;
  height: number;                     // dm
  weight: number;                     // hg
  base_experience: number | null;
  types: Array<{ slot: number; type: SimpleNamed }>;
  stats: Array<{ base_stat: number; stat: SimpleNamed }>;
  sprites?: {
    front_default?: string | null;
    other?: { ['official-artwork']?: { front_default?: string | null } };
  };
  moves?: unknown[];                  // length only
}

export interface Species {
  id: number;
  name: string;
  is_legendary: boolean;
  is_mythical: boolean;
  is_baby: boolean;
  generation: SimpleNamed;
  names?: Array<{ name: string; language: LangRef }>;
  genera?: Array<{ genus: string; language: LangRef }>;
  flavor_text_entries?: Array<{ flavor_text: string; language: LangRef; version: SimpleNamed }>;
  habitat?: SimpleNamed | null;
  color?: SimpleNamed | null;
  growth_rate?: SimpleNamed | null;
  base_happiness: number;
  capture_rate: number;
}

export interface PokeDetail {
  // Identity & flags
  id: number;                     // form id (often = National Dex for legendaries)
  nationalDexId: number;          // species id
  name: string;                   // API name (lowercase)
  displayName: string;            // English if available
  isLegendary: boolean;
  isMythical: boolean;
  generation: string;

  // Descriptions
  classification: string;         // English genus (e.g., "Sky High Pokémon")
  description: string;            // single cleaned English flavor text

  // Biology / misc
  habitat: string | null;
  color: string | null;
  growthRate: string | null;
  baseHappiness: number;
  captureRate: number;

  // Form (pokemon) details
  types: string[];
  heightM: number;
  weightKg: number;
  baseExperience: number | null;
  stats: {
    hp: number; attack: number; defense: number;
    specialAttack: number; specialDefense: number; speed: number;
    total: number;
  };

  // Media
  sprite: string | null;
  artwork: string | null;

  // Misc
  movesCount: number;
}
