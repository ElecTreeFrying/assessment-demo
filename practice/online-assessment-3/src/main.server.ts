import { bootstrapApplication } from '@angular/platform-browser';

import { App, config } from './app/host';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
