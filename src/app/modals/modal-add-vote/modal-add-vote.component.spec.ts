import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddVoteComponent } from './modal-add-vote.component';

describe('ModalAddVoteComponent', () => {
  let component: ModalAddVoteComponent;
  let fixture: ComponentFixture<ModalAddVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
