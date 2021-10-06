import { PageService } from './../services/page.service';
import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';
import { RegionSectionModel } from '../model/payment.model';
import {Router} from "@angular/router";

@Component({
    selector: 'widgets-root',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.less'],
    providers: [RegionSectionModel],

})
export class WidgetsComponent {
    customRegions;
    cloneCustomRegions;
    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService,
        protected RegionSectionModel: RegionSectionModel,
        private Router: Router,

    ) {

    }
    ngOnInit() {
        this.getCustomRegions();
    }

    getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = Object.entries(data);
                this.cloneCustomRegions = data;
            }
        });
    }

    convertObjectToArray(object) {
        return Object.entries(object)
    }

    addSection(regionData) {
        let regionName = regionData[0];
        let lastRegionSectionId = regionData[1]['last_region_section'] + 1;
        let regionSectionName = this.RegionsService.convertNumberToWord(lastRegionSectionId);
        this.RegionSectionModel.regionSection.section_class_name  = regionSectionName+'-section';
        this.cloneCustomRegions[regionName]['region_sections'][regionSectionName+'_section'] = this.RegionSectionModel.regionSection;
        this.cloneCustomRegions[regionName]['last_region_section'] = regionData[1]['last_region_section'] + 1;
        this.saveCustomRegions(this.cloneCustomRegions);
     
    }

    removeSection(regionData,deleteRegion) {
        
        let regionName = regionData[0];
        let filteredRegions = this.cloneCustomRegions[regionName]['region_sections'];
        delete filteredRegions[deleteRegion];
        this.cloneCustomRegions[regionName]['region_sections'] = filteredRegions;
        this.cloneCustomRegions[regionName]['last_region_section'] = regionData[1]['last_region_section'] - 1;
        this.saveCustomRegions(this.cloneCustomRegions);

    }


    saveCustomRegions(cloneCustomRegions) {
        this.RegionsService.setCustomRegions(cloneCustomRegions).subscribe(
            () => {
                this.getCustomRegions();
            }
        );
    }

    goToWidgetView(selectedRegion) {
        this.RegionsService.setSelectedRegion(selectedRegion[0]);
        this.Router.navigate(['/section/region']);
    }
}
