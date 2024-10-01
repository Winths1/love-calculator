import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'calculator',
        pathMatch: 'full'
      },
      {
        path: 'calculator',
        loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
