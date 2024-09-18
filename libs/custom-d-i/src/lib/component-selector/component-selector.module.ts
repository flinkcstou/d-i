import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentSelectorComponent} from './component-selector.component';
import {HeaderModule} from './header/header.module';
import {HeaderSelectorModule} from './header-selector/header-selector.module';

@NgModule({
  declarations: [ComponentSelectorComponent],
  exports: [ComponentSelectorComponent],
  imports: [CommonModule, HeaderModule, HeaderSelectorModule],
})
export class ComponentSelectorModule {
}
