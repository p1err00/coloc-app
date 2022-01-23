import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFileComponent } from './modal-add-file.component';

describe('ModalAddFileComponent', () => {
  let component: ModalAddFileComponent;
  let fixture: ComponentFixture<ModalAddFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
