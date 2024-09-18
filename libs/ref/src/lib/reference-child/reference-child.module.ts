import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReferenceChildComponent} from './reference-child.component';

@NgModule({
  declarations: [ReferenceChildComponent],
  exports: [ReferenceChildComponent],
  imports: [CommonModule],
})
export class ReferenceChildModule {
}
