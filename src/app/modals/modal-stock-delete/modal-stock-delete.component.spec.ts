import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStockDeleteComponent } from './modal-stock-delete.component';

describe('ModalStockDeleteComponent', () => {
  let component: ModalStockDeleteComponent;
  let fixture: ComponentFixture<ModalStockDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStockDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
