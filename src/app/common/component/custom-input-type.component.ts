import { RegionsService } from './../../builder/services/regions.service';
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
    sampleConfig;
    constructor(
        public PageService:PageService,
        public RegionsService:RegionsService
    ) {
    }

    ngOnInit(): void {
       this.sampleConfig = "sample"
       console.log(this.customInputs);
        
    }

}
