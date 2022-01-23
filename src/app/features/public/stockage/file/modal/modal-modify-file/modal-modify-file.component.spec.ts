import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyFileComponent } from './modal-modify-file.component';

describe('ModalModifyFileComponent', () => {
  let component: ModalModifyFileComponent;
  let fixture: ComponentFixture<ModalModifyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
