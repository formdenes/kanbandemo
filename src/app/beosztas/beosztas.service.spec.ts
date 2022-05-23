import { TestBed } from '@angular/core/testing';

import { BeosztasService } from './beosztas.service';

describe('BeosztasService', () => {
  let service: BeosztasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeosztasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
