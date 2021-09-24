import { PageService } from './../services/page.service';
import { Component } from '@angular/core';

@Component({
    selector: 'page-setup',
    templateUrl: './page-setup.component.html',
    styleUrls: ['./page-setup.component.less']
})
export class PageSetUpComponent {
    title = 'isd-builder';
    pageSettings;
    constructor(
        public PageService: PageService,
    ) {

    }

    ngOnInit() {
        this.getPageSetUp();
    }

    getPageSetUp() {
        this.PageService.getPage().subscribe(page => {    
            this.pageSettings = Object.entries(page);
        });
    }

    savePageSetting() {
        this.PageService.setPageSetUp(this.PageService.jsonFormatter(this.pageSettings)).subscribe(
            () => {
                this.getPageSetUp();
            }
        );
    }   
}
