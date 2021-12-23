import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recurent_Tache } from 'src/app/models/recurent_tache';
import { User } from 'src/app/models/user';
import { RecurentTacheService } from 'src/app/services/recurent-tache.service';
import { SharedTachesService } from 'src/app/services/sharedTaches/shared-taches.service';
import { TachesService } from 'src/app/services/taches.service';
import { ModalAddTacheRecurrenteComponent } from '../../modals/modal-add-tache-recurrente/modal-add-tache-recurrente.component';
import { ModalDeleteTacheRecurrenteComponent } from '../../modals/modal-delete-tache-recurrente/modal-delete-tache-recurrente.component';

@Component({
  selector: 'app-tache-aside',
  templateUrl: './tache-aside.component.html',
  styleUrls: ['./tache-aside.component.scss']
})
export class TacheAsideComponent implements OnInit {

  @Input() currentUser !: User;
  @Input() users !: User[];

  @Output() reload = new EventEmitter();

  recurentTaches : Recurent_Tache[] = [];


  constructor(
    private recurentTacheService : RecurentTacheService,
    private tacheService : TachesService,
    private modalService : NgbModal,
    private sharedTache : SharedTachesService
  ) { }

  ngOnInit(): void {
    this.getRecurentTache();

  }

  getRecurentTache(){
    setTimeout(() => {
      this.recurentTacheService.getAll(this.currentUser.id_coloc).subscribe(resp => {
        this.recurentTaches = resp;
      });
    });
  }

  convertToAddToTache(recurent : Recurent_Tache){
    let tache = {
      id_t : 0,
      nom_t : recurent.nom,
      date_exec_t : new Date,
      date_fin_t : new Date,
      desc_t : '',
      done_t : 0,
      personne_t : '',
      nb_select_t : 0,
      id_coloc : this.currentUser.id_coloc
    }
    this.tacheService.create(tache);
    this.sharedTache.emitChange(tache);
}

  createTacheRecurente(){
    const modalRef = this.modalService.open(ModalAddTacheRecurrenteComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.fromParent = this.users;

    modalRef.componentInstance.event.subscribe((item : Recurent_Tache) => {
    
      item.id_coloc = this.currentUser.id_coloc;
      console.log(item);
      
      this.recurentTacheService.create(item);
      this.recurentTaches.push(item);
    });
  }

  deleteTacheRecurente(recurent : Recurent_Tache, e : Event){
    e.stopPropagation();
    const modalDelete = this.modalService.open(ModalDeleteTacheRecurrenteComponent, {
    });
    modalDelete.componentInstance.fromParent = recurent;

    modalDelete.componentInstance.event.subscribe((item : any) => {

      this.recurentTacheService.delete(item.id);
      this.recurentTaches.splice(this.recurentTaches.indexOf(item), 1);
    });
  }

  
  
}
