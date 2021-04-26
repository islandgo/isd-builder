import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'regions-root',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.less']
})

export class RegionsComponent {
    title = 'isd-builder';

    constructor(
        public RegionsService: RegionsService
    ) {

    }

    ngOnInit() {
        this.getRegions();
    }

    public getRegions() {
        console.log(432);
        this.RegionsService.getRegions().subscribe(response => {
            console.log(response);
        });
    }
}
