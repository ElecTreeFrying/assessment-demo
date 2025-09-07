import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig, App } from './app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
