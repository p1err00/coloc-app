import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-evenement',
  templateUrl: './modal-add-evenement.component.html',
  styleUrls: ['./modal-add-evenement.component.scss']
})
export class ModalAddEvenementComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  saveModal(name: string, date_exec : string, date_fin : string, desc : string){
    
    this.event.emit({
      id_e: 0,
      nom_e : name,
      date_exec_e : date_exec,
      date_fin_e : date_fin,
      desc_e : desc,
    });

    this.activeModal.close();
    
  }
}
