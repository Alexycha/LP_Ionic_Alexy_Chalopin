import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonsListPageRoutingModule } from './astons-list-routing.module';

import { AstonsListPage } from './astons-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonsListPageRoutingModule
  ],
  declarations: [AstonsListPage]
})
export class AstonsListPageModule { }
