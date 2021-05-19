import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'section-root',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SectionComponent {
    title = 'isd-builder';
    constructor(
    ) {

    }

}
