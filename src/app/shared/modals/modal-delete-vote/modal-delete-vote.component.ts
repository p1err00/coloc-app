import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-vote',
  templateUrl: './modal-delete-vote.component.html',
  styleUrls: ['./modal-delete-vote.component.scss']
})
export class ModalDeleteVoteComponent implements OnInit {

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
