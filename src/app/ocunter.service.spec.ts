import { TestBed } from '@angular/core/testing';

import { OcunterService } from './ocunter.service';

describe('OcunterService', () => {
  let service: OcunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
