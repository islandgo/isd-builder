import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { of } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class RegionsService {

  
    constructor(private httpClient: HttpClient){}

    public getDefaultRegions() {
        return this.httpClient.get("assets/model/regions.json");

    }

    public setCustomRegions(jsonData) {
          localStorage.setItem('__customRegions', JSON.stringify(jsonData));
    }

    public getCustomRegions() {
        let customRegions = localStorage.getItem('__customRegions');
        if (!customRegions || customRegions == 'undefined') {
            return of([])
        }
         return of(JSON.parse(customRegions))
    }
}
