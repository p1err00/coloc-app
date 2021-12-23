import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportanceAddComponent } from './modal-importance-add.component';

describe('ModalImportanceAddComponent', () => {
  let component: ModalImportanceAddComponent;
  let fixture: ComponentFixture<ModalImportanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImportanceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImportanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
