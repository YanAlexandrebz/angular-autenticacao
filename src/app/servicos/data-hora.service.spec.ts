import { TestBed } from '@angular/core/testing';

import { DataHoraService } from './data-hora.service';

describe('DataHoraService', () => {
  let service: DataHoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
