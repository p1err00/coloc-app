import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerColocModalComponent } from './creer-coloc-modal.component';

describe('CreerColocModalComponent', () => {
  let component: CreerColocModalComponent;
  let fixture: ComponentFixture<CreerColocModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerColocModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerColocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
