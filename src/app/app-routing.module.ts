import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CoursesComponent } from './courses/courses.component';
import { DepensesComponent } from './depenses/depenses.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { PersonnalisationComponent } from './personnalisation/personnalisation.component';
import { SelectColocComponent } from './select-coloc/select-coloc.component';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StockComponent } from './stock/stock.component';
import { StockageComponent } from './stockage/stockage.component';
import { TachesComponent } from './taches/taches.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { VoteComponent } from './vote/vote.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'select-coloc', component: SelectColocComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile', component: UserProfilComponent, canActivate: [AuthGuard] },
  {path: 'stock', component: StockComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'taches', component: TachesComponent},
  {path: 'evenements', component : EvenementsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'personnalisation', component: PersonnalisationComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'depense', component: DepensesComponent},
  {path: 'statistique', component: StatistiquesComponent},
  {path: 'stockage', component: StockageComponent},
  {path: 'vote', component: VoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
