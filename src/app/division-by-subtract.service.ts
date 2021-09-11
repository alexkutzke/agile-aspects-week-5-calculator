import { SubtractionService } from './subtraction.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DivisionBySubtractService{
    constructor(private subtractionService :  SubtractionService) { }

    divide(num1: number, num2: number) : number{
        let result = 0;
        while(num1 > 0 ){
            num1 = this.subtractionService.subtract(num1, num2);
            
            if(num1 < 0 || num1 === undefined){
                break;
            } 

            result ++;
        }

        return result;
    }

}