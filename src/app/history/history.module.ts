import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { HistoryLineComponent } from './history-line/history-line.component';
import { ResultModalComponent } from './result-modal/result-modal.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    ServicesModule
  ],
  declarations: [
    HistoryPage,
    HistoryLineComponent,
    ResultModalComponent
  ]
})
export class HistoryPageModule {}
