import { TestBed } from '@angular/core/testing';

import { DependServiceService } from './depend-service.service';

describe('DependServiceService', () => {
  let service: DependServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
