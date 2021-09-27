import { PageService } from './../../builder/services/page.service';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-input-type',
    templateUrl: './custom-input-type.component.html',
    styleUrls: ['./custom-input-type.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class CustomInputTypeComponent {
    @Input() public customInputs;
    constructor(
        public PageService:PageService
    ) {
    }

}
