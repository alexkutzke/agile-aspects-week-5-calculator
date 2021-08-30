import { Injectable } from '@angular/core';
import { SubtractService } from './subtract.service';

@Injectable({
  providedIn: 'root'
})
export class DivideBySubtractionService {

  constructor(private subtractService: SubtractService) { }


  divide_unsigned(dividend: number, divisor: number): [number, number] {
    let remainder = dividend;
    let quotient = 0;

    while (remainder >= divisor) {
      remainder = this.subtractService.subtract(remainder, divisor);
      quotient++;
    }

    let result: [number, number] = [quotient, remainder];
    return result;
  }

  
  divide(dividend: number, divisor: number): [number, number | undefined] {
    let result: [number, number | undefined] = [Infinity, undefined];

    if (divisor == 0) {
      return result;
    }
    else if (divisor < 0) {
      result = this.divide(dividend, -divisor);
      return [-result[0], result[1]];
    }
    else if (dividend < 0) {
      result = this.divide(-dividend, divisor);
      if (result[1] == 0) {
        return [-result[0], 0];
      }
      else {
        return [-result[0] - 1, divisor - result[1]!];
      }
    }
    else {
      return this.divide_unsigned(dividend, divisor);
    }
  }
}
