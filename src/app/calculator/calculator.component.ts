import { Component, OnInit } from '@angular/core';

import { SumService } from '../sum.service';
import { MultiplyBySumService } from '../multiply-by-sum.service';
import { PowerByMultiplyService } from '../power-by-multiply.service';
import { SubService } from '../sub.service';
import { DivBySubService } from '../div-by-sub.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private sumRes: number = 0;
  private subRes: number = 0;
  private divRes: number = 0;
  private multRes: number = 0;
  private powRes: number = 0;

  constructor(
    private subService: SubService,
    private sumService: SumService,
    private divBySubService: DivBySubService,
    private multiplyBySumService: MultiplyBySumService,
    private powerByMultiplyService: PowerByMultiplyService
  ) { }

  ngOnInit(): void {
  }

  calculate(num1String: string, num2String: string): void {
    let num1: number = parseInt(num1String);
    let num2: number = parseInt(num2String);

    this.sum(num1,num2);
    this.multiply(num1,num2);
    this.power(num1,num2);
  }

  calculate2(num3String: string, num4String: string): void {
    let num3: number = parseInt(num3String);
    let num4: number = parseInt(num4String);

    this.sub(num3,num4);
    this.div(num3,num4);
  }

  sum(num1: number, num2: number) {
    this.sumRes = this.sumService.sum(num1,num2);
  }
  sub(num3: number, num4: number) {
    this.subRes = this.subService.sub(num3,num4);
  }

  multiply(num1: number, num2: number) {
    this.multRes = this.multiplyBySumService.multiply(num1,num2);
  }
  div(num3: number, num4: number) {
    this.divRes = this.divBySubService.div(num3,num4);
  }

  power(num1: number, num2: number) {
    this.powRes = this.powerByMultiplyService.power(num1,num2);
  }
  get subResult() {
    return this.subRes;
  }

  get divResult() {
    return this.divRes;
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

}
