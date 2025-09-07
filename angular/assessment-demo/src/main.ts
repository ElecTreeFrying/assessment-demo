import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, App } from './app/host';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
