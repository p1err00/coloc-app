import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { StockComponent } from './stock/stock.component';
import { ModalStockComponent } from './modals/modal-stock/modal-stock.component';
import { ModalStockDeleteComponent } from './modals/modal-stock-delete/modal-stock-delete.component';
import { ModalAddStockComponent } from './modals/modal-add-stock/modal-add-stock.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalImportanceAddComponent } from './modals/modal-importance-add/modal-importance-add.component';
import { ModalImportanceModifComponent } from './modals/modal-importance-modif/modal-importance-modif.component';
import { ModalImportanceDeleteComponent } from './modals/modal-importance-delete/modal-importance-delete.component';
import { ModalCategorieAddComponent } from './modals/modal-categorie-add/modal-categorie-add.component';
import { ModalCategorieModifComponent } from './modals/modal-categorie-modif/modal-categorie-modif.component';
import { ModalCategorieDeleteComponent } from './modals/modal-categorie-delete/modal-categorie-delete.component';
import { HomeComponent } from './home/home.component';
import { TachesComponent } from './taches/taches.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { DatePipe } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ModalAddCourseComponent } from './modals/modal-add-course/modal-add-course.component';
import { DepensesComponent } from './depenses/depenses.component';
import { ModalAddWishlistComponent } from './modals/modal-add-wishlist/modal-add-wishlist/modal-add-wishlist.component';
import { ModalModifyWishlistComponent } from './modals/modal-modify-wishlist/modal-modify-wishlist.component';
import { ModalAddTachesComponent } from './modals/modal-add-taches/modal-add-taches.component';
import { ModalModifyTachesComponent } from './modals/modal-modify-taches/modal-modify-taches/modal-modify-taches.component';
import { ModalModifyEventsComponent } from './modals/modal-modify-events/modal-modify-events/modal-modify-events.component';
import { ModalAddDepenseComponent } from './modals/modal-add-depense/modal-add-depense/modal-add-depense.component';
import { ModalModifyDepenseComponent } from './modals/modal-modify-depense/modal-modify-depense/modal-modify-depense.component';
import { PersonnalisationComponent } from './personnalisation/personnalisation.component';
import { OptionsComponent } from './options/options.component';
import { ModaleTachesDeleteComponent } from './modals/modal-taches-delete/modale-taches-delete.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { ModalAddEvenementComponent } from './modals/modal-add-evenement/modal-add-evenement.component';
import { ModalModifyEvenementComponent } from './modals/modal-modify-evenement/modal-modify-evenement.component';
import { ModalDeleteEvenementComponent } from './modals/modal-delete-evenement/modal-delete-evenement.component';
import { SelectColocComponent } from './select-coloc/select-coloc.component';
import { RejoindreColocModalComponent } from './modals/rejoindre-coloc-modal/rejoindre-coloc-modal.component';
import { CreerColocModalComponent } from './modals/creer-coloc-modal/creer-coloc-modal.component';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { ModalAddChargesComponent } from './modals/modal-add-charges/modal-add-charges.component';
import { ModalAddExtrasComponent } from './modals/modal-add-extras/modal-add-extras.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StockageComponent } from './stockage/stockage.component';
import { ChatComponent } from './chat/chat.component';
import { ChannelsComponent } from './chat/channels/channels.component';
import { ChartsModule } from 'ng2-charts';
import { VoteComponent } from './vote/vote.component';
import { ModalAddVoteComponent } from './modals/modal-add-vote/modal-add-vote.component';
import { ModalDeleteVoteComponent } from './modals/modal-delete-vote/modal-delete-vote.component';

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
    HomeComponent,
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
    ChartsModule
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
