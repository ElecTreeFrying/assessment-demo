import { Component } from '@angular/core';

@Component({
  selector: 'ect-demo-nav-text',
  template: '<p><ng-content></ng-content></p>',
  host: { class: 'ect-demo-nav-text' }
})
export class UiDemoNavText {}
