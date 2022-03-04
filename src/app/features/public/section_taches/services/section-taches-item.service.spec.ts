import { TestBed } from '@angular/core/testing';

import { SectionTachesItemService } from './section-taches-item.service';

describe('SectionTachesItemService', () => {
  let service: SectionTachesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTachesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
