import { TestBed } from '@angular/core/testing';

import { ObjectesService } from './objectes.service';

describe('ObjectesService', () => {
  let service: ObjectesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
