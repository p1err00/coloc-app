import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-modal-add-tache-recurrente',
  templateUrl: './modal-add-tache-recurrente.component.html',
  styleUrls: ['./modal-add-tache-recurrente.component.scss']
})
export class ModalAddTacheRecurrenteComponent implements OnInit {
  
  @Output() event = new EventEmitter<any>();


  constructor(
    public activeModal : NgbActiveModal,
    private alertService : AlertService
  ) {
   }

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
