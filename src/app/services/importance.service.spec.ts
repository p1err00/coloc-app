import { TestBed } from '@angular/core/testing';

import { ImportanceService } from './importance.service';

describe('ImportanceService', () => {
  let service: ImportanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
