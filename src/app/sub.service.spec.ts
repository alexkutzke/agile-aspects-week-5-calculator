import { TestBed } from '@angular/core/testing';

import { SubService } from './sub.service';

describe('SubService', () => {
  let service: SubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sub(2, 2) should return 0', () => {
    expect(service.sub(2, 2)).toEqual(0);
  });

  it('sub(50, 2) should return 48', () => {
    expect(service.sub(50, 2)).toEqual(48);
  });
});
