import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonPageRoutingModule } from './aston-routing.module';

import { AstonPage } from './aston.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonPageRoutingModule
  ],
  declarations: [AstonPage]
})
export class AstonPageModule { }
