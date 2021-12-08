import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-modal-modify-evenement',
  templateUrl: './modal-modify-evenement.component.html',
  styleUrls: ['./modal-modify-evenement.component.scss']
})
export class ModalModifyEvenementComponent implements OnInit {

  @Input() fromParent : any;
  @Input() users : User[] = [];

  @Output() event = new EventEmitter<any>();

  id_tache : number = 0;
  user_tache !: Taches;
  options : any[] = [];

  signupForm: FormGroup;

  date_exec_format !: Date;
  date_fin_format !: Date;

  constructor(
    public activeModal : NgbActiveModal,
    public fb: FormBuilder,
    private alertService : AlertService
  ) {
    this.signupForm = this.fb.group({
      nom_e: ['', Validators.required],
      date_exec_e : ['', Validators.required],
      date_fin_e : ['', Validators.required],
      desc_e : ['', Validators.required],
      personne_e : ['']
    });
   }

  ngOnInit(): void {

    this.id_tache = this.fromParent.id_e
    this.fromParent.date_exec_e = this.fromParent.date_exec_e.formatDate('dd/MM/YYYY');
    console.log(this.fromParent.date_exec_e);
    
    this.fillOptions();
  }

  // Getter form
  get nom_e(){return this.signupForm.get('nom_e');}
  get date_exec_e(){return this.signupForm.get('date_exec_e');}
  get date_fin_e(){return this.signupForm.get('date_fin_e');}
  get desc_e(){return this.signupForm.get('desc_e');}
  get personne_e(){return this.signupForm.get('personne_e');}

  fillOptions(){
    for(let user of this.users){
      this.options.push(user.username_user);
    }
  }

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }

  selectChange(event : any ){
    this.user_tache = event.target.value;
    console.log(this.user_tache);
  }

  saveModal(name: string, date_exec : string, date_fin : string, desc : string, personne = ""){
    
    if (this.signupForm.valid) {
    
    this.event.emit({
      id_t: this.id_tache,
      nom_e : name,
      date_exec_e : date_exec,
      date_fin_e : date_fin,
      desc_e : desc,
      personne_e : personne
    });    
    
    this.activeModal.close();
    
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
}
