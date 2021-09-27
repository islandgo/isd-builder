import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, of } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class PageService {

    pageSettings;
    enablePagePopUpModal:boolean = false;
    enablePageSplitNav: boolean = false;
    enablePageBurgerMenu: boolean = false;
    enablePageNormalHeader: boolean = false;
    headerType:string;
    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
        
    }

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

    getPageSettings() {
        //reset settings
        this.enablePagePopUpModal = false;
        this.enablePageSplitNav = false;
        this.enablePageBurgerMenu = false;
        this.enablePagePopUpModal = false;
        this.enablePagePopUpModal = false;
        this.enablePageNormalHeader = false;
        this.getPage().subscribe(data => {
            if (data) {
                this.pageSettings = Object.entries(data);
              
                this.pageSettings.forEach(obj => {
                    if (obj[1]["enable"]) {
                        if (obj[0] == "popup_modal") {
                            this.enablePagePopUpModal = true;
                        }
                        if (obj[0] == "split_nav") {
                            this.enablePageSplitNav = true;
                        }
                        if (obj[0] == "burger_menu") {
                            this.enablePageBurgerMenu = true;
                        }
                        if (obj[0] == "social_fix_nav") {
                            this.enablePagePopUpModal = true;
                        }
                        if (obj[0] == "header") {
                            this.headerType = obj[1]["settings"]["headerType"]["value"];
                            if (obj[1]["settings"]["headerType"]["value"] == "normal-header") {
                                this.enablePageNormalHeader = true;
                            }
                        }
                    }
                });
       
            }
        });
    }

    indexTracker(index: number, value: any) {
        return index;
    }
  
}
