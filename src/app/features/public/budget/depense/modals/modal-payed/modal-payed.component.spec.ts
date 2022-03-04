import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPayedComponent } from './modal-payed.component';

describe('ModalPayedComponent', () => {
  let component: ModalPayedComponent;
  let fixture: ComponentFixture<ModalPayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
