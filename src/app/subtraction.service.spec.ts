import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';

describe('SubtractionService', () => {
  let service: SubtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sub(2,3) should return -1', () => {
    expect(service.sub(2,3)).toEqual(-1);
    });
    
  //Usando a classe direto sem o TestBed
  it('sub(3,6) should return -3', () => {
  const subtractionService = new SubtractionService();
  expect(subtractionService.sub(3,6)).toEqual(-3);
  })

  it('sub(500,321) should retunr 179', () => {
    const subtractionService = new SubtractionService();
    expect(subtractionService.sub(500,321)).toEqual(179);
  })
});
