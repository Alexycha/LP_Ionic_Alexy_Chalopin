import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonBondPage } from './aston-bond.page';

const routes: Routes = [
  {
    path: '',
    component: AstonBondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonBondPageRoutingModule {}
