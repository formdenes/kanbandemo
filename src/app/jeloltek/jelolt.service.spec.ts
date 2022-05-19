import { TestBed } from '@angular/core/testing';

import { JeloltService } from './jelolt.service';

describe('JeloltService', () => {
  let service: JeloltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeloltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
