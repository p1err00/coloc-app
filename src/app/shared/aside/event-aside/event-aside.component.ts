import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recurent_event } from 'src/app/models/recurent_event';
import { User } from 'src/app/models/user';
import { EvenementsService } from 'src/app/services/evenements.service';
import { RecurentEventService } from 'src/app/services/recurent-event.service';
import { SharedEventService } from 'src/app/services/sharedEvents/shared-event.service';
import { ModalAddEvenementRecurrentComponent } from '../../modals/modal-add-evenement-recurrent/modal-add-evenement-recurrent.component';

@Component({
  selector: 'app-event-aside',
  templateUrl: './event-aside.component.html',
  styleUrls: ['./event-aside.component.scss']
})
export class EventAsideComponent implements OnInit {

  @Input() currentUser !: User;

  recurent_event : Recurent_event[] = [];


  constructor(
    private recurent_eventService : RecurentEventService,
    private modalService : NgbModal,
    private sharedEvenet : SharedEventService,
    private eventService : EvenementsService

  ) { }

  ngOnInit(): void {
    this.getRecurentEvent();

  }

  getRecurentEvent(){
    setTimeout(() => {
      this.recurent_eventService.getAll(this.currentUser.id_coloc).subscribe( resp => {
        this.recurent_event = resp;
      });
    }, 200);
  }

  openModalAddRecurent(){
    const modalRef = this.modalService.open(ModalAddEvenementRecurrentComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item : Recurent_event) => {
      console.log(item);
      item.id_coloc = this.currentUser.id_coloc
      
      this.recurent_eventService.create(item);
      this.recurent_event.push(item);

    });
  }

  addToEvent(recurrent : Recurent_event ){
    let event = {
      id_e : 0,
      nom_e : recurrent.nom,
      date_exec_e : new Date(),
      date_fin_e : new Date(),
      desc_e : '',
      done_e : 0,
      id_coloc : this.currentUser.id_coloc
    }
    this.eventService.create(event);
    this.sharedEvenet.emitChange(event);
  }
  deleteRecurentEvent(){
    
  }
}
