import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/public/courses/courses.component';

import { SelectColocComponent } from './select-coloc/select-coloc.component';
import { SigninComponent } from './features/auth/signin/signin.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { HomeComponent } from './features/public/home/home.component';
import { TachesComponent } from './features/public/taches/taches.component';
import { EvenementsComponent } from './features/public/evenements/evenements.component';
import { PersonnalisationComponent } from './features/public/personnalisation/personnalisation.component';
import { OptionsComponent } from './features/public/options/options.component';
import { DepensesComponent } from './features/public/depenses/depenses.component';
import { StatistiquesComponent } from './features/public/statistiques/statistiques.component';
import { StockageComponent } from './features/public/stockage/stockage.component';
import { VoteComponent } from './features/public/vote/vote.component';
import { UserProfilComponent } from './features/public/user-profil/user-profil.component';
import { StockComponent } from './features/public/stock/stock.component';
import { BudgetComponent } from './features/public/budget/budget.component';
import { WishlistComponent } from './features/public/wishlist/wishlist.component';
import { SectionTachesComponent } from './features/public/section_taches/section-taches/section-taches.component';
import { SectionEventsComponent } from './features/public/section_events/section-events/section-events.component';


const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => {
      m.FeaturesModule
    })
  },
  {
    path: 'public',
    loadChildren: () => import('./features/public/public.module').then(m => {
      m.PublicModule
    })
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => {
      m.SharedModule
    })
  },

  { path: 'select-coloc', component: SelectColocComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'stock', component: StockComponent },
  { path: 'home', component: HomeComponent },
  { path: 'taches', component: TachesComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'personnalisation', component: PersonnalisationComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'depense', component: DepensesComponent },
  { path: 'statistique', component: StatistiquesComponent },
  { path: 'stockage', component: StockageComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'user-profil', component: UserProfilComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'section_taches', component: SectionTachesComponent },
  { path: 'section_event', component: SectionEventsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
