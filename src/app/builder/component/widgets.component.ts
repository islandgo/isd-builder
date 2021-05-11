import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'widgets-root',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.less']
})
export class WidgetsComponent {
    customRegions;
    constructor(
        public RegionsService: RegionsService
    ) {

    }
    ngOnInit() {
        this.getCustomRegions();
    }

    getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = Object.entries(data);
                console.log(this.customRegions);
            }
        });
    }

    convertObjectToArray(object) {
        return Object.entries(object)
    }
}
