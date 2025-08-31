import { Component, ViewEncapsulation } from '@angular/core';

import { imports } from './config';

@Component({
  selector: 'ect-demo-nav',
  templateUrl: './demo-nav.html',
  styleUrls: ['./demo-nav.scss', 'demo-nav-responsiveness.scss', './demo-nav-ui-styles.scss'],
  host: {
    class: 'ect-demo-nav'
  },
  encapsulation: ViewEncapsulation.None,
  imports
})
export class UiDemoNav { } 
