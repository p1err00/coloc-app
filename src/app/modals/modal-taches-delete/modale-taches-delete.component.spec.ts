import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleTachesDeleteComponent } from './modale-taches-delete.component';

describe('ModaleTachesDeleteComponent', () => {
  let component: ModaleTachesDeleteComponent;
  let fixture: ComponentFixture<ModaleTachesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleTachesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleTachesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
