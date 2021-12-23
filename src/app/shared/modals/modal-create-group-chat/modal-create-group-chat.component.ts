import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-group-chat',
  templateUrl: './modal-create-group-chat.component.html',
  styleUrls: ['./modal-create-group-chat.component.scss']
})
export class ModalCreateGroupChatComponent implements OnInit {

  @Output() fromParent = new EventEmitter<any>();

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }
  
  saveModal(nom : string){
    
    this.fromParent.emit({

    });
    
    this.activeModal.close();
      
  }
}
