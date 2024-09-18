import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForwardRefSecondComponent} from './forward-ref-second.component';

@NgModule({
  declarations: [ForwardRefSecondComponent],
  exports: [ForwardRefSecondComponent],
  imports: [CommonModule],
})
export class ForwardRefSecondModule {
}
