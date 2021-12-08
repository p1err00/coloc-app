import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-modal-add-taches',
  templateUrl: './modal-add-taches.component.html',
  styleUrls: ['./modal-add-taches.component.scss']
})
export class ModalAddTachesComponent implements OnInit {

  @Input() fromParent : User[] = [];
  @Output() event = new EventEmitter<any>();

  signupForm: FormGroup;

  currentUserTache : string = '';

  options : any[] = [];

  constructor(
    public fb: FormBuilder,
    public activeModal : NgbActiveModal,
    private authService: AuthService,
    private alertService : AlertService
  ) {
    this.signupForm = this.fb.group({
      nom_t: ['', Validators.required],
      date_exec_t : ['', Validators.required],
      date_fin_t : ['', Validators.required],
      desc_t : ['', Validators.required],
      personne_t : ['']
    });
   }

  ngOnInit(): void {
    console.log(this.fromParent);
    this.fillOptions();
  }

  // Getter form
  get nom_t(){return this.signupForm.get('nom_t');}
  get date_exec_t(){return this.signupForm.get('date_exec_t');}
  get date_fin_t(){return this.signupForm.get('date_fin_t');}
  get desc_t(){return this.signupForm.get('desc_t');}
  get personne_t(){return this.signupForm.get('personne_t');}

  fillOptions(){
    for(let from of this.fromParent){
      this.options.push(from.username_user);
    }
  }
  saveModal(name: string, date_exec : string, date_fin : string, desc : string){
    
    if (this.signupForm.valid) {
      this.event.emit({
        id: 0,
        nom_t : name,
        date_exec_t : date_exec,
        date_fin_t : date_fin,
        desc_t : desc,
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