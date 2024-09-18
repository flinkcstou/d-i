import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AComponent, BComponent, CComponent, RootContentComponent} from './root-content.component';

@NgModule({
  declarations: [RootContentComponent, AComponent, BComponent, CComponent],
  exports: [RootContentComponent, AComponent, BComponent, CComponent],
  imports: [CommonModule],
})
export class RootContentModule {
}
