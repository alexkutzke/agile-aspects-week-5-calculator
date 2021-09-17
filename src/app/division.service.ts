import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private subtractionService: SubtractionService) { }

  division(num1: number, num2: number): number {
    let result = 0;
    let rest = num1;
     
    while(rest >= num2){
      rest = this.subtractionService.subtraction(rest, num2);
      console.log(rest);
      result++;
    } 

    return result;
  }
}
