import { TestBed } from '@angular/core/testing';

import { SearchFlightFormBuilderService } from './search-flight-form-builder.service';

describe('SearchFlightFormBuilderService', () => {
  let service: SearchFlightFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFlightFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
