import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, of } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class PageService {


    constructor(private httpClient: HttpClient) { }


    getPage() {
        let pageSetUp = localStorage.getItem('__pageSetUp');
        if (!pageSetUp || pageSetUp == 'undefined') {
            return this.httpClient.get("assets/model/page-config.json");
        }
        return of(JSON.parse(pageSetUp))

       
    }


    setPageSetUp(jsonData) {
        return of(localStorage.setItem('__pageSetUp', JSON.stringify(jsonData)));
    }

    resetPageSetUp() {
        return of(localStorage.removeItem('__pageSetUp'));
    }

    jsonFormatter(regions) {
        let jsonFormatter = {};
     
        regions.forEach(function (value) {
            jsonFormatter[value[0]] = value[1];
        });
        return jsonFormatter;
    }
}
