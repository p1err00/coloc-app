import { TestBed } from '@angular/core/testing';

import { SectionTachesService } from './section-taches.service';

describe('SectionTachesService', () => {
  let service: SectionTachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
