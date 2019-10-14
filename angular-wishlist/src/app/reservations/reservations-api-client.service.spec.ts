import { TestBed } from '@angular/core/testing';

import { ReservationsApiClientService } from './reservations-api-client.service';

describe('ReservationsApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationsApiClientService = TestBed.get(ReservationsApiClientService);
    expect(service).toBeTruthy();
  });
});
