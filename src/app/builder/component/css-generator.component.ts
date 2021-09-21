import { RegionsService } from '../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'css-generator',
    templateUrl: './css-generator.component.html',
    styleUrls: ['./css-generator.component.less']
})
export class CssGeneratorComponent {
   

    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
      
    }

}
