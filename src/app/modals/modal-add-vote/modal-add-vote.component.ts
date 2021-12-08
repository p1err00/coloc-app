import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-modal-add-vote',
  templateUrl: './modal-add-vote.component.html',
  styleUrls: ['./modal-add-vote.component.scss']
})
export class ModalAddVoteComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  choiceList : string[] = [];
  signupForm: FormGroup;

  boolChoice : boolean = true;
  myCheckbox = false;

  constructor(
    public fb: FormBuilder,
    public activeModal : NgbActiveModal, 
    alertService : AlertService

  ) { 
    this.signupForm = this.fb.group({
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get nom(){return this.signupForm.get('nom');}
  get anonyme(){return this.signupForm.get('anonyme');}

  addToChoiceList(choice : string){
    this.choiceList.push(choice);
  }

  deleteFromChoiceList(choice : string){
    this.choiceList.splice(this.choiceList.indexOf(choice) , 1);
  }

  changeAnonyme(){
    this.myCheckbox = !this.myCheckbox
    console.log(this.myCheckbox);
    
  }

  closeModal() {
    this.activeModal.close();
  }

  saveModal(nom : string){

    if(this.choiceList.length == 0){

      this.boolChoice = false;
      return;

    } else {
      this.boolChoice = true;
      if(this.signupForm.valid){
        
        this.event.emit({
          id : 0,
          nom : nom,
          choix : this.choiceList,
          anonyme : this.myCheckbox
        });
      }
    this.activeModal.close();
      
    }

  }
}
