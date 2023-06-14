import { TestBed } from '@angular/core/testing';

import { DetailsServicesService } from './details-services.service';

describe('DetailsServicesService', () => {
  let service: DetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
