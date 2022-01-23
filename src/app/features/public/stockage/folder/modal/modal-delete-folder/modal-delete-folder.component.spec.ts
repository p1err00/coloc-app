import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteFolderComponent } from './modal-delete-folder.component';

describe('ModalDeleteFolderComponent', () => {
  let component: ModalDeleteFolderComponent;
  let fixture: ComponentFixture<ModalDeleteFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
