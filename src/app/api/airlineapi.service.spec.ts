import { TestBed } from '@angular/core/testing';

import { AirlineapiService } from './airlineapi.service';

describe('AirlineapiService', () => {
  let service: AirlineapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlineapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
