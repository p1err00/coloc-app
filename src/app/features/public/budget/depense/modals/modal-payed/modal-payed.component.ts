import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { Wishlist } from 'src/app/models/wishlist';
import { Payment } from '../../../models/payment.model';

@Component({
  selector: 'app-modal-payed',
  templateUrl: './modal-payed.component.html',
  styleUrls: ['./modal-payed.component.scss']
})
export class ModalPayedComponent implements OnInit {

  @Input() payment !: Payment;
  @Output() event = new EventEmitter<any>();

  form !: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
