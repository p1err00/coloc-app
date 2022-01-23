import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteFileComponent } from './modal-delete-file.component';

describe('ModalDeleteFileComponent', () => {
  let component: ModalDeleteFileComponent;
  let fixture: ComponentFixture<ModalDeleteFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
