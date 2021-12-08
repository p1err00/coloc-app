import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddChargesComponent } from './modal-add-charges.component';

describe('ModalAddChargesComponent', () => {
  let component: ModalAddChargesComponent;
  let fixture: ComponentFixture<ModalAddChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
