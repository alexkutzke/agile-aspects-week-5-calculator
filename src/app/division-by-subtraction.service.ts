import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionBySubtractionService {

  constructor(private subtractionService: SubtractionService) { }

  division(num1: number, num2: number): number {
    let result = num1;
    let counter = 1;

    for (result; result> num2; counter++) {
      result = this.subtractionService.subtraction(result, num2)
      console.log(counter)
    }
   

    return counter
  }
}
