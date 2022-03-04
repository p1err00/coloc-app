import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { Wishlist } from 'src/app/models/wishlist';

@Component({
  selector: 'app-modal-add-depense',
  templateUrl: './modal-add-depense.component.html',
  styleUrls: ['./modal-add-depense.component.scss']
})
export class ModalAddDepenseComponent implements OnInit {

  @Input() wish_list : Wishlist[] = [];
  @Input() users : User[] = [];
  @Output() event = new EventEmitter<any>();

  is_multiple_payment_check : boolean = false;
  payment = {};

  list_user_multiple_payment : User[] =  [];

  form: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    public activeModal : NgbActiveModal,
  ) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      link : ['', Validators.required],
      nom : ['', Validators.required],
      is_multiple_payment : ['']
    });
   }

  ngOnInit(): void {
  }

  // Getter form
  get amount(){return this.form.get('amount');}
  get link(){return this.form.get('link');}
  get nom(){return this.form.get('nom');}
  get is_multiple_payment(){return this.form.get('is_multiple_payment');}


  changeWish( e : any ){
    console.log(e.target.value);
    for(let wish of this.wish_list){

      if(e.target.value == "Open this select menu"){
        this.form.controls['nom'].setValue("");
        this.form.controls['amount'].setValue("");
        this.form.controls['link'].setValue("");
      }
      
      if(wish.id_w == e.target.value){

        this.form.controls['nom'].setValue(wish.nom_w);
        this.form.controls['amount'].setValue(wish.prix_w);
        this.form.controls['link'].setValue(wish.url_w);
      }
    }
  }

  isMultiplePayment(e : any){
    this.is_multiple_payment_check = !this.is_multiple_payment_check
  }

  setMultipleUserPayment(user : User, e :any){
    e.stopPropagation();        
    this.list_user_multiple_payment.push(user);
  }

  saveModal(){
    
    if (this.form.valid) {
      this.event.emit({
        amount : this.form.get('amount'),
        link : this.form.get('link'),
        nom : this.form.get('nom'),
        is_multiple_payment : this.form.get('is_multiple_payment'),
        list_user : this.list_user_multiple_payment
      });
      
      this.activeModal.close();
    } else {
      
    }
  }
}
