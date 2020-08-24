import { TestBed } from '@angular/core/testing';

import { OrderFormBuilderService } from './order-form-builder.service';

describe('OrderFormBuilderService', () => {
  let service: OrderFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
