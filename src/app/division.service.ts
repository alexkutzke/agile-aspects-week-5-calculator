import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private subtractionService: SubtractionService) { }

  divide(num1: number, num2: number) {
    let result = 0
    while(num1 > 0) {
      num1 = this.subtractionService.subtract(num1, num2)
      result++
    }
    return result
  }
}
