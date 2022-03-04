import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalAddExternalUserComponent } from './modals/modal-add-external-user/modal-add-external-user.component';
import { ModalModifyExternalUserComponent } from './modals/modal-modify-external-user/modal-modify-external-user.component';
import { ModalDeleteExternalUserComponent } from './modals/modal-delete-external-user/modal-delete-external-user.component';


@NgModule({
  declarations: [

  
    ModalAddExternalUserComponent,
        ModalModifyExternalUserComponent,
        ModalDeleteExternalUserComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    
  ]
})
export class SharedModule { }
