import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReferenceComponent} from './reference.component';
import {ReferenceChildModule} from '../reference-child/reference-child.module';
import {ReferenceTemplateDirective} from '../reference-template.directive';

@NgModule({
  declarations: [ReferenceComponent, ReferenceTemplateDirective],
  imports: [CommonModule, ReferenceChildModule],
  exports: [
    ReferenceComponent
  ]
})
export class ReferenceModule {
}
