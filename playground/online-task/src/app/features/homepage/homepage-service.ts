import { inject, Injectable } from '@angular/core';

import { FormService } from './form-service';

@Injectable()
export class HomepageService {

  formService = inject(FormService);

  validateName(): void {

    const { name, option } = this.formService.value;

    if (option === 'pageEntity') {
      const cond = name.length <= 50;
      console.log('@@@ ', cond ? 'VALID' : 'INVALID');
    }
    if (option === 'component') {
      const cond = name.length <= 50;
      console.log('@@@ ', cond ? 'VALID' : 'INVALID');
    }

  }
  
  validateSecondary(): void {

    const { url, icon, option } = this.formService.value;

    if (option === 'pageEntity') {
      const cond = [ 'http://', 'https://' ].some(val => url.startsWith(val));
      console.log('@@@ ', cond ? 'VALID' : 'INVALID');

    }
    if (option === 'component') {
      const cond = icon.startsWith('icon-');
      console.log('@@@ ', cond ? 'VALID' : 'INVALID');
    }

  }

  redirect(url: string): void {
    window.location.href = url
  }
  
}
