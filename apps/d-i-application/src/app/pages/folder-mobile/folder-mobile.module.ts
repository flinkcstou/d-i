import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderMobileComponent } from './folder-mobile.component';
import { FolderMobileRoutingModule } from './folder-mobile-routing.module';

@NgModule({
  declarations: [FolderMobileComponent],
  exports: [FolderMobileComponent],
  imports: [
    CommonModule,
    FolderMobileRoutingModule
  ],
  providers: []
})
export class FolderMobileModule {
}
