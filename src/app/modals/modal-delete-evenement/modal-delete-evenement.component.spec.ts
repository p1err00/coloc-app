import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEvenementComponent } from './modal-delete-evenement.component';

describe('ModalDeleteEvenementComponent', () => {
  let component: ModalDeleteEvenementComponent;
  let fixture: ComponentFixture<ModalDeleteEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
