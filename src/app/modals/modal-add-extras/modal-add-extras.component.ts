import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-extras',
  templateUrl: './modal-add-extras.component.html',
  styleUrls: ['./modal-add-extras.component.scss']
})
export class ModalAddExtrasComponent implements OnInit {

  @Output() event = new EventEmitter<any>();


  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }
  saveModal(nom : string, valeur : string){
    
    this.event.emit({
      id_ex: 0,
      nom_ex : nom,
      valeur_ex : valeur
    });
    this.activeModal.close();
  }
}
