import { TestBed, inject } from '@angular/core/testing';

import { SpeakersService } from './speakers.service';
import { MockSpeakersService } from './speakers.service.mock';

describe('SpeakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockSpeakersService]
    });
  });

  it('should be created', inject(
    [MockSpeakersService],
    (service: SpeakersService) => {
      expect(service).toBeTruthy();
    }
  ));
});
