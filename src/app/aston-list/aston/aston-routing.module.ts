import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonPage } from './aston.page';

const routes: Routes = [
  {
    path: '',
    component: AstonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonPageRoutingModule { }
