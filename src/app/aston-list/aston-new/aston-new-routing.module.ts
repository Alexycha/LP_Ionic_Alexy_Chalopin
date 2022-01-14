import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstonNewPage } from './aston-new.page';

const routes: Routes = [
  {
    path: '',
    component: AstonNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstonNewPageRoutingModule { }
