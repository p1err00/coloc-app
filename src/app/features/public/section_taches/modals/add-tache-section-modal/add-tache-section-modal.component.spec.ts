import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheSectionModalComponent } from './add-tache-section-modal.component';

describe('AddTacheSectionModalComponent', () => {
  let component: AddTacheSectionModalComponent;
  let fixture: ComponentFixture<AddTacheSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
