import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './features';

const COMPONENTS = [
  Navbar
];

const imports = [
  RouterOutlet,
  COMPONENTS
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports
})
export class App {
  protected readonly title = signal('online-assessment-3');
}
