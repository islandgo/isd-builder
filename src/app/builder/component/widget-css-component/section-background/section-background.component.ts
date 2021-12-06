import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-background',
    templateUrl: './section-background.component.html',
    styleUrls: ['./section-background.component.less']
})
export class SectionBackgroundComponent implements OnInit {
    @Input() public regionData;
    constructor() { }

    ngOnInit() {
        console.log(this.regionData[1]['grid_setting']['paddingTop']['value']);
    }

}
