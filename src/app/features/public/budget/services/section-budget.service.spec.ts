import { TestBed } from '@angular/core/testing';

import { SectionBudgetService } from './section-budget.service';

describe('SectionBudgetService', () => {
  let service: SectionBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
