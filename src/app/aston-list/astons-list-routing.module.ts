import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonsListPage } from './astons-list.page';

const routes: Routes = [
  {
    path: '',
    component: AstonsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./aston-new/aston-new.module').then(m => m.AstonNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./aston/aston.module').then(m => m.AstonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonsListPageRoutingModule { }
