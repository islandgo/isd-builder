import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'section-region-root',
    templateUrl: './section-region.component.html',
    styleUrls: ['./section-region.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SectionRegionComponent {
    title = 'isd-builder';
    constructor(
    ) {

    }

}
