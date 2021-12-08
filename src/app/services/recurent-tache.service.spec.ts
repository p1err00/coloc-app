import { TestBed } from '@angular/core/testing';

import { RecurentTacheService } from './recurent-tache.service';

describe('RecurentTacheService', () => {
  let service: RecurentTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecurentTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
