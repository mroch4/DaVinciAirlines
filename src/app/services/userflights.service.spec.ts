import { TestBed } from '@angular/core/testing';

import { UserflightsService } from './userflights.service';

describe('UserflightsService', () => {
  let service: UserflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
