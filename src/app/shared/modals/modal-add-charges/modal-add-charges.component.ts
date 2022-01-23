import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-charges',
  templateUrl: './modal-add-charges.component.html',
  styleUrls: ['./modal-add-charges.component.scss']
})
export class ModalAddChargesComponent implements OnInit {

  @Output() event = new EventEmitter<any>();


  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }
  
  saveModal(nom : string, valeur : string){
    
    this.event.emit({
      id_cha: 0,
      nom_cha : nom,
      valeur_cha : valeur
    });
    this.activeModal.close();
  }

}
