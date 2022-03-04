import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-taches-item',
  templateUrl: './delete-taches-item.component.html',
  styleUrls: ['./delete-taches-item.component.scss']
})
export class DeleteTachesItemComponent implements OnInit {

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

  deleteItem() {

    this.event.emit(this.fromParent);
    this.activeModal.close();
  }

}
