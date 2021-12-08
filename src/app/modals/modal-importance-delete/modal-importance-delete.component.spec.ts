import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportanceDeleteComponent } from './modal-importance-delete.component';

describe('ModalImportanceDeleteComponent', () => {
  let component: ModalImportanceDeleteComponent;
  let fixture: ComponentFixture<ModalImportanceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImportanceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImportanceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
