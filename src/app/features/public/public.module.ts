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
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  exports: [
  ]
})
export class PublicModule { }
