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
 
  it('should present results 9, 18, 216, 6 and 2 after calculate(6,3)', () => {
    component.calculate('6','3');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSum')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultMultiply')!;
    const resultPowerInput:HTMLInputElement = compiled.querySelector('#resultPower')!;
    const resultSubInput:HTMLInputElement = compiled.querySelector('#resultSubtraction')!;
    const resultDivisionInput:HTMLInputElement = compiled.querySelector('#resultDivision')!;
    expect(resultSumInput.value).toBe('9');
    expect(resultMultiplyInput.value).toBe('18');
    expect(resultPowerInput.value).toBe('216');
    expect(resultSubInput.value).toBe('3');
    expect(resultDivisionInput.value).toBe('2');
  });
  
  it('should present results 9, 18, 216, 6 and 2 after user enter values 6 and 3 then click the button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const num1Input: HTMLInputElement = compiled.querySelector('#num1')!;
    const num2Input: HTMLInputElement = compiled.querySelector('#num2')!;
    const calcButton: HTMLInputElement = compiled.querySelector('#calc')!;
    num1Input.value = '6';
    num2Input.value = '3';
    num1Input.dispatchEvent(new Event('input'));
    num2Input.dispatchEvent(new Event('input'));
    calcButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const resultSumInput:HTMLInputElement = compiled.querySelector('#resultSum')!;
    const resultMultiplyInput:HTMLInputElement = compiled.querySelector('#resultMultiply')!;
    const resultPowerInput:HTMLInputElement = compiled.querySelector('#resultPower')!;
    const resultSubInput:HTMLInputElement = compiled.querySelector('#resultSubtraction')!;
    const resultDivisionInput:HTMLInputElement = compiled.querySelector('#resultDivision')!;
    expect(resultSumInput.value).toBe('9');
    expect(resultMultiplyInput.value).toBe('18');
    expect(resultPowerInput.value).toBe('216');
    expect(resultSubInput.value).toBe('3');
    expect(resultDivisionInput.value).toBe('2');
  });

});
