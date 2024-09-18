import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Child2Service} from './child-2.service';
import {Child2Component} from './child-2.component';

@NgModule({
  declarations: [Child2Component],
  imports: [CommonModule],
  exports: [
    Child2Component
  ],
  providers: [
    Child2Service,

  ]
})
export class Child2Module {

  constructor() {
    console.error('CHILD2MODULE');
  }
}
