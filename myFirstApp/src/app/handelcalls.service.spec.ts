import { TestBed, inject } from '@angular/core/testing';

import { HandelcallsService } from './handelcalls.service';

describe('HandelcallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandelcallsService]
    });
  });

  it('should be created', inject([HandelcallsService], (service: HandelcallsService) => {
    expect(service).toBeTruthy();
  }));
});
