import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CalculatorPageRoutingModule
  ],
  declarations: [CalculatorPage, FormComponent, ResultComponent, FormInputComponent]
})
export class CalculatorPageModule {}
