import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyFolderComponent } from './modal-modify-folder.component';

describe('ModalModifyFolderComponent', () => {
  let component: ModalModifyFolderComponent;
  let fixture: ComponentFixture<ModalModifyFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
