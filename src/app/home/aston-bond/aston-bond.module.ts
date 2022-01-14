import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonBondPageRoutingModule } from './aston-bond-routing.module';

import { AstonBondPage } from './aston-bond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonBondPageRoutingModule
  ],
  declarations: [AstonBondPage]
})
export class AstonBondPageModule {}
