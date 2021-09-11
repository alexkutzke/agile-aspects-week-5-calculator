import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionBySubtractionService {

  constructor(private subtractionService: SubtractionService) { }

  divide(num1: number, num2: number): number {
    this.validateIntegerValues(num1, num2);
    let result = 0;
    let lastValue = num1;
    while (lastValue > 0) {
      lastValue = this.subtractionService.sub(lastValue, num2);
      result++;
    }
    return result;
  }

  validateIntegerValues(num1: number, num2: number) {
    if (!Number.isInteger(num1)
        || !Number.isInteger(num2)) {
      throw new Error('Values are not Integers');
    }
  }
}
