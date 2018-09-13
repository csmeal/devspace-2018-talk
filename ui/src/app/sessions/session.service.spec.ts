import { TestBed, inject } from '@angular/core/testing';

import { MockSessionService } from './session.service.mock';

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockSessionService]
    });
  });

  it('should be created', inject(
    [MockSessionService],
    (service: MockSessionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
