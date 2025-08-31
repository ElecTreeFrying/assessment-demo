import { Component } from '@angular/core';

import { imports, viewProviders } from './config';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss', './not-found-responsiveness.scss'],
  imports, viewProviders
})
export class NotFound {
} 
