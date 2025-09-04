import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.html',
  styleUrls: ['./playground.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class Playground {
}
