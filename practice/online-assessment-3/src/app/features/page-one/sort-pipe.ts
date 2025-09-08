import { Pipe, PipeTransform } from "@angular/core";

import { PokeDetail } from "@ect/data-access/api";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: PokeDetail[] | null): PokeDetail[] {

    if (!value) return [];

    return value.sort((prev: PokeDetail, curr: PokeDetail) => {
      // return curr.id - prev.id;
      return prev.id - curr.id;
    })
  }

}