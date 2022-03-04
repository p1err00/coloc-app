import { TestBed } from '@angular/core/testing';

import { SectionBudgetPaymentService } from './section-budget-payment.service';

describe('SectionBudgetPaymentService', () => {
  let service: SectionBudgetPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionBudgetPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
