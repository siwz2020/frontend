import { TestBed } from '@angular/core/testing';

import { TripViewDataService } from './flight-view-data.service';

describe('FlightViewDataService', () => {
  let service: TripViewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripViewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
