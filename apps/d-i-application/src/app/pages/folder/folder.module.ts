import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FolderComponent} from './folder.component';
import {FolderRoutingModule} from './folder-routing.module';


@NgModule({
  declarations: [FolderComponent],
  exports: [FolderComponent],
  imports: [
    CommonModule,
    FolderRoutingModule
  ],

})
export class FolderModule {

}
