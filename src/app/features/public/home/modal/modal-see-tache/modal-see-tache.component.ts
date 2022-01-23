import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Taches } from 'src/app/models/taches';

@Component({
  selector: 'app-modal-see-tache',
  templateUrl: './modal-see-tache.component.html',
  styleUrls: ['./modal-see-tache.component.scss']
})
export class ModalSeeTacheComponent implements OnInit {

  @Input() fromParent !: Taches;

  constructor(
    public activeModal : NgbActiveModal,

  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }
}
