import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonNewPageRoutingModule } from './aston-new-routing.module';

import { AstonNewPage } from './aston-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonNewPageRoutingModule
  ],
  declarations: [AstonNewPage]
})
export class AstonNewPageModule { }
