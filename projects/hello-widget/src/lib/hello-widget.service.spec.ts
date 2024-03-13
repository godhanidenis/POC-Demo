import { TestBed } from '@angular/core/testing';

import { HelloWidgetService } from './hello-widget.service';

describe('HelloWidgetService', () => {
  let service: HelloWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
