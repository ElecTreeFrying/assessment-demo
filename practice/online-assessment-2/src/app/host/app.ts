import { Component, ViewEncapsulation } from '@angular/core';
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
  host: {
    id: 'app-root'
  },
  encapsulation: ViewEncapsulation.None,
  imports
})
export class App {
}
