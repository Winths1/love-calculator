import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { FormInputComponent } from './form-input/form-input.component';
import { LoaderComponent } from '../loader/loader.component';
import { ServicesModule } from '../services/services.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/calculator', '.json')
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    ServicesModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [
    CalculatorPage,
    FormComponent,
    ResultComponent,
    FormInputComponent,
    LoaderComponent
  ]
})
export class CalculatorPageModule {
  constructor(
    translateService: TranslateService
  ) {
    translateService.use(translateService.getBrowserLang() || translateService.getDefaultLang())
  }
}
