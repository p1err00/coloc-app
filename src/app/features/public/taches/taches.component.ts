import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TachesService } from '../../../services/taches.service';

import { Taches } from '../../../models/taches';
import { ModalAddTachesComponent } from '../../../shared/modals/modal-add-taches/modal-add-taches.component';
import { ModaleTachesDeleteComponent } from '../../../shared/modals/modal-taches-delete/modale-taches-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../models/user';

import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { ModalModifyTachesComponent } from '../../../shared/modals/modal-modify-taches/modal-modify-taches/modal-modify-taches.component';
import { AlertService } from '../../../services/alert.service';
import { NotificationService } from '../../../services/notification.service';
import { SharedTachesService } from 'src/app/services/sharedTaches/shared-taches.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {

  currentUser !: User;
  currentUserTache : string = '';

  tachesDefini : Taches[] = [];
  tachesNonDefini : Taches[] = [];
  tachesFaites : Taches[] = [];

  //User list
   users : User[] = [];
   @Input() fromParent : any;

  constructor(
    private serverTaches : TachesService,
    private modalService : NgbModal,
    private authService: AuthService,
    private alertService : AlertService,
    private notifService : NotificationService,
    private sharedTache : SharedTachesService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });

    sharedTache.changeEmitted$.subscribe( resp => {
      this.tachesNonDefini.push(resp);      
    });
   }

  ngOnInit(): void {
    this.getTaches();
    this.getUsers();
  }

  // ============= Get data ============= 
  getTaches(){
    this.serverTaches.getAll().subscribe(resp => {
      this.sortTaches(resp);
    });
  }

  getUsers(){
    this.authService.getAll().subscribe( resp => {
      let coloc = this.currentUser.id_coloc;

      for(let res of resp){
        if(res.id_coloc === coloc){
          this.users.push(res);
        }
      }
    });
  }

  

  // ============= Actions ============= 
  sortTaches(item : Taches[]){
    for(let tache of item){
      if(tache.personne_t != '' && tache.done_t != 1){
        this.tachesDefini.push(tache);
      } else if(tache.done_t != 1) {
        this.tachesNonDefini.push(tache);
      } else {
        this.tachesFaites.push(tache);
      }
    }
  }

  sortTache(item : Taches){

    if(item.personne_t != '' && item.done_t != 1){
      console.log('tache defini');

      this.tachesDefini.push(item);
    } else {
      console.log('tache Non defini');

      this.tachesNonDefini.push(item);
    }
  }

  //Open modals

  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddTachesComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.fromParent = this.users;

    modalRef.componentInstance.event.subscribe((item : Taches) => {
      

      let tache = {
        id_t : 0,
        nom_t : item.nom_t,
        date_exec_t : item.date_exec_t,
        date_fin_t : item.date_fin_t,
        desc_t : item.desc_t,
        done_t : 0,
        personne_t : item.personne_t,
        nb_select_t : 0,
        id_coloc : this.currentUser.id_coloc
      }

      this.sortTache(tache);
      this.serverTaches.create(tache);
      this.alertService.showSuccess('Tache', 'Tache créer avec succès');
    });
  }

  
  //Modify task
  openModalModif(item : Taches){
    const modalRef = this.modalService.open(ModalModifyTachesComponent,{
      windowClass : 'modalStock'
    });
    console.log(item);

    modalRef.componentInstance.fromParent = item;
    modalRef.componentInstance.users = this.users;

    modalRef.componentInstance.event.subscribe((item : Taches) => {

      let tache = {
        id_t : item.id_t,
        nom_t : item.nom_t,
        date_exec_t : item.date_exec_t,
        date_fin_t : item.date_fin_t,
        desc_t : item.desc_t,
        done_t : 0,
        personne_t : item.personne_t,
        nb_select_t : 0,
        id_coloc : this.currentUser.id_coloc
      }

      this.serverTaches.update(tache.id_t, tache);
      this.tachesDefini.push(tache);
      this.tachesDefini.splice(this.tachesDefini.indexOf(item),1);

      this.alertService.showSuccess('Tache', 'Tache modifier avec succès');
    });
  }

  //Delete
  openModalDeleteTacheDefini(tache : any){
    const modalDelete = this.modalService.open(ModaleTachesDeleteComponent, {
    });
    modalDelete.componentInstance.fromParent = tache;

    modalDelete.componentInstance.event.subscribe((item : any) => {

      this.serverTaches.delete(item.id_t);
      this.tachesDefini.splice(this.tachesDefini.indexOf(item), 1);

      this.alertService.showSuccess('Tache', 'Tache supprimé avec succès');
    });
  }
  openModalDeleteTacheNonDefini(tache : any){
    
    const modalDelete = this.modalService.open(ModaleTachesDeleteComponent, {
    });
    modalDelete.componentInstance.fromParent = tache;

    modalDelete.componentInstance.event.subscribe((item : any) => {

      this.serverTaches.delete(item.id_t);
      this.tachesNonDefini.splice(this.tachesDefini.indexOf(item), 1);

      this.alertService.showSuccess('Tache', 'Tache supprimé avec succès');

    });
  }
  openModalDeleteTacheFaite(tache : any){
    const modalDelete = this.modalService.open(ModaleTachesDeleteComponent, {
    });
    modalDelete.componentInstance.fromParent = tache;

    modalDelete.componentInstance.event.subscribe((item : any) => {

      this.serverTaches.delete(item.id_t);
      this.tachesFaites.splice(this.tachesFaites.indexOf(item), 1);

      this.alertService.showSuccess('Tache', 'Tache supprimé avec succès');

    });
  }

  isChecked(item : Taches){
    console.log(item.id_t)

    //Change done and change item to tachesFaite column
    item.done_t = 1;
    this.tachesFaites.push(item);
    this.tachesDefini.splice(this.tachesDefini.indexOf(item), 1);

    this.serverTaches.update(item.id_t, item);

    this.alertService.showSuccess('Tache', 'Tache faite');

  }

  //Change name in tacheNonDefini
  selectChange( event : any){
    this.currentUserTache = event.target.value;
  }

  setUserToTache(tache : Taches){
    console.log(tache);

    if(this.currentUserTache == ''){
      this.alertService.showError('Tache', 'Pas de personne selectionné');
      return;
    }

    let newTache = {
      id_t : tache.id_t,
      nom_t : tache.nom_t,
      date_exec_t : tache.date_exec_t,
      date_fin_t : tache.date_fin_t,
      desc_t : tache.desc_t,
      done_t : tache.done_t,
      personne_t : this.currentUserTache,
      nb_select_t : tache.nb_select_t,
      id_coloc : tache.id_coloc
    }

    this.serverTaches.update(tache.id_t, newTache);
    this.tachesNonDefini.splice(this.tachesNonDefini.indexOf(tache), 1);
    this.tachesDefini.push(newTache);

    this.alertService.showSuccess('Tache', 'Personne assignée à la tache');

    for(let user of this.users){
      if(user.username_user == this.currentUserTache){
        this.notifService.postAssignToTache(this.currentUser.id_coloc ,user.id_user)
      } else {
        this.notifService.postAssignToTacheAll(this.currentUser.username_user, this.currentUser.id_coloc, this.currentUserTache,user.id_user)
      }
    }

  }  

  addToTacheNonDefini(item : Taches){
    item.personne_t = '';
    item.id_t = 0;
    item.done_t = 0;
    this.tachesNonDefini.push(item);
    this.serverTaches.create(item);
    this.alertService.showSuccess('Succes', 'tache ajoutée');
  }

  

  

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }
}
