import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportanceModifComponent } from './modal-importance-modif.component';

describe('ModalImportanceModifComponent', () => {
  let component: ModalImportanceModifComponent;
  let fixture: ComponentFixture<ModalImportanceModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImportanceModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImportanceModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
