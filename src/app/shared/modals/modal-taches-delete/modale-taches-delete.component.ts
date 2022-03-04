import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale-taches-delete',
  templateUrl: './modale-taches-delete.component.html',
  styleUrls: ['./modale-taches-delete.component.scss']
})
export class ModaleTachesDeleteComponent implements OnInit {

  @Input() fromParent: any;
  @Output() event = new EventEmitter<any>();


  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  deleteItem(fromParent: any) {

    this.event.emit(this.fromParent);
    this.activeModal.close();
  }
}
