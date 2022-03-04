import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
 
@Component({
  selector: 'app-modal-add-taches',
  templateUrl: './modal-add-taches.component.html',
  styleUrls: ['./modal-add-taches.component.scss']
})
export class ModalAddTachesComponent implements OnInit {

  @Input() fromParent : User[] = [];
  @Output() event = new EventEmitter<any>();

  form: FormGroup;

  currentUserTache : string = '';

  options : any[] = [];

  constructor(
    public fb: FormBuilder,
    public activeModal : NgbActiveModal,
    private alertService : AlertService
  ) {
    this.form = this.fb.group({
      nom_t: ['', Validators.required],
      date_exec_t : ['', Validators.required],
      date_fin_t : ['', Validators.required],
      desc_t : ['', Validators.required],
      personne_t : ['']
    });
   }

  ngOnInit(): void {
    this.fillOptions();
  }

  // Getter form
  get nom_t(){return this.form.get('nom_t');}
  get date_exec_t(){return this.form.get('date_exec_t');}
  get date_fin_t(){return this.form.get('date_fin_t');}
  get desc_t(){return this.form.get('desc_t');}
  get personne_t(){return this.form.get('personne_t');}

  fillOptions(){
    for(let from of this.fromParent){
      this.options.push(from.username_user);
    }
  }
  
  saveModal(){
    
    if (this.form.valid) {
      this.event.emit({
        id: 0,
        nom_t : this.form.get('nom_t'),
        date_exec_t : this.form.get('date_exec_t'),
        date_fin_t : this.form.get('date_fin_t'),
        desc_t : this.form.get('desc_t'),
        personne_t : this.currentUserTache
      });

      this.activeModal.close();
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
  
  selectChange( event : any){
    this.currentUserTache = event.target.value;
  }

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }
  
}
