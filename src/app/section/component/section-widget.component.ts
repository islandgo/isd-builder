import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'section-widget-root',
    templateUrl: './section-widget.component.html',
    styleUrls: ['./section-widget.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SectionWidgetComponent {
    title = 'isd-builder';
    constructor(
    ) {

    }

}
