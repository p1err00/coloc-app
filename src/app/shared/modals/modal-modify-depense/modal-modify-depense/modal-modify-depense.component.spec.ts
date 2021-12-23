import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyDepenseComponent } from './modal-modify-depense.component';

describe('ModalModifyDepenseComponent', () => {
  let component: ModalModifyDepenseComponent;
  let fixture: ComponentFixture<ModalModifyDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
