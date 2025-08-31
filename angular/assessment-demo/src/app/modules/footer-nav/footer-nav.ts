import { Component } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'ect-footer-nav',
  templateUrl: './footer-nav.html',
  styleUrls: ['./footer-nav.scss', './footer-nav-responsiveness.scss'],
  imports, viewProviders
})
export class FooterNav {

  readonly year = new Date().getFullYear();

}
