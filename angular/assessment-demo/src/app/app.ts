import { Component, ViewEncapsulation } from '@angular/core';

import { imports, viewProviders } from './host/config';

@Component({
  selector: 'app-root',
  templateUrl: './host/app.html',
  styleUrl: './host/app.scss',
  encapsulation: ViewEncapsulation.None,
  imports, viewProviders
})
export class App { }
