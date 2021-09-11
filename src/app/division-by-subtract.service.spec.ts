import { SubtractionService } from './subtraction.service';
import { TestBed } from "@angular/core/testing";
import { DivisionBySubtractService } from "./division-by-subtract.service";

describe('DivisionBySubtractService', () =>{
    let subtractServiceSpy: jasmine.SpyObj<SubtractionService>;
    let divideService: DivisionBySubtractService;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('CalculatorService', ['subtract']);
        TestBed.configureTestingModule({
            providers:[
                DivisionBySubtractService,
                { provide: SubtractionService, useValue: spy}
            ]
        });
        subtractServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
        divideService = TestBed.inject(DivisionBySubtractService);
    });

    it('should be created', () => {
        expect(divideService).toBeTruthy();
    });
    xit('divide(10,2) should return 5', () =>{
        subtractServiceSpy.subtract.and.returnValues(8,6,4,2);
        expect(divideService.divide(10,2)).toEqual(5);
        expect(subtractServiceSpy.subtract.calls.count())
        .toBe(5, 'spy method was called five times')
    });
    xit('divide(20,10) should return 2', () => {
        subtractServiceSpy.subtract.and.returnValues(10);
        expect(divideService.divide(20,10)).toEqual(2);
        expect(subtractServiceSpy.subtract.calls.count())
        .toBe(2, 'spy method was called two times')
    });
    it('divide(5,2) should return 2', () => {
        subtractServiceSpy.subtract.and.returnValues(3,1);
        expect(divideService.divide(5,2)).toEqual(2);
        expect(subtractServiceSpy.subtract.calls.count())
        .toBe(3, 'spy method was called three times')
    });
   


})