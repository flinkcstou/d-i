import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectConfigDirectiveModule } from '../services/select-config.directive';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, SelectConfigDirectiveModule],
})
export class SelectModule {
}
