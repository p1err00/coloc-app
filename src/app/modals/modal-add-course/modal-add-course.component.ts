import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-course',
  templateUrl: './modal-add-course.component.html',
  styleUrls: ['./modal-add-course.component.scss']
})
export class ModalAddCourseComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }
  saveModal(nom : string, prix : string){
    console.log(prix);
    
    this.event.emit({
      id: 0,
      nom : nom,
      prix : prix
    });
    this.activeModal.close();
  }
}
