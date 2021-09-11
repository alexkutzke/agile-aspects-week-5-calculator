import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumService } from './sum.service';
import { SubService } from './sub.service';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { DivisionBySubService } from './division-by-sub.service';
import { PowerByMultiplyService } from './power-by-multiply.service';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SumService,
    SubService,
    MultiplyBySumService,
    DivisionBySubService,
    PowerByMultiplyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
