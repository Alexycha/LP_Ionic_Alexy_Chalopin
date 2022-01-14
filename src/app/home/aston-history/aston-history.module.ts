import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstonHistoryPageRoutingModule } from './aston-history-routing.module';

import { AstonHistoryPage } from './aston-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstonHistoryPageRoutingModule
  ],
  declarations: [AstonHistoryPage]
})
export class AstonHistoryPageModule {}
