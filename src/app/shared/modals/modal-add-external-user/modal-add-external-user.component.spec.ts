import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddExternalUserComponent } from './modal-add-external-user.component';

describe('ModalAddExternalUserComponent', () => {
  let component: ModalAddExternalUserComponent;
  let fixture: ComponentFixture<ModalAddExternalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddExternalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddExternalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
