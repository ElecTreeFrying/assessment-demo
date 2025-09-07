import { Component, booleanAttribute, input } from '@angular/core';

import { imports } from './config';

@Component({
  selector: 'ect-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  host: {
    class: 'ect-button'
  },
  imports
})
export class UiButton {

  actionRed = input(false, { transform: booleanAttribute });
  actionPurple = input(false, { transform: booleanAttribute });
  tooltip = input<string>('');

}
