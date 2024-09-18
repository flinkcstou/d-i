import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildService} from './child.service';
import {ChildComponent} from './child.component';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule],
  exports: [
    ChildComponent
  ],
  providers: [ChildService]
})
export class ChildModule {
}
