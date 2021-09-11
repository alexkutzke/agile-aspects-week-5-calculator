import { SubtractionService } from './subtraction.service';
import { TestBed } from '@angular/core/testing';

describe('SubtractionService', () =>{
    let service: SubtractionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service  = TestBed.inject(SubtractionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('subtract(2,3) should return -1', () =>{
        expect(service.subtract(2,3)).toEqual(-1);
    });
    it('subtract(10, 6) should return 4', ()=>{
        expect(service.subtract(10,6)).toEqual(4);
    });
})