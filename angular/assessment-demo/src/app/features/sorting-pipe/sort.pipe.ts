import { Pipe, PipeTransform } from '@angular/core';
import type { PokeDetail } from '@ect/api/pokemon-legendary';

type SortKey = string;

/**
 * SortByPipe
 *
 * Purpose
 * - Sorts an array of `PokeDetail` items by a provided key.
 * - Supports ascending and descending order using a leading dash (`-`).
 *
 * Input
 * - value: `PokeDetail[] | null | undefined` – the list to sort
 * - sortKey: `string | null | undefined` – field to sort by. If it starts with `-`,
 *   the result is returned in descending order.
 */
@Pipe({
  name: 'sortBy',
  pure: true,
  standalone: true
})
export class SortByPipe implements PipeTransform {

  transform(pokemonList?: PokeDetail[] | null, requestedSortKey?: SortKey | null): PokeDetail[] {

    if (!Array.isArray(pokemonList) || pokemonList.length === 0) return pokemonList ?? [];

    const normalizedSortKey = (requestedSortKey ?? '').trim();
    const isDescending = normalizedSortKey.startsWith('-');
    const rawFieldKey = isDescending ? normalizedSortKey.slice(1) : normalizedSortKey;
    if (!rawFieldKey) return pokemonList;

    // Map UI-facing keys to actual PokeDetail fields
    const fieldAliasByKey: Record<string, keyof PokeDetail> = {
      name: 'displayName',
      color: 'color',
      height: 'heightM',
      weight: 'weightKg',
      displayName: 'displayName',
      heightM: 'heightM',
      weightKg: 'weightKg'
    };
    const fieldKey = fieldAliasByKey[rawFieldKey] ?? (rawFieldKey as keyof PokeDetail);

    const sortedByField = [ ...pokemonList ].sort((left: PokeDetail, right: PokeDetail) => {
      const leftValue = left[fieldKey] as unknown;
      const rightValue = right[fieldKey] as unknown;

      if (leftValue == null && rightValue == null) return 0;  // both missing → equal 
      if (leftValue == null) return -1; // left missing  → comes before right
      if (rightValue == null) return 1; // right missing → comes after left

      // Both numbers → numeric compare
      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return leftValue - rightValue;
      }
      
      // Both coercible to numbers (e.g., "12", "3") → numeric compare
      const leftAsNumber = Number(leftValue);
      const rightAsNumber = Number(rightValue);
      if (!Number.isNaN(leftAsNumber) && !Number.isNaN(rightAsNumber)) {
        return leftAsNumber - rightAsNumber;
      }

      // Compare as case-insensitive text
      const leftAsString = String(leftValue).toLowerCase();
      const rightAsString = String(rightValue).toLowerCase();
      return leftAsString.localeCompare(rightAsString);
    });

    return isDescending ? sortedByField.reverse() : sortedByField;
  }
}


