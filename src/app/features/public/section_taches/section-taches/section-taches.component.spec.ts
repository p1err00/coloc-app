import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTachesComponent } from './section-taches.component';

describe('SectionTachesComponent', () => {
  let component: SectionTachesComponent;
  let fixture: ComponentFixture<SectionTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
