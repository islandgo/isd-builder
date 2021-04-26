import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";



@Injectable({
    providedIn: "root"
})

export class RegionsService {

  
    constructor(private httpClient: HttpClient){}

    public getRegions() {
        return this.httpClient.get("assets/model/regions.json");

    }


}
