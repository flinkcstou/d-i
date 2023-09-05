import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSelectorComponent } from './header-selector.component';

@NgModule({
  declarations: [HeaderSelectorComponent],
  exports: [HeaderSelectorComponent],
  imports: [CommonModule],
})
export class HeaderSelectorModule {
}
