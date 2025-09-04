import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.html',
  styleUrls: ['./sinnoh.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class Sinnoh {
}
