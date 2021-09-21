import { RegionsService } from '../services/regions.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'html-generator',
    templateUrl: './html-generator.component.html',
    styleUrls: ['./html-generator.component.less']
})
export class HtmlGeneratorComponent {
   @Input() public customRegions;

    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
      
    }

    createOpenTagBuilder(tag, className, prefix, suffix ) {

        if (prefix) {
            className = prefix + className;
        }

        if (suffix) {
            className = className + suffix;
        }

        return '<'+tag+' class="'+className+'">';
    }

    createCloseTagBuilder(tag) {
        return '</'+tag+'>';
    }

}
