import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderMobileComponent } from './folder-mobile.component';

const routes: Routes = [
  {
    path: ':id',
    component: FolderMobileComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderMobileRoutingModule {
}
