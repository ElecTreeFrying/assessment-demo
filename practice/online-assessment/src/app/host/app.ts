import { Component, ViewEncapsulation } from '@angular/core';

import { Navbar } from './features';
import { RouterOutlet } from '@angular/router';

const COMPONENTS = [
  Navbar
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterOutlet,
    COMPONENTS
  ]
})
export class App { }
