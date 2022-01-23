import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  @Output() event = new EventEmitter<any>();
  signupForm: FormGroup;


  constructor(
    public activeModal : NgbActiveModal,
    public fb: FormBuilder,
    private alertService : AlertService
  ) { 
    this.signupForm = this.fb.group({
      nom_w: ['', Validators.required],
      prix_w : ['', Validators.required],
      url_w : ['', Validators.required],
      desc_w : ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  // Getter form
  get nom_w(){return this.signupForm.get('nom_w');}
  get prix_w(){return this.signupForm.get('prix_w');}
  get url_w(){return this.signupForm.get('url_w');}
  get desc_w(){return this.signupForm.get('desc_w');}

  closeModal() {
    this.activeModal.close();
  }

  saveModal(){
    if(this.signupForm.valid){
      this.event.emit({
        id : 0,
        nom_w : this.signupForm.get("nom_w")?.value,
        prix_w : this.signupForm.get("prix_w")?.value,
        url_w : this.signupForm.get("url_w")?.value,
        desc_w : this.signupForm.get("desc_w")?.value
      });
      console.log(this.signupForm);
      
      this.activeModal.close();
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
}
