import { TestBed } from '@angular/core/testing';

import { SectionBudgetUsersService } from './section-budget-users.service';

describe('SectionBudgetUsersService', () => {
  let service: SectionBudgetUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionBudgetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
