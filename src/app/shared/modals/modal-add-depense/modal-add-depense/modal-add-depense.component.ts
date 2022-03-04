import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Wishlist } from 'src/app/models/wishlist';

@Component({
  selector: 'app-modal-add-depense',
  templateUrl: './modal-add-depense.component.html',
  styleUrls: ['./modal-add-depense.component.scss']
})
export class ModalAddDepenseComponent implements OnInit {

  @Input() wish_list : Wishlist[] = [];
  @Output() event = new EventEmitter<any>();

  form: FormGroup;
  

  constructor(
    public fb: FormBuilder,
    public activeModal : NgbActiveModal,
  ) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      link : ['', Validators.required],
      nom : ['', Validators.required],
      is_multiple_payment : ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  // Getter form
  get amount(){return this.form.get('amount');}
  get link(){return this.form.get('link');}
  get nom(){return this.form.get('nom');}
  get is_multiple_payment(){return this.form.get('is_multiple_payment');}

  saveModal(){
    
    if (this.form.valid) {
      this.event.emit({
        amount : this.form.get('amount'),
        link : this.form.get('link'),
        nom : this.form.get('nom'),
        is_multiple_payment : this.form.get('is_multiple_payment'),
      });
      
      this.activeModal.close();
    } else {
    }
  }
}
