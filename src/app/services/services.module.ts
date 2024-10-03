import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoveService } from '../love.service';
import { ApiService } from '../api.service';
import { PercentagePipe } from '../percentage.pipe';



@NgModule({
  declarations: [
    PercentagePipe
  ],
  exports: [
    PercentagePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoveService,
    ApiService
  ]
})
export class ServicesModule { }
