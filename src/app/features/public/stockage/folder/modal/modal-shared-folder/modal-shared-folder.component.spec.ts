import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSharedFolderComponent } from './modal-shared-folder.component';

describe('ModalSharedFolderComponent', () => {
  let component: ModalSharedFolderComponent;
  let fixture: ComponentFixture<ModalSharedFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSharedFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSharedFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
