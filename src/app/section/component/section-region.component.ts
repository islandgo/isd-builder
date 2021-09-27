import { PageService } from './../../builder/services/page.service';
import { RegionsService } from './../../builder/services/regions.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'section-region-root',
    templateUrl: './section-region.component.html',
    styleUrls: ['./section-region.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SectionRegionComponent {
    selectedRegion;
    customRegion;
    selectedRegionKey;
    config;
    constructor(
        protected RegionsService: RegionsService,
        protected PageService: PageService
    ) {
    }

    ngOnInit() {
        this.getSelectedRegion();
    }

    getSelectedRegion() {
        this.RegionsService.getSelectedRegion().subscribe(selectedRegion => {
            this.selectedRegionKey = selectedRegion;
            this.RegionsService.getCustomRegions().subscribe(customRegion => {
                this.customRegion = customRegion;
                if (customRegion) {
                    this.config = this.RegionsService.converObjectToArray(customRegion[this.selectedRegionKey]['config']);
                }
            });
        });
    }

    saveRegionSetting() {
        this.customRegion[this.selectedRegionKey]['config'] = this.PageService.jsonFormatter(this.config);
        this.RegionsService.setCustomRegions(this.customRegion);
    }



}
