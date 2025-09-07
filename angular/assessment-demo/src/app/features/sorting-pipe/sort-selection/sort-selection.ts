import { Component, input, output } from '@angular/core';

import { imports } from './config';

@Component({
  selector: 'sort-selection',
  templateUrl: './sort-selection.html',
  styleUrls: ['./sort-selection.scss', './sort-selection-responsiveness.scss'],
  imports
})
export class SortSelection {

  readonly sort = output<string>();
  readonly selected = input<string>('');

}
