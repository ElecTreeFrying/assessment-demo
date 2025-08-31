import { Component, ViewEncapsulation } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports, viewProviders
})
export class App { }
