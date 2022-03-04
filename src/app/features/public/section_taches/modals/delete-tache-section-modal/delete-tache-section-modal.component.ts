import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-tache-section-modal',
  templateUrl: './delete-tache-section-modal.component.html',
  styleUrls: ['./delete-tache-section-modal.component.scss']
})
export class DeleteTacheSectionModalComponent implements OnInit {

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
