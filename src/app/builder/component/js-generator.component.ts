import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'js-generator',
    templateUrl: './js-generator.component.html',
    styleUrls: ['./js-generator.component.less']
})
export class JsGeneratorComponent {
    @Input() public customRegions;


    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {

    }

    convertToCamelCase(name) {
        name = name.replace('-', " ");
        name = this.convertToMethodName(name);
        return name;
    }
    convertToMethodName(name) {
        name = name.replace(/\w\S*/g, function (t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); });
        return name.replace(/\s/g, ""); 
    }

}
