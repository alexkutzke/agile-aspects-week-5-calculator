import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumService } from '../sum.service';
import { MultiplyBySumService } from '../multiply-by-sum.service';
import { PowerByMultiplyService } from '../power-by-multiply.service';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [
        //SumService,
        //MultiplyBySumService, 
        //PowerByMultiplyService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
 
  it('should present results 5, 6 and 8 after calculate(2,3)', () => {
    component.calculate('2','3');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSum')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultMultiply')!;
    const resultPowerInput:HTMLInputElement = compiled.querySelector('#resultPower')!;
    expect(resultSumInput.value).toBe('5');
    expect(resultMultiplyInput.value).toBe('6');
    expect(resultPowerInput.value).toBe('8');
  });

  it('should present results 10, 3 calculate(15,5)', () => {
    component.calculate2('15','5');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSub')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultDiv')!;
    expect(resultSumInput.value).toBe('10');
    expect(resultMultiplyInput.value).toBe('3');
  });
  
  it('should present results 5, 6 and 8 after user enter values 2 and 3 then click the button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const num1Input: HTMLInputElement = compiled.querySelector('#num1')!;
    const num2Input: HTMLInputElement = compiled.querySelector('#num2')!;
    const calcButton: HTMLInputElement = compiled.querySelector('#calc')!;
    num1Input.value = '2';
    num2Input.value = '3';
    num1Input.dispatchEvent(new Event('input'));
    num2Input.dispatchEvent(new Event('input'));
    calcButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSum')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultMultiply')!;
    const resultPowerInput:HTMLInputElement = compiled.querySelector('#resultPower')!;
    expect(resultSumInput.value).toBe('5');
    expect(resultMultiplyInput.value).toBe('6');
    expect(resultPowerInput.value).toBe('8');
  });

  it('should present results 10 and 2 after user enter values 20 and 10 then click the button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const num3Input: HTMLInputElement = compiled.querySelector('#num3')!;
    const num4Input: HTMLInputElement = compiled.querySelector('#num4')!;
    const calcButton: HTMLInputElement = compiled.querySelector('#calc2')!;
    num3Input.value = '20';
    num4Input.value = '10';
    num3Input.dispatchEvent(new Event('input'));
    num4Input.dispatchEvent(new Event('input'));
    calcButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSub')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultDiv')!;
    expect(resultSumInput.value).toBe('10');
    expect(resultMultiplyInput.value).toBe('2');
  });

});
