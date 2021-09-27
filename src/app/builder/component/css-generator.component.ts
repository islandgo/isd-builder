import { PageService } from './../services/page.service';
import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'css-generator',
    templateUrl: './css-generator.component.html',
    styleUrls: ['./css-generator.component.less']
})
export class CssGeneratorComponent {
   
    @Input() public customRegions;
    @Input() public pageSettings;
    
    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService,
    ) {

    }

    ngOnInit() {

    }

}
