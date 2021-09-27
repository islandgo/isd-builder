import { PageService } from './../services/page.service';
import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-generator',
    templateUrl: './header-generator.component.html',
    styleUrls: ['./header-generator.component.less']
})
export class HeaderGeneratorComponent {
   
    @Input() public customRegions;
    @Input() public pageSettings;
    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService
    ) {

    }

    ngOnInit() {
      
    }
}