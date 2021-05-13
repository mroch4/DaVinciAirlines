import { TestBed } from '@angular/core/testing';

import { FlightformService } from './flightform.service';

describe('FlightformService', () => {
  let service: FlightformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
