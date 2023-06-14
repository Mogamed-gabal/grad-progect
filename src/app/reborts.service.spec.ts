import { TestBed } from '@angular/core/testing';

import { RebortsService } from './reborts.service';

describe('RebortsService', () => {
  let service: RebortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
