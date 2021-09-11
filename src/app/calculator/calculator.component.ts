import { Component, OnInit } from '@angular/core';

import { SumService } from '../sum.service';
import { MultiplyBySumService } from '../multiply-by-sum.service';
import { PowerByMultiplyService } from '../power-by-multiply.service';
import { SubService } from '../sub.service';
import { DivisionBySubService } from '../division-by-sub.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private sumRes: number = 0;
  private subRes: number = 0;
  private multRes: number = 0;
  private divRes: number = 0;
  private powRes: number = 0;

  constructor(
    private sumService: SumService,
    private subService: SubService,
    private multiplyBySumService: MultiplyBySumService,
    private divisionBySubService: DivisionBySubService,
    private powerByMultiplyService: PowerByMultiplyService
  ) { }

  ngOnInit(): void {
  }

  calculate(num1String: string, num2String: string): void {
    let num1: number = parseInt(num1String);
    let num2: number = parseInt(num2String);

    this.sum(num1,num2);
    this.sub(num1,num2);
    this.multiply(num1,num2);
    this.division(num1, num2);
    this.power(num1,num2);
  }

  sum(num1: number, num2: number) {
    this.sumRes = this.sumService.sum(num1,num2);
  }

  sub(num1: number, num2: number) {
    this.subRes = this.subService.sub(num1,num2);
  }

  multiply(num1: number, num2: number) {
    this.multRes = this.multiplyBySumService.multiply(num1,num2);
  }

  division(num1: number, num2: number) {
    this.divRes = this.divisionBySubService.division(num1,num2);
  }

  power(num1: number, num2: number) {
    this.powRes = this.powerByMultiplyService.power(num1,num2);
  }

  get sumResult() {
    return this.sumRes;
  }

  get subResult() {
    return this.subRes;
  }

  get multResult() {
    return this.multRes;
  }

  get divResult() {
    return this.divRes;
  }

  get powResult() {
    return this.powRes;
  }

}
