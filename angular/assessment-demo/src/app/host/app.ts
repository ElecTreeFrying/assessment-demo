import { Component, ViewEncapsulation } from '@angular/core';

import { imports } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports
})
export class App { }
