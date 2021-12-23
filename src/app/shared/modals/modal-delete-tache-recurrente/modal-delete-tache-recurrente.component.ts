import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-tache-recurrente',
  templateUrl: './modal-delete-tache-recurrente.component.html',
  styleUrls: ['./modal-delete-tache-recurrente.component.scss']
})
export class ModalDeleteTacheRecurrenteComponent implements OnInit {

  @Input() fromParent : any;
  @Output() event = new EventEmitter<any>();



  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.activeModal.close();
  }

  deleteItem(){

    this.event.emit(this.fromParent);
    this.activeModal.close();
  }
}
