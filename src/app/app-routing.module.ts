import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeLoaderComponent } from './tree-loader/tree-loader.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tree',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    component: TreeLoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
