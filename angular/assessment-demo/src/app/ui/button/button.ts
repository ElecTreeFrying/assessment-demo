import { Component, booleanAttribute, input } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'ect-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  imports, viewProviders
})
export class UiButton {

  actionRed = input(false, { transform: booleanAttribute });
  actionPurple = input(false, { transform: booleanAttribute });
  tooltip = input<string>('');

}
