import { TestBed } from '@angular/core/testing';

import { MicropensionService } from './micropension.service';

describe('MicropensionService', () => {
  let service: MicropensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicropensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
