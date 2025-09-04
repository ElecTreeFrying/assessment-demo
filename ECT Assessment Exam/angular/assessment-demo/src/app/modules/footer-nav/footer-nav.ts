import { Component } from '@angular/core';

import { imports } from './config';

@Component({
  selector: 'ect-footer-nav',
  templateUrl: './footer-nav.html',
  styleUrls: ['./footer-nav.scss', './footer-nav-responsiveness.scss'],
  imports
})
export class FooterNav {

  readonly year = new Date().getFullYear();

}
