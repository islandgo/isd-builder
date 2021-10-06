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
    widgets;
    backgroundSettings;
    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService
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
                this.selectedRegion = customRegion[this.selectedRegionKey];
                if (customRegion) {
                    this.widgets = this.RegionsService.converObjectToArray(customRegion[this.selectedRegionKey]['widgets']);
                    this.backgroundSettings = this.RegionsService.converObjectToArray(customRegion[this.selectedRegionKey]['background_setting']);
                }
            });
        });
    }

    saveRegionSetting() {
        this.customRegion[this.selectedRegionKey]['config'] = this.PageService.jsonFormatter(this.widgets);
        this.customRegion[this.selectedRegionKey]['background_setting'] = this.PageService.jsonFormatter(this.backgroundSettings);
        this.RegionsService.setCustomRegions(this.customRegion);
    }

    getOption(option) {
        return this.RegionsService.converObjectToArray(option[1]['grid_settings']);
    }

}
