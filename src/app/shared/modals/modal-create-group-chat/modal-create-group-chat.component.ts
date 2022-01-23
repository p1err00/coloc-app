import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-modal-create-group-chat',
  templateUrl: './modal-create-group-chat.component.html',
  styleUrls: ['./modal-create-group-chat.component.scss']
})
export class ModalCreateGroupChatComponent implements OnInit {

  @Output() event = new EventEmitter<any>();
  @Input() fromParent : any;
  usersList : User[] = [];

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    this.usersList = this.fromParent;
  }

  closeModal() {
    this.activeModal.close();
  }
  
  saveModal(nom : string){
    
    this.event.emit({

    });
    
    this.activeModal.close();
      
  }
}
