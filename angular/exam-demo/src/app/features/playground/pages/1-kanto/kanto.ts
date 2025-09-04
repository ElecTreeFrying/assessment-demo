import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.html',
  styleUrls: ['./kanto.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class Kanto {
}
