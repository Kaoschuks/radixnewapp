import { TestBed } from '@angular/core/testing';

import { AccountsServices } from './accounts.service';

describe('AccountsService', () => {
  let service: AccountsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
