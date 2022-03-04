import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepensesHomeComponent } from './home/depenses/depenses.component';
import { EventHomeComponent } from './home/event-home/event-home.component';
import { StockHomeComponent } from './home/stock-home/stock-home.component';
import { CourseHomeComponent } from './home/course-home/course-home.component';
import { HomeComponent } from './home/home.component';
import { TachesHomeComponent } from './home/taches-home/taches-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { ModalSeeTacheComponent } from './home/modal/modal-see-tache/modal-see-tache.component';
import { ModalAddComponent } from './wishlist/modals/modal-add/modal-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetComponent } from './budget/budget.component';
import { AbonnementComponent } from './budget/abonnement/abonnement.component';
import { RemboursementComponent } from './budget/remboursement/remboursement.component';
import { DepenseComponent } from './budget/depense/depense.component';
import { ModalDeleteWishlistComponent } from './wishlist/modals/modal-delete-wishlist/modal-delete-wishlist.component';
import { ModalModifyWishlistComponent } from './wishlist/modals/modal-modify-wishlist/modal-modify-wishlist.component';
import { ModalAddFileComponent } from './stockage/file/modal/modal-add-file/modal-add-file.component';
import { ModalModifyFileComponent } from './stockage/file/modal/modal-modify-file/modal-modify-file.component';
import { ModalDeleteFileComponent } from './stockage/file/modal/modal-delete-file/modal-delete-file.component';
import { ModalSendFileComponent } from './stockage/file/modal/modal-send-file/modal-send-file.component';
import { ModalAddFolderComponent } from './stockage/folder/modal/modal-add-folder/modal-add-folder.component';
import { ModalModifyFolderComponent } from './stockage/folder/modal/modal-modify-folder/modal-modify-folder.component';
import { ModalDeleteFolderComponent } from './stockage/folder/modal/modal-delete-folder/modal-delete-folder.component';
import { ModalSharedFolderComponent } from './stockage/folder/modal/modal-shared-folder/modal-shared-folder.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistHomeComponent } from './home/wishlist-home/wishlist-home/wishlist-home.component';
import { BudgetHomeComponent } from './home/budget-home/budget-home/budget-home.component';
import { StockageHomeComponent } from './home/stockage-home/stockage-home/stockage-home.component';
import { VoteHomeComponent } from './home/vote-home/vote-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { ModalAddDepenseComponent } from './budget/depense/modals/modal-add-depense/modal-add-depense.component';
import { ModalDeleteDepenseComponent } from './budget/depense/modals/modal-delete-depense/modal-delete-depense.component';
import { ModalPayedComponent } from './budget/depense/modals/modal-payed/modal-payed.component';
import { ModalMultiplePaymentComponent } from './budget/depense/modals/modal-multiple-payment/modal-multiple-payment.component';
import { ModalTransfertComponent } from './budget/depense/modals/modal-transfert/modal-transfert.component';
import { SectionTachesComponent } from './section_taches/section-taches/section-taches.component';
import { SectionTachesItemComponent } from './section_taches/section-taches-item/section-taches-item.component';
import { SectionEventsComponent } from './section_events/section-events/section-events.component';
import { SectionEventsItemComponent } from './section_events/section-events-item/section-events-item.component';
import { TacheUserHomeComponent } from './home/tache-user-home/tache-user-home/tache-user-home.component';
import { AddTachesItemComponent } from './section_taches/modals/add-taches-item/add-taches-item.component';
import { ModifyTachesItemComponent } from './section_taches/modals/modify-taches-item/modify-taches-item.component';
import { DeleteTachesItemComponent } from './section_taches/modals/delete-taches-item/delete-taches-item.component';
import { AddTacheSectionModalComponent } from './section_taches/modals/add-tache-section-modal/add-tache-section-modal.component';
import { ModifyTacheSectionModalComponent } from './section_taches/modals/modify-tache-section-modal/modify-tache-section-modal.component';
import { DeleteTacheSectionModalComponent } from './section_taches/modals/delete-tache-section-modal/delete-tache-section-modal.component';


@NgModule({
  declarations: [
    DepensesHomeComponent,
    EventHomeComponent,
    StockHomeComponent,
    CourseHomeComponent,
    HomeComponent,
    TachesHomeComponent,
    ModalSeeTacheComponent,
    ModalAddComponent,
    BudgetComponent,
    AbonnementComponent,
    RemboursementComponent,
    DepenseComponent,
    ModalDeleteWishlistComponent,
    ModalModifyWishlistComponent,
    ModalAddFileComponent,
    ModalModifyFileComponent,
    ModalDeleteFileComponent,
    ModalSendFileComponent,
    ModalAddFolderComponent,
    ModalModifyFolderComponent,
    ModalDeleteFolderComponent,
    ModalSharedFolderComponent,
    WishlistComponent,
    WishlistHomeComponent,
    BudgetHomeComponent,
    StockageHomeComponent,
    VoteHomeComponent,
    ModalAddDepenseComponent,
    ModalDeleteDepenseComponent,
    ModalPayedComponent,
    ModalMultiplePaymentComponent,
    ModalTransfertComponent,
    SectionTachesComponent,
    SectionTachesItemComponent,
    SectionEventsComponent,
    SectionEventsItemComponent,
    TacheUserHomeComponent,
    AddTachesItemComponent,
    ModifyTachesItemComponent,
    DeleteTachesItemComponent,
    AddTacheSectionModalComponent,
    ModifyTacheSectionModalComponent,
    DeleteTacheSectionModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
  ]
})
export class PublicModule { }
