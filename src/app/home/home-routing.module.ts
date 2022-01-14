import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'aston-history',
    loadChildren: () => import('./aston-history/aston-history.module').then( m => m.AstonHistoryPageModule)
  },
  {
    path: 'aston-bond',
    loadChildren: () => import('./aston-bond/aston-bond.module').then( m => m.AstonBondPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
