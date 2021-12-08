import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoindreColocModalComponent } from './rejoindre-coloc-modal.component';

describe('RejoindreColocModalComponent', () => {
  let component: RejoindreColocModalComponent;
  let fixture: ComponentFixture<RejoindreColocModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoindreColocModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoindreColocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
