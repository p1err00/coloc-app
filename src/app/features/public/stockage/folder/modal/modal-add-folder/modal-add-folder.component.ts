import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-folder',
  templateUrl: './modal-add-folder.component.html',
  styleUrls: ['./modal-add-folder.component.scss']
})
export class ModalAddFolderComponent implements OnInit {

  isPublic : boolean = false;
  isPartage : boolean = false;

  @Output() event = new EventEmitter<any>();

  constructor(
    public activeModal : NgbActiveModal

  ) { }

  ngOnInit(): void {
  }

  changePublicState(){
    this.isPublic = !this.isPublic;
  }

  changePartageState(){
    this.isPartage = !this.isPartage;
  }
  saveModal(nom : string){
    console.log(nom);
    console.log(this.isPublic);
    console.log(this.isPartage);
    
    
    this.event.emit({
      nom : nom,
      isPublic : this.isPublic,
      isPartage : this.isPartage
    });

    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
