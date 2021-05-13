import { TestBed } from '@angular/core/testing';

import { ExchangerateService } from './exchangerate.service';

describe('ExchangerateService', () => {
  let service: ExchangerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
