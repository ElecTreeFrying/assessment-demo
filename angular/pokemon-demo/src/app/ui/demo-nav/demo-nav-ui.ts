import { Component, Directive } from '@angular/core';

@Directive({
  selector: '[ectDemoNavImage]',
  host: { class: 'ect-demo-nav-image' }
})
export class DemoNavImage {}

@Component({
  selector: 'ect-demo-nav-text',
  template: '<p><ng-content></ng-content></p>',
  host: { class: 'ect-demo-nav-text' }
})
export class DemoNavText {}
