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
    expect(service.sub(3,2)).toEqual(1);
  });

  it('sub(6,3) should return 3', () => {
    const subService = new SubService();
    expect(subService.sub(6,3)).toEqual(3);
  })

  it('sub(50,43) should return 7', () => {
      const subService = new SubService();
      expect(subService.sub(50,43)).toEqual(7);
  })
});
