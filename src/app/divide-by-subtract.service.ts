import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivideBySubtractService {

  constructor(private subtractionService: SubtractionService) { }

  divide(num1: number, num2: number): number {
    let result = 0;
    let rest = num1;
    while (rest > 0) {
      rest = this.subtractionService.subtract(rest, num2);
      result = result + 1;
    }

    return result;
  }
}
