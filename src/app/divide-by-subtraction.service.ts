import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';

@Injectable({
  providedIn: 'root'
})
export class DivideBySubtractionService {

  constructor(private subtractionService: SubtractionService) { }
  
  //Integer only
  divide(num1: number, num2: number): number {
    let aux = num1;
    let result = 0;
    for (let i = 0; aux > 0; i++) {
      aux = this.subtractionService.sub(aux, num2);
      if(aux<0){
        return(-1);
      } 
      result++;
    }
    return result;
  }
}
