import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumService } from './sum.service';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { PowerByMultiplyService } from './power-by-multiply.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { SubService } from './sub.service';
import { DivBySubService } from './div-by-sub.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SumService,
    MultiplyBySumService,
    PowerByMultiplyService,
    SubService,
    DivBySubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
