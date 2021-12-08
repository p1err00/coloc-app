import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteVoteComponent } from './modal-delete-vote.component';

describe('ModalDeleteVoteComponent', () => {
  let component: ModalDeleteVoteComponent;
  let fixture: ComponentFixture<ModalDeleteVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
