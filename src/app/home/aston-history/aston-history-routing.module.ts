import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonHistoryPage } from './aston-history.page';

const routes: Routes = [
  {
    path: '',
    component: AstonHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonHistoryPageRoutingModule {}
