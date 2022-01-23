import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-folder',
  templateUrl: './modal-delete-folder.component.html',
  styleUrls: ['./modal-delete-folder.component.scss']
})
export class ModalDeleteFolderComponent implements OnInit {

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
