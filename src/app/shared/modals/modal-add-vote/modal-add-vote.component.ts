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
  boolTimer : boolean = true;
  myCheckbox = false;

  // Options timer
  otpionsTimer = [{
    nom : '5 minutes',
    valeur : '300'
  },{
    nom : '10 minutes',
    valeur : '600'
  },{
    nom : '1 heure',
    valeur : '3600'
  },{
    nom : '2 heure',
    valeur : ''
  },{
    nom : '24 heure',
    valeur : ''
  },{
    nom : '1 semaine',
    valeur : ''
  }]
  // [
  //   '5 minutes',
  //   '10 minutes',
  //   '1 heure',
  //   '2 heures',
  //   '24 heures',
  //   '1 semaine'
  // ]

  optionSelected : number = 0;


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

  setSelect(event : any){
    this.optionSelected = event;
  }

  convertTimer(){
    // TODO    
  }

  closeModal() {
    this.activeModal.close();
  }
  
  saveModal(){
    console.log(this.optionSelected);
    
    if(this.choiceList.length == 0){

      this.boolChoice = false;
      return;

    } else if(this.optionSelected == 0) {

      this.boolTimer = false;

    } else {
      this.boolChoice = true;
      this.boolTimer = true;

      this.convertTimer();

      if(this.signupForm.valid){
        
        this.event.emit({
          id : 0,
          nom : this.signupForm.get('nom')?.value,
          choix : this.choiceList,
          anonyme : this.myCheckbox,
          timer : this.optionSelected
        });
      }
      this.activeModal.close();
    }

  }
}
