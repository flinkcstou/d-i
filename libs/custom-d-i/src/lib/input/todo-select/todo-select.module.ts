import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoSelectComponent} from './todo-select.component';
import {SelectModule} from '../select/select.module';
import {SelectConfigDirectiveModule} from '../services/select-config.directive';
import {SelectConfigSecondDirectiveModule} from '../services/select-config-second.directive';

@NgModule({
  declarations: [TodoSelectComponent],
  exports: [TodoSelectComponent],
  imports: [CommonModule, SelectModule, SelectConfigSecondDirectiveModule, SelectConfigDirectiveModule],
})
export class TodoSelectModule {
}
