import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEvenementComponent } from './modal-add-evenement.component';

describe('ModalAddEvenementComponent', () => {
  let component: ModalAddEvenementComponent;
  let fixture: ComponentFixture<ModalAddEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
