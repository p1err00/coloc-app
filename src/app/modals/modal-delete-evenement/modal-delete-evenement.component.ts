import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-evenement',
  templateUrl: './modal-delete-evenement.component.html',
  styleUrls: ['./modal-delete-evenement.component.scss']
})
export class ModalDeleteEvenementComponent implements OnInit {

  @Input() fromParent : any;
  @Output() event = new EventEmitter<any>();
  
  constructor(
    public activeModal : NgbActiveModal

  ) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    
  }

  closeModal(){
    this.activeModal.close();

  }

  deleteItem(fromParent : any){

    this.event.emit(this.fromParent);
    this.activeModal.close();

  }
}
