import { Component, OnInit } from '@angular/core';

import { SumService } from '../sum.service';
import { MultiplyBySumService } from '../multiply-by-sum.service';
import { PowerByMultiplyService } from '../power-by-multiply.service';
import { SubtractionService } from '../subtraction.service';
import { DivisionService } from '../division.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private sumRes: number = 0;
  private multRes: number = 0;
  private powRes: number = 0;
  private subtraction: number = 0;
  private division: number = 0;

  constructor(
    private sumService: SumService,
    private multiplyBySumService: MultiplyBySumService,
    private powerByMultiplyService: PowerByMultiplyService,
    private subtractionService: SubtractionService,
    private divisionService: DivisionService
  ) { }

  ngOnInit(): void {
  }

  calculate(num1String: string, num2String: string): void {
    let num1: number = parseInt(num1String);
    let num2: number = parseInt(num2String);

    this.sum(num1,num2);
    this.multiply(num1,num2);
    this.power(num1,num2);
    this.subtract(num1, num2);
    this.divide(num1, num2);
  }

  sum(num1: number, num2: number) {
    this.sumRes = this.sumService.sum(num1,num2);
  }

  multiply(num1: number, num2: number) {
    this.multRes = this.multiplyBySumService.multiply(num1,num2);
  }

  power(num1: number, num2: number) {
    this.powRes = this.powerByMultiplyService.power(num1,num2);
  }

  subtract(num1: number, num2: number) {
    this.subtraction = this.subtractionService.subtract(num1, num2);
  }

  divide(num1: number, num2: number){
    this.division = this.divisionService.divide(num1, num2);
  }

  get sumResult() {
    return this.sumRes;
  }

  get multResult() {
    return this.multRes;
  }

  get powResult() {
    return this.powRes;
  }

  get subtractionResult(){
    return this.subtraction;
  }

  get divisionResult(){
    return this.division;
  }
}
