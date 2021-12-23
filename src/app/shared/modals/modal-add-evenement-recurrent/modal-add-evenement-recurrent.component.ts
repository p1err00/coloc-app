import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-modal-add-evenement-recurrent',
  templateUrl: './modal-add-evenement-recurrent.component.html',
  styleUrls: ['./modal-add-evenement-recurrent.component.scss']
})
export class ModalAddEvenementRecurrentComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  constructor(
    public activeModal : NgbActiveModal,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  saveModal(name: string){
    
    if (name != '') {
      this.event.emit({
        nom : name
      });

      this.activeModal.close();
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
}
