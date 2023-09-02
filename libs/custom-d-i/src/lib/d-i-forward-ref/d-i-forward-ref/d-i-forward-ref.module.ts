import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIForwardRefComponent } from './d-i-forward-ref.component';
import { ForwardRefDirectiveDirective } from '../forward-ref-directive.directive';
import { ForwardRefFirstModule } from '../forward-ref-first/forward-ref-first.module';
import { ForwardRefSecondModule } from '../forward-ref-second/forward-ref-second.module';

@NgModule({
  declarations: [DIForwardRefComponent, ForwardRefDirectiveDirective],
  exports: [DIForwardRefComponent, ForwardRefDirectiveDirective],
  providers: [],
  imports: [CommonModule, ForwardRefFirstModule, ForwardRefSecondModule],
})
export class DIForwardRefModule {
}
