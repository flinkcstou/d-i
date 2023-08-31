import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDIComponent } from './custom-d-i/custom-d-i.component';
import { CustomDIService } from './custom-d-i/custom-d-i.service';
import { GrandModule } from './grand/grand.module';
/*
* завтра повторить пример с ngIf ViewChild
* повторить пример с input
* повторить пример с matSort
* повторить пример с dynamic module
* посмотреть как работает router в разных lazy router
* */

@NgModule({
  providers: [
    CustomDIService,

  ],
  imports: [
    CommonModule,
    GrandModule,
  ],
  declarations: [CustomDIComponent],
  exports: [CustomDIComponent],
})
export class CustomDIModule {

  constructor() {
    console.error('CUSTOMDIMODULE')
  }

  static forRoot(): ModuleWithProviders<CustomDIModule> {
    return {
      ngModule: CustomDIModule,
    } as ModuleWithProviders<CustomDIModule>;
  }

  static forChild(): ModuleWithProviders<CustomDIModule> {
    return {
      ngModule: CustomDIModule,
    } as ModuleWithProviders<CustomDIModule>;
  }

}
