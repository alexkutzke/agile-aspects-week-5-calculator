import { Injectable } from '@angular/core';
import {SubtractionService} from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionBySubtractionService {

  constructor(private subtractionService: SubtractionService) { }
  
  division(num1: number, num2: number): number{
    
    let result = 0
    let amount = num1

    while(amount > 0) {
      amount = this.subtractionService.subtraction(amount, num2);
      result += 1        
    }
    
    return result
  }
  
}
