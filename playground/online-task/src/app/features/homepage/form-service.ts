import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export type FormOption = 'pageEntity' | 'component';

export interface FormValue {
  name: string;
  url: string;
  icon: string;
  option: FormOption;
}

@Injectable()
export class FormService {
  
  form: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      name: [ '' ],
      url: [ '' ],
      icon: [ '' ],
      option: [ 'pageEntity' ]
    });
  }

  get value(): FormValue {
    return this.form.value;
  }

}
