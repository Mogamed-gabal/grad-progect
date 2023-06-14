import { TestBed } from '@angular/core/testing';

import { LostedpeobleService } from './lostedpeoble.service';

describe('LostedpeobleService', () => {
  let service: LostedpeobleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LostedpeobleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
