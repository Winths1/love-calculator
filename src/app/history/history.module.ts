import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { HistoryLineComponent } from './history-line/history-line.component';
import { PercentagePipe } from '../percentage.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    PercentagePipe
  ],
  declarations: [
    HistoryPage,
    HistoryLineComponent
  ]
})
export class HistoryPageModule {}
