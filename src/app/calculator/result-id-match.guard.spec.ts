import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { resultIdMatchGuard } from './result-id-match.guard';

describe('resultIdMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resultIdMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
