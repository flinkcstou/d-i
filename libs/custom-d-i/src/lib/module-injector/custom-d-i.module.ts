import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomDIComponent} from './custom-d-i/custom-d-i.component';
import {CustomDIService} from './custom-d-i/custom-d-i.service';
import {GrandModule} from './grand/grand.module';
import {MatSortModule} from '../sort/sort.module';

@NgModule({
  providers: [
    CustomDIService,

  ],
  imports: [
    CommonModule,
    GrandModule,
    MatSortModule
  ],
  declarations: [CustomDIComponent],
  exports: [CustomDIComponent],
})
export class CustomDIModule {

  constructor() {
    console.error('CUSTOMDIMODULE');
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
