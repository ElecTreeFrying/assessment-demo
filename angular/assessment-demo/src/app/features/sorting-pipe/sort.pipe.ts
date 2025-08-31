import { Pipe, PipeTransform } from '@angular/core';
import type { PokeDetail } from '@ect/api/pokemon-legendary';

type SortKey = string;

@Pipe({
  name: 'sortBy',
  pure: true,
  standalone: true
})
export class SortByPipe implements PipeTransform {

  transform(items?: PokeDetail[] | null, sortKey?: SortKey | null): PokeDetail[] {

    if (!Array.isArray(items) || items.length === 0) return items ?? [];

    const key = (sortKey ?? '').trim();
    const descending = key.startsWith('-');
    const rawProp = descending ? key.slice(1) : key;
    if (!rawProp) return items;

    // Map UI-facing keys to actual PokeDetail fields
    const alias: Record<string, keyof PokeDetail> = {
      name: 'displayName',
      color: 'color',
      height: 'heightM',
      weight: 'weightKg',
      displayName: 'displayName',
      heightM: 'heightM',
      weightKg: 'weightKg'
    };
    const prop = alias[rawProp] ?? (rawProp as keyof PokeDetail);

    const sorted = [...items].sort((a, b) => {
      const va = a[prop] as unknown;
      const vb = b[prop] as unknown;

      if (va == null && vb == null) return 0;
      if (va == null) return -1;
      if (vb == null) return 1;

      if (typeof va === 'number' && typeof vb === 'number') {
        return va - vb;
      }
      // numeric-like strings → compare as numbers; else as strings
      const na = Number(va);
      const nb = Number(vb);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) {
        return na - nb;
      }
      const sa = String(va).toLowerCase();
      const sb = String(vb).toLowerCase();
      return sa.localeCompare(sb);
    });

    return descending ? sorted.reverse() : sorted;
  }
}


