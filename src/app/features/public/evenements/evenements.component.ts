import { Component, Input, OnInit } from '@angular/core';
import { EvenementsService } from '../../../services/evenements.service';

import { Evenements } from '../../../models/evenements';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddEvenementComponent } from '../../../shared/modals/modal-add-evenement/modal-add-evenement.component';
import { User } from '../../../models/user';

import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from '../../../services/alert.service';
import { ModalModifyEvenementComponent } from '../../../shared/modals/modal-modify-evenement/modal-modify-evenement.component';
import { ModalDeleteEvenementComponent } from '../../../shared/modals/modal-delete-evenement/modal-delete-evenement.component';
import { NotificationService } from '../../../services/notification.service';
import { ModalAddEvenementRecurrentComponent } from '../../../shared/modals/modal-add-evenement-recurrent/modal-add-evenement-recurrent.component';
import { Recurent_event } from '../../../models/recurent_event';
import { RecurentEventService } from '../../../services/recurent-event.service';
import { SharedEventService } from 'src/app/services/sharedEvents/shared-event.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

  evenements : Evenements[] = []
  currentUser !: User; 

  @Input() fromParent : any;


  constructor(
    private serverEvenements : EvenementsService,
    private modalService : NgbModal,
    private authService: AuthService,
    private alertService : AlertService,
    private notifService : NotificationService,
    private sharedEvenet : SharedEventService
  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });

    sharedEvenet.changeEmitted$.subscribe( resp => {
      this.evenements.push(resp);
    });
  }

  ngOnInit(): void {
    this.getEvenements();
  }

  getEvenements(){
    this.serverEvenements.getAll().subscribe(resp => {
      this.evenements = resp;
    });
  }  

  showDateImportance(){
    let currentDate = new Date();
    for(let evenement of this.evenements){
      
    }
  }


  //Modals
  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddEvenementComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item : any) => {
      console.log(item);
      
      let event = {
        id_e : 0,
        nom_e : item.nom_e,
        date_exec_e : item.date_exec_e,
        date_fin_e : item.date_fin_e,
        desc_e : item.desc_e,
        done_e : 0,
        id_coloc : this.currentUser.id_coloc
      }
      
      this.serverEvenements.create(event);
      this.evenements.push(event);
      this.alertService.showSuccess('Evenement', 'Evenement créé avec succès');

    });
  }

  

  openModalModif(item : Evenements){
    console.log(item);
    
    const modalRef = this.modalService.open(ModalModifyEvenementComponent, {
      windowClass:'modalEvenement'
    });

    modalRef.componentInstance.fromParent = item;

    modalRef.componentInstance.event.subscribe((item : Evenements) => {
      let event = {
        id_e : item.id_e,
        nom_e : item.nom_e,
        date_exec_e : item.date_exec_e,
        date_fin_e : item.date_fin_e,
        desc_e : item.desc_e,
        done_e : item.done_e,
        id_coloc : item.id_coloc
      }

      this.serverEvenements.update(event.id_e, event);
      this.evenements.push(event);
      this.evenements.splice(this.evenements.indexOf(item), 1);
    });
  }

  openModalDelete(item : Evenements){
    const modalDelete = this.modalService.open(ModalDeleteEvenementComponent, {
    });

    modalDelete.componentInstance.fromParent = item;
    modalDelete.componentInstance.event.subscribe((item : any) => {
      this.serverEvenements.delete(item.id_e);
      this.evenements.splice(this.evenements.indexOf(item), 1);
      this.alertService.showSuccess('Succès', 'Evenement supprimé de la liste');


      this.authService.getAll().subscribe( resp => {

        for(let user of resp){
          console.log("aazeaeazeazeazeazeeaeazeazeazeaz");
          if(user.id_user != this.currentUser.id_user){
            this.notifService.postChangeSomething(this.currentUser.username_user, 'evenement', this.currentUser.id_coloc, this.currentUser.id_user, user.id_user, );
          }
        }
      });

    });
  }

  
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  ngOnDestroy() {
    
  }
}