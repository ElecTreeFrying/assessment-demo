import { Component } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports, viewProviders
})
export class Navbar { }
