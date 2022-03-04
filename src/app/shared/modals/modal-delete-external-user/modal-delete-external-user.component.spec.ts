import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteExternalUserComponent } from './modal-delete-external-user.component';

describe('ModalDeleteExternalUserComponent', () => {
  let component: ModalDeleteExternalUserComponent;
  let fixture: ComponentFixture<ModalDeleteExternalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteExternalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteExternalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
