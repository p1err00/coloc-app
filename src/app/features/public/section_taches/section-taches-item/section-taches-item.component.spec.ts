import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTachesItemComponent } from './section-taches-item.component';

describe('SectionTachesItemComponent', () => {
  let component: SectionTachesItemComponent;
  let fixture: ComponentFixture<SectionTachesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTachesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTachesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
