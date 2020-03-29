import { TestBed } from '@angular/core/testing';

import { ServerlessService } from './serverless.service';

describe('ServerlessServiceService', () => {
  let service: ServerlessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerlessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
