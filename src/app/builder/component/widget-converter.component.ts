import { RegionsService } from '../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'widget-converter-root',
    templateUrl: './widget-converter.component.html',
    styleUrls: ['./widget-converter.component.less']
})
export class WidgetConverterComponent {
    title = 'isd-builder';
    customRegions;
    cloneCustomRegions;
    sectionTagOpen = '<section>';
    sectionTagClose = '</section>';

    constructor(
        public RegionsService: RegionsService,
    ) {

    }

    ngOnInit() {
    }

  
}
