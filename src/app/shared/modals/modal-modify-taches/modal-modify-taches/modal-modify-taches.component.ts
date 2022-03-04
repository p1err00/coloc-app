import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-modal-modify-taches',
  templateUrl: './modal-modify-taches.component.html',
  styleUrls: ['./modal-modify-taches.component.scss']
})
export class ModalModifyTachesComponent implements OnInit {

  @Input() fromParent !: Taches;
  @Input() users: User[] = [];

  @Output() event = new EventEmitter<any>();

  id_tache: number = 0;
  user_tache !: Taches;
  options: string[] = [];

  signupForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private alertService: AlertService

  ) {
    this.signupForm = this.fb.group({
      nom_t: ['', Validators.required],
      date_exec_t: ['', Validators.required],
      date_fin_t: ['', Validators.required],
      desc_t: ['', Validators.required],
      personne_t: ['']
    });
  }

  ngOnInit(): void {
    this.id_tache = this.fromParent.id_t
    this.fillOptions();
  }

  // Getter form
  get nom_t() { return this.signupForm.get('nom_t'); }
  get date_exec_t() { return this.signupForm.get('date_exec_t'); }
  get date_fin_t() { return this.signupForm.get('date_fin_t'); }
  get desc_t() { return this.signupForm.get('desc_t'); }
  get personne_t() { return this.signupForm.get('personne_t'); }

  fillOptions() {
    for (let user of this.users) {
      this.options.push(user.username_user);
    }
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

  selectChange(event: any) {
    this.user_tache = event.target.value;
    console.log(this.user_tache);
  }

  saveModal(name: string, date_exec: string, date_fin: string, desc: string, personne: string) {


    if (this.signupForm.valid) {

      this.event.emit({
        id_t: this.id_tache,
        nom_t: name,
        date_exec_t: date_exec,
        date_fin_t: date_fin,
        desc_t: desc,
        personne_t: personne
      });

      this.activeModal.close();

    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
}
