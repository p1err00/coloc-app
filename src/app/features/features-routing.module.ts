import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './public/budget/budget.component';


const routes: Routes = [
    {path: 'home', 
    loadChildren: () => import('./public/public.module').then(m => {
        m.PublicModule
      })},
      { path : 'budget', component : BudgetComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class FeaturesRoutingModule { }