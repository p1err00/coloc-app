import { TestBed } from '@angular/core/testing';

import { SharedTachesService } from './shared-taches.service';

describe('SharedTachesService', () => {
  let service: SharedTachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedTachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
