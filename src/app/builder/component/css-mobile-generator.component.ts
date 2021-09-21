import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'css-mobile-generator',
    templateUrl: './css-mobile-generator.component.html',
    styleUrls: ['./css-mobile-generator.component.less']
})
export class CssMobileGeneratorComponent {
   
    @Input() public customRegions;
    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
      
    }

}
