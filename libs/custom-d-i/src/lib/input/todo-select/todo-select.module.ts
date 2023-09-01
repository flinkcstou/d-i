import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoSelectComponent } from './todo-select.component';
import { SelectModule } from '../select/select.module';
import { SelectConfigDirectiveModule } from '../services/select-config.directive';

@NgModule({
  declarations: [TodoSelectComponent],
  exports: [TodoSelectComponent],
  imports: [CommonModule, SelectModule, SelectConfigDirectiveModule],
})
export class TodoSelectModule {
}
