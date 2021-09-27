import { PageService } from './../services/page.service';
import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'code-generator-root',
    templateUrl: './code-generator.component.html',
    styleUrls: ['./code-generator.component.less']
})
export class CodeGeneratorComponent {
    title = 'isd-builder';
    customRegions;
    cloneCustomRegions;
    pageSettings;
    sectionTagOpen = '<section>';
    sectionTagClose = '</section>';

    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService
    ) {

    }

    ngOnInit() {
        this.getCustomRegions();
        this.getPageSettings();
        this.PageService.getPageSettings();
    }

    getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = Object.entries(data);
                this.cloneCustomRegions = data;
            }
        });
    }

    getPageSettings() {
  
        this.PageService.getPage().subscribe(data => {
            if (data) {
                this.pageSettings = Object.entries(data);
            }
        });
    }
}
