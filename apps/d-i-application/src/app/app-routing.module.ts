import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderModule)
  },
  {
    path: 'folder-mobile',
    loadChildren: () => import('./pages/folder-mobile/folder-mobile.module').then(m => m.FolderMobileModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
