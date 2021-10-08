import { RegionsService } from './../../builder/services/regions.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'section-widget-root',
    templateUrl: './section-widget.component.html',
    styleUrls: ['./section-widget.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SectionWidgetComponent {
    widgetKey;
    widgetType;
    customRegion;
    selectedRegion;
    selectedRegionKey;
    widgetSettings;
    section;

    constructor(
        public route: ActivatedRoute,
        public RegionsService: RegionsService,
        private Router: Router,
    ) {
        this.widgetKey = this.route.snapshot.queryParamMap.get('widgetKey');
        this.widgetType = this.route.snapshot.queryParamMap.get('widgetType');
        this.section = this.route.snapshot.queryParamMap.get('section');
    }

    ngOnInit(): void {
        this.getSelectedRegion();
        const navTitle = document.getElementsByClassName('reset-regions')[0];
        navTitle.classList.add('hide');
    }

    getSelectedRegion() {
        this.RegionsService.getSelectedRegion().subscribe(selectedRegion => {
            this.selectedRegionKey = selectedRegion;
            this.RegionsService.getCustomRegions().subscribe(customRegion => {
                this.customRegion = customRegion;
                this.selectedRegion = customRegion[this.selectedRegionKey];
                if (this.widgetKey == "region_widgets") {
                    this.widgetSettings = this.selectedRegion[this.widgetKey][this.widgetType];
                } else {
                    this.widgetSettings = this.selectedRegion[this.widgetKey][this.section]['widgets'][this.widgetType];
                }

                console.log(this.widgetSettings);
            });
        });
    }

    saveRegionSetting() {
        this.RegionsService.setCustomRegions(this.customRegion);
    }

    backToRegion() {
        this.Router.navigate(['/section/region']);
    }

}
