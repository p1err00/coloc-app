import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-tache-section-modal',
  templateUrl: './add-tache-section-modal.component.html',
  styleUrls: ['./add-tache-section-modal.component.scss']
})
export class AddTacheSectionModalComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  form: FormGroup;


  constructor(
    public fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get nom() { return this.form.get('nom'); }

  saveModal() {

    if (this.form.valid) {
      this.event.emit({

        nom: this.form.controls['nom'].value
      });

      this.activeModal.close();
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
}
