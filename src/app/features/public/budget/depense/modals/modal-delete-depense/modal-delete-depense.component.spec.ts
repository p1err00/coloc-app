import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteDepenseComponent } from './modal-delete-depense.component';

describe('ModalDeleteDepenseComponent', () => {
  let component: ModalDeleteDepenseComponent;
  let fixture: ComponentFixture<ModalDeleteDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
