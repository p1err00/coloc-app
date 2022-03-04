import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyExternalUserComponent } from './modal-modify-external-user.component';

describe('ModalModifyExternalUserComponent', () => {
  let component: ModalModifyExternalUserComponent;
  let fixture: ComponentFixture<ModalModifyExternalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyExternalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyExternalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
