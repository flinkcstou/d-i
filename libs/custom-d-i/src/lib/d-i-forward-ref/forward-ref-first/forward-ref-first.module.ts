import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForwardRefFirstComponent } from './forward-ref-first.component';

@NgModule({
  declarations: [ForwardRefFirstComponent],
  exports: [ForwardRefFirstComponent],
  imports: [CommonModule],
})
export class ForwardRefFirstModule {}
