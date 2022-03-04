import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTacheSectionModalComponent } from './modify-tache-section-modal.component';

describe('ModifyTacheSectionModalComponent', () => {
  let component: ModifyTacheSectionModalComponent;
  let fixture: ComponentFixture<ModifyTacheSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTacheSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTacheSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
