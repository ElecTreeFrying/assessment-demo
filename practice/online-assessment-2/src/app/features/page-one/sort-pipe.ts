import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value?: any[]): any[] {

    if (!value?.length) return [];

    return value.sort((prev, curr) => {
      return prev?.id - curr?.id;
    });
  }

}
