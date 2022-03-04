import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMultiplePaymentComponent } from './modal-multiple-payment.component';

describe('ModalMultiplePaymentComponent', () => {
  let component: ModalMultiplePaymentComponent;
  let fixture: ComponentFixture<ModalMultiplePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMultiplePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMultiplePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
