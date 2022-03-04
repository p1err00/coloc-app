import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEventsItemComponent } from './section-events-item.component';

describe('SectionEventsItemComponent', () => {
  let component: SectionEventsItemComponent;
  let fixture: ComponentFixture<SectionEventsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEventsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEventsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
