import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ParentService } from './parent.service';
import { CurrentModule } from '../current/current.module';
import { Current2Module } from '../current-2/current-2.module';
import { MatSortModule } from '../../sort/sort.module';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    CurrentModule,
    Current2Module,
    MatSortModule
  ],
  providers: [ParentService,
    // {
    //   provide: A_SERVICE, useValue: 'PARENT',
    // }
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule {
}
