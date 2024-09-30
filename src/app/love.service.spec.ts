import { TestBed } from '@angular/core/testing';

import { LoveService } from './love.service';

describe('LoveService', () => {
  let service: LoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
