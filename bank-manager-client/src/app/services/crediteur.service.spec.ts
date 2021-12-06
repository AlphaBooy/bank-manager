import { TestBed } from '@angular/core/testing';

import { CrediteurService } from './crediteur.service';

describe('CrediteurService', () => {
  let service: CrediteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrediteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
