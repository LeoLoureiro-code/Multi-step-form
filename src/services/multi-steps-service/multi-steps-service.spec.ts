import { TestBed } from '@angular/core/testing';

import { MultiStepsService } from './multi-steps-service';

describe('MultiStepsService', () => {
  let service: MultiStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
