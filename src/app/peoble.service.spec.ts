import { TestBed } from '@angular/core/testing';

import { PeobleService } from './peoble.service';

describe('PeobleService', () => {
  let service: PeobleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeobleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
