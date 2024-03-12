import { TestBed } from '@angular/core/testing';

import { HelloLibService } from './hello-lib.service';

describe('HelloLibService', () => {
  let service: HelloLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
