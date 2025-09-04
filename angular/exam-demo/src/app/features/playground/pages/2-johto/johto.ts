import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.html',
  styleUrls: ['./johto.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class Johto {
}
