import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyEvenementComponent } from './modal-modify-evenement.component';

describe('ModalModifyEvenementComponent', () => {
  let component: ModalModifyEvenementComponent;
  let fixture: ComponentFixture<ModalModifyEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
