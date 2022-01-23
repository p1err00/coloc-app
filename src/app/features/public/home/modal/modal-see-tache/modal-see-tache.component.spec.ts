import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeeTacheComponent } from './modal-see-tache.component';

describe('ModalSeeTacheComponent', () => {
  let component: ModalSeeTacheComponent;
  let fixture: ComponentFixture<ModalSeeTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSeeTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeeTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
