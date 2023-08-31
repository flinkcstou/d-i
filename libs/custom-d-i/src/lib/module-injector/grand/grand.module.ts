import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandComponent } from './grand.component';
import { GrandService } from './grand.service';
import { ParentModule } from '../parent/parent.module';

@NgModule({
  declarations: [GrandComponent],
  imports: [
    CommonModule,
    ParentModule
  ],
  providers: [GrandService],
  exports: [
    GrandComponent
  ]
})
export class GrandModule {
}
