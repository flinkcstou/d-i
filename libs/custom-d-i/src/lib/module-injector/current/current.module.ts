import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrentService} from './current.service';
import {CurrentComponent} from './current.component';
import {ChildModule} from '../child/child.module';
import {A_SERVICE} from '../custom-d-i/injection-token';
import {Child2Module} from '../child-2/child-2.module';

@NgModule({
  declarations: [CurrentComponent],
  imports: [
    CommonModule,
    ChildModule,
    Child2Module,
  ],
  exports: [
    CurrentComponent
  ],
  providers: [CurrentService,
    {
      provide: A_SERVICE, useValue: 'CURRENT_A_SERVICE',
    }
  ]
})
export class CurrentModule {
}
