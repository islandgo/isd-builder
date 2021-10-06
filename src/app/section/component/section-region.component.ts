import { PageService } from './../../builder/services/page.service';
import { RegionsService } from './../../builder/services/regions.service';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';

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
    backgroundSettings;
    widgetList;
    widgetListJson;

    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService
    ) {
    }

    @HostListener("click")
    clicked() {
        this.addShowNavProperty(false);
    }

    ngOnInit() {
        this.getSelectedRegion();
        this.getWidget();
    }

    getSelectedRegion() {
        this.RegionsService.getSelectedRegion().subscribe(selectedRegion => {
            this.selectedRegionKey = selectedRegion;
            this.RegionsService.getCustomRegions().subscribe(customRegion => {
                this.customRegion = customRegion;
                this.selectedRegion = customRegion[this.selectedRegionKey];
                this.addShowNavProperty(false);
                if (customRegion) {
                    this.backgroundSettings = this.RegionsService.converObjectToArray(customRegion[this.selectedRegionKey]['background_setting']);
                }
            });
        });
    }

    addWidget(widget, section) {
        
        let sectionWidget = this.customRegion[this.selectedRegionKey]['region_sections'][section]["widgets"];
        var json = { };
        if (!sectionWidget) {
            json[0] = this.widgetListJson[widget];
            this.customRegion[this.selectedRegionKey]['region_sections'][section]["widgets"] = json;
        } else {
            let index = Object.entries(sectionWidget).length;
            json[index] = this.widgetListJson[widget];
            let widgets = {
                ...this.customRegion[this.selectedRegionKey]['region_sections'][section]["widgets"],
                ...json
            };

            this.customRegion[this.selectedRegionKey]['region_sections'][section]["widgets"] = widgets;
        }
    }

    deleteWidget(section, deleteWidget) {
        delete this.customRegion[this.selectedRegionKey]['region_sections'][section]["widgets"][deleteWidget];
        // delete filteredRegions[deleteRegion];
    }

    addShowNavProperty(showNav) {
        Object.entries(this.selectedRegion['region_sections']).forEach(function (section) {
            section[1]['showNav'] = showNav;
        });
    }

    showNav(section, event) {
        event.stopPropagation();
        this.selectedRegion['region_sections'][section]['showNav'] = !this.selectedRegion['region_sections'][section]['showNav'];
    }

    saveRegionSetting() {
        this.customRegion[this.selectedRegionKey]['background_setting'] = this.PageService.jsonFormatter(this.backgroundSettings);
        this.RegionsService.setCustomRegions(this.customRegion);
    }

    getWidget() {
        this.RegionsService.getWidgets().subscribe( wigets => {
            this.widgetListJson = wigets;
            this.widgetList = Object.entries(wigets);
        });
    }

    getOption(option) {
        return this.RegionsService.converObjectToArray(option[1]['grid_settings']);
    }

}
