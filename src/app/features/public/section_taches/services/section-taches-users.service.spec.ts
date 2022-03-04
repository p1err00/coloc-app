import { TestBed } from '@angular/core/testing';

import { SectionTachesUsersService } from './section-taches-users.service';

describe('SectionTachesUsersService', () => {
  let service: SectionTachesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTachesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
