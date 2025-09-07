import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { imports, viewProviders } from './config';
import { PageFirstService } from './page-first-service';

@Component({
  selector: 'app-page-first',
  templateUrl: './page-first.html',
  styleUrl: './page-first.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports, viewProviders
})
export class PageFirst {

  service = inject(PageFirstService);
  pokemon = toSignal(this.service.pokemon$, { initialValue: null });
  topPokemon = toSignal(this.service.topPokemon$, { initialValue: [] });

}
