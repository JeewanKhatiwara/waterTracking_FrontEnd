import { TestBed } from '@angular/core/testing';

import { NaamService } from './naam.service';

describe('NaamService', () => {
  let service: NaamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
