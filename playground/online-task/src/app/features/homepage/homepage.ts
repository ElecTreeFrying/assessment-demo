import { Component, effect, inject, linkedSignal, untracked } from '@angular/core';

import { imports, viewProviders } from './config';
import { FormService } from './form-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HomepageService } from './homepage-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  imports, viewProviders
})
export class Homepage {

  service = inject(HomepageService);
  formService = inject(FormService);
  valueChanges = toSignal(this.formService.form.valueChanges);
  optionField = linkedSignal(() => this.valueChanges()?.option)

  constructor() {
    effect(() => {

      untracked(() => {
        // console.log('@@@ valueChanges', this.valueChanges());
      });

      console.log('@@@ ', this.optionField());

      this.formService.form.patchValue({
        name: 'John James',
        url: 'https://pokeapi.co/'
      });
    })
  }

  validate(): void {
    this.service.validateName()
    this.service.validateSecondary()
  }
  
}
