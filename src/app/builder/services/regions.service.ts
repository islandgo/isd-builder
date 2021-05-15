import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { of } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class RegionsService {

  
    constructor(private httpClient: HttpClient){}

    getDefaultRegions() {
        return this.httpClient.get("assets/model/regions.json");

    }

    setCustomRegions(jsonData) {
         return of(localStorage.setItem('__customRegions', JSON.stringify(jsonData)));
    }

    resetCustomRegions() {
      return of(localStorage.removeItem('__customRegions'));
    }

    getCustomRegions() {
        let customRegions = localStorage.getItem('__customRegions');
        if (!customRegions || customRegions == 'undefined') {
            return of([])
        }
         return of(JSON.parse(customRegions))
    }

    convertNumberToWord(number) {
        let convertedToWord = '';
        switch(number) { 
            case 1: { 
                convertedToWord = 'primary';
                break; 
             } 
            case 2: { 
               convertedToWord = 'secondary';
               break; 
            } 
            case 3: { 
               convertedToWord = 'tertiary';
               break; 
            } 
            case 4: { 
               convertedToWord = 'fourth';
               break; 
            } 
            case 5: { 
               convertedToWord = 'fifth';
               break; 
            } 
            case 6: { 
               convertedToWord = 'sixth';
               break; 
            } 
            case 7: { 
               convertedToWord = 'seventh';
               break; 
            } 
            case 8: { 
               convertedToWord = 'eighth';
               break; 
            } 
            case 9: { 
               convertedToWord = 'ninth';
               break; 
            } 
            case 10: { 
               convertedToWord = 'tenth';
               break; 
            } 
            case 11: { 
               convertedToWord = 'eleventh';
               break; 
            } 
            case 12: { 
               convertedToWord = 'twelfth';
               break; 
            } 
            
            default: { 
               convertedToWord = '';
               break; 
            } 
        }

        return convertedToWord;
    }
    
}
