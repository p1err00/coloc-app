import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-stock-delete',
  templateUrl: './modal-stock-delete.component.html',
  styleUrls: ['./modal-stock-delete.component.scss']
})
export class ModalStockDeleteComponent implements OnInit {

  @Input() fromParent : any;
  @Output() event = new EventEmitter<any>();

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    
  }

  closeModal(){
    this.activeModal.close();
  }

  deleteItem(fromParent : any){
    console.log(fromParent);
    
    this.event.emit(this.fromParent);
    this.activeModal.close();
  }
}
