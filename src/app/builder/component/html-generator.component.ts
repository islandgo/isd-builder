import { PageService } from './../services/page.service';
import { RegionsService } from '../services/regions.service';
import { Component, ContentChild, Input } from '@angular/core';

@Component({
    selector: 'html-generator',
    templateUrl: './html-generator.component.html',
    styleUrls: ['./html-generator.component.less']
})
export class HtmlGeneratorComponent {
   @Input() public customRegions;
   @ContentChild('temp') testEl: any;

    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService,
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

    prefixHashConverted(data) {
        return data+'-';
    }
}
