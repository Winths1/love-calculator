import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resultIdExistsGuard } from './result-id-exists.guard';

describe('resultIdExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resultIdExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
