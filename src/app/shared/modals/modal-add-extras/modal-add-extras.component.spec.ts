import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddExtrasComponent } from './modal-add-extras.component';

describe('ModalAddExtrasComponent', () => {
  let component: ModalAddExtrasComponent;
  let fixture: ComponentFixture<ModalAddExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
