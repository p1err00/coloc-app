import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDepenseComponent } from './modal-add-depense.component';

describe('ModalAddDepenseComponent', () => {
  let component: ModalAddDepenseComponent;
  let fixture: ComponentFixture<ModalAddDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
