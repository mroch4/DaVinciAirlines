import { TestBed } from '@angular/core/testing';

import { CurrexdialogService } from './currexdialog.service';

describe('CurrexdialogService', () => {
  let service: CurrexdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrexdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
