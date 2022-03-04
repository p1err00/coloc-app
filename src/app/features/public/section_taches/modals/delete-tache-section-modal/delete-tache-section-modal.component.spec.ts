import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTacheSectionModalComponent } from './delete-tache-section-modal.component';

describe('DeleteTacheSectionModalComponent', () => {
  let component: DeleteTacheSectionModalComponent;
  let fixture: ComponentFixture<DeleteTacheSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTacheSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTacheSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
