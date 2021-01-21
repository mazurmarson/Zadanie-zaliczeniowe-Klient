/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerwisService } from './serwis.service';

describe('Service: Serwis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerwisService]
    });
  });

  it('should ...', inject([SerwisService], (service: SerwisService) => {
    expect(service).toBeTruthy();
  }));
});
