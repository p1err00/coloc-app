import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StockComponent } from './features/public/stock/stock.component';
import { ModalStockComponent } from './shared/modals/modal-stock/modal-stock.component';
import { ModalStockDeleteComponent } from './shared/modals/modal-stock-delete/modal-stock-delete.component';
import { ModalAddStockComponent } from './shared/modals/modal-add-stock/modal-add-stock.component';
import { CoursesComponent } from './features/public/courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalImportanceAddComponent } from './shared/modals/modal-importance-add/modal-importance-add.component';
import { ModalImportanceModifComponent } from './shared/modals/modal-importance-modif/modal-importance-modif.component';
import { ModalImportanceDeleteComponent } from './shared/modals/modal-importance-delete/modal-importance-delete.component';
import { ModalCategorieAddComponent } from './shared/modals/modal-categorie-add/modal-categorie-add.component';
import { ModalCategorieModifComponent } from './shared/modals/modal-categorie-modif/modal-categorie-modif.component';
import { ModalCategorieDeleteComponent } from './shared/modals/modal-categorie-delete/modal-categorie-delete.component';
import { TachesComponent } from './features/public/taches/taches.component';
import { EvenementsComponent } from './features/public/evenements/evenements.component';
import { DatePipe } from '@angular/common';
import { WishlistComponent } from './features/public/wishlist/wishlist.component';
import { ModalAddCourseComponent } from './shared/modals/modal-add-course/modal-add-course.component';
import { DepensesComponent } from './features/public/depenses/depenses.component';
import { ModalAddWishlistComponent } from './shared/modals/modal-add-wishlist/modal-add-wishlist/modal-add-wishlist.component';
import { ModalModifyWishlistComponent } from './shared/modals/modal-modify-wishlist/modal-modify-wishlist.component';
import { ModalAddTachesComponent } from './shared/modals/modal-add-taches/modal-add-taches.component';
import { ModalModifyTachesComponent } from './shared/modals/modal-modify-taches/modal-modify-taches/modal-modify-taches.component';
import { ModalModifyEventsComponent } from './shared/modals/modal-modify-events/modal-modify-events/modal-modify-events.component';
import { ModalAddDepenseComponent } from './shared/modals/modal-add-depense/modal-add-depense/modal-add-depense.component';
import { ModalModifyDepenseComponent } from './shared/modals/modal-modify-depense/modal-modify-depense/modal-modify-depense.component';
import { PersonnalisationComponent } from './features/public/personnalisation/personnalisation.component';
import { OptionsComponent } from './features/public/options/options.component';
import { ModaleTachesDeleteComponent } from './shared/modals/modal-taches-delete/modale-taches-delete.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './features/auth/signin/signin.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { UserProfilComponent } from './features/public/user-profil/user-profil.component';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { ModalAddEvenementComponent } from './shared/modals/modal-add-evenement/modal-add-evenement.component';
import { ModalModifyEvenementComponent } from './shared/modals/modal-modify-evenement/modal-modify-evenement.component';
import { ModalDeleteEvenementComponent } from './shared/modals/modal-delete-evenement/modal-delete-evenement.component';
import { SelectColocComponent } from './select-coloc/select-coloc.component';
import { RejoindreColocModalComponent } from './shared/modals/rejoindre-coloc-modal/rejoindre-coloc-modal.component';
import { CreerColocModalComponent } from './shared/modals/creer-coloc-modal/creer-coloc-modal.component';
import { NotificationComponent } from './features/public/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidebarRightComponent } from './shared/sidebar-right/sidebar-right.component';
import { ModalAddChargesComponent } from './shared/modals/modal-add-charges/modal-add-charges.component';
import { ModalAddExtrasComponent } from './shared/modals/modal-add-extras/modal-add-extras.component';
import { StatistiquesComponent } from './features/public/statistiques/statistiques.component';
import { StockageComponent } from './features/public/stockage/stockage.component';
import { ChatComponent } from './chat/chat.component';
import { ChannelsComponent } from './chat/channels/channels.component';
import { ChartsModule } from 'ng2-charts';
import { VoteComponent } from './features/public/vote/vote.component';
import { ModalAddVoteComponent } from './shared/modals/modal-add-vote/modal-add-vote.component';
import { ModalDeleteVoteComponent } from './shared/modals/modal-delete-vote/modal-delete-vote.component';
import { AsideComponent } from './shared/aside/aside.component';
import { HomeAsideComponent } from './shared/aside/home-aside/home-aside.component';
import { SharedModule } from './shared/shared.module';
import { TacheAsideComponent } from './shared/aside/tache-aside/tache-aside.component';
import { EventAsideComponent } from './shared/aside/event-aside/event-aside.component';
import { CourseAsideComponent } from './shared/aside/course-aside/course-aside.component';
import { StockageAsideComponent } from './shared/aside/stockage-aside/stockage-aside.component';
import { StockAsideComponent } from './shared/aside/stock-aside/stock-aside.component';
import { StatistiqueAsideComponent } from './shared/aside/statistique-aside/statistique-aside.component';
import { WishlistAsideComponent } from './shared/aside/wishlist-aside/wishlist-aside.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StockComponent,
    ModalStockComponent,
    ModalStockDeleteComponent,
    ModalAddStockComponent,
    CoursesComponent,
    ModalImportanceAddComponent,
    ModalImportanceModifComponent,
    ModalImportanceDeleteComponent,
    ModalCategorieAddComponent,
    ModalCategorieModifComponent,
    ModalCategorieDeleteComponent,
    TachesComponent,
    EvenementsComponent,
    WishlistComponent,
    ModalAddCourseComponent,
    DepensesComponent,
    ModalAddWishlistComponent,
    ModalModifyWishlistComponent,
    ModalAddTachesComponent,
    ModalModifyTachesComponent,
    ModalModifyEventsComponent,
    ModalAddDepenseComponent,
    ModalModifyDepenseComponent,
    PersonnalisationComponent,
    OptionsComponent,
    ModaleTachesDeleteComponent,
    SigninComponent,
    SignupComponent,
    UserProfilComponent,
    ModalAddEvenementComponent,
    ModalModifyEvenementComponent,
    ModalDeleteEvenementComponent,
    SelectColocComponent,
    RejoindreColocModalComponent,
    CreerColocModalComponent,
    NotificationComponent,
    SidebarRightComponent,
    ModalAddChargesComponent,
    ModalAddExtrasComponent,
    StatistiquesComponent,
    StockageComponent,
    ChatComponent,
    ChannelsComponent,
    VoteComponent,
    ModalAddVoteComponent,
    ModalDeleteVoteComponent,
    AsideComponent,
    HomeAsideComponent,
    TacheAsideComponent,
    EventAsideComponent,
    CourseAsideComponent,
    StockageAsideComponent,
    StockAsideComponent,
    StatistiqueAsideComponent,
    WishlistAsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 150000, // 15 seconds
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right'
    }),
    ChartsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],

  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
