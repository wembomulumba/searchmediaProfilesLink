import { TestBed } from '@angular/core/testing';

import { SearchprofileService } from './searchprofile.service';

describe('SearchprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchprofileService = TestBed.get(SearchprofileService);
    expect(service).toBeTruthy();
  });
});
