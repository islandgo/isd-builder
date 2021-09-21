import { RegionsService } from '../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'js-generator',
    templateUrl: './js-generator.component.html',
    styleUrls: ['./js-generator.component.less']
})
export class JsGeneratorComponent {
   

    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
      
    }

}
