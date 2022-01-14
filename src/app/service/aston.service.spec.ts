import { TestBed } from '@angular/core/testing';

import { AstonService } from './aston.service';

describe('AstonService', () => {
  let service: AstonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
