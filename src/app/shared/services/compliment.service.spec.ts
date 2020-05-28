import { TestBed } from '@angular/core/testing';

import { ComplimentService } from './compliment.service';

describe('ComplimentService', () => {
  let service: ComplimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
