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

  it('sub(3,2) should return 1', () => {
    expect(service.sub(3, 2)).toEqual(1);
  });

  it('sub(6, 2) should return 4', () => {
    const subService = new SubService();
    expect(subService.sub(6, 2)).toEqual(4);
  });
});
