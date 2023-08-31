import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Module } from '../child-2/child-2.module';
import { Current2Component } from './current-2.component';

@NgModule({
  declarations: [Current2Component],
  imports: [
    CommonModule,
    Child2Module,
  ],
  exports: [
    Current2Component
  ]
})
export class Current2Module {
}
