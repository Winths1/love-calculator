import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorPage } from './calculator.page';
import { resultIdMatchGuard } from './result-id-match.guard';
import { resultIdExistsGuard } from './result-id-exists.guard';

const routes: Routes = [
  {
    path: ':id',
    component: CalculatorPage,
    canMatch: [resultIdMatchGuard],
    canActivate: [resultIdExistsGuard]
  },
  {
    path: '',
    component: CalculatorPage
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorPageRoutingModule {}
