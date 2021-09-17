import { Injectable } from '@angular/core';
import { SubtractService } from './subtract.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionBySubtractionService {
  constructor(private subService: SubtractService) {}

  division(num1: number, num2: number): number {
    let result = 0;

    for (let i = 0; i < num2; i++) {
      result = this.subService.subtract(result, num1);        
    }

    return result;
  }
}
