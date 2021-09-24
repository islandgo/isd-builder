import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'css-generator',
    templateUrl: './css-generator.component.html',
    styleUrls: ['./css-generator.component.less']
})
export class CssGeneratorComponent {
   
    @Input() public customRegions;
    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
      
    }

}