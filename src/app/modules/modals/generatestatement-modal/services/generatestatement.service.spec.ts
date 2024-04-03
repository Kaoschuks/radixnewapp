import { TestBed } from '@angular/core/testing';

import { GeneratestatementService } from './generatestatement.service';

describe('GeneratestatementService', () => {
  let service: GeneratestatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratestatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
