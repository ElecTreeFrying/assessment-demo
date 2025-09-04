import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-hoenn',
  templateUrl: './hoenn.html',
  styleUrls: ['./hoenn.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class Hoenn {
}
