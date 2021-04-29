import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'regions-root',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.less']
})

export class RegionsComponent {
    form: FormGroup;
    defaultRegions = [];
    customRegions = [];
    customRegionsIds = [];
    sampleData = Object.entries({
        "BANNER_HOMEPAGE": [
            {
                "region_id": "1",
                "region_name": "Banner Region",
                "description": "Home Banner Region"
            }
        ],
        "QUICK_SEARCH_HOMEPAGE": [
            {
                "region_id": "2",
                "region_name": "Quick Search Region",
                "description": "Quick Search Region"
            }
        ],
        "PROPERTIES_HOMEPAGE": [
            {
                "region_id": "3",
                "region_name": "Properties Region",
                "description": "Properties Region"
            }
        ],
        "AREAS_HOMEPAGE": [
            {
                "region_id": "4",
                "region_name": "Areas Region",
                "description": "Areas Region"
            }
        ],
        "CTA_HOMEPAGE": [
            {
                "region_id": "5",
                "region_name": "Cta Region",
                "description": "Cta Region"
            }
        ],
        "ABOUT_HOMEPAGE": [
            {
                "region_id": "6",
                "region_name": "About Region",
                "description": "About Region"
            }
        ],
        "TEAM_HOMEPAGE": [
            {
                "region_id": "7",
                "region_name": "Team Region",
                "description": "Team Region"
            }
        ],
        "VIDEOS_HOMEPAGE": [
            {
                "region_id": "8",
                "region_name": "Videos Region",
                "description": "Videos Region"
            }
        ],
        "TESTIMONIALS_HOMEPAGE": [
            {
                "region_id": "9",
                "region_name": "Testimonial Region",
                "description": "Testimonial Region"
            }
        ],
        "CONTACTUS_HOMEPAGE": [
            {
                "region_id": "10",
                "region_name": "Contact us Region",
                "description": "Contact us Region"
            }
        ],
        "STATIC_HOMEPAGE": [
            {
                "region_id": "11",
                "region_name": "Static Region",
                "description": "Static Region"
            }
        ]
    });

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.customRegions, event.previousIndex, event.currentIndex);
        this.RegionsService.setCustomRegions(this.customRegions);
    }

    get defaultRegionsFormArray() {
        return this.form.controls.defaultRegions as FormArray;
    }

    constructor(
        public RegionsService: RegionsService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            defaultRegions: new FormArray([], minSelectedCheckboxes(1))
        });
    }

    ngOnInit() {
        this.getCustomRegions();
        this.getDefaultRegions();
    }



    public getDefaultRegions() {

        this.RegionsService.getDefaultRegions().subscribe(data => {
            this.defaultRegions = Object.entries(data);
            this.addCheckboxes();
        });
    }

    public getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = data;
                this.customRegionsIds =  this.customRegions.map(function([key, value]){
                    return value[0]['region_id'];
                });
            }
        });


    }
    

    private addCheckboxes() {
        this.defaultRegions.forEach(([key, value]) => 
        this.customRegionsIds.indexOf(value[0]['region_id']) !== -1 ? this.defaultRegionsFormArray.push(new FormControl(true)):this.defaultRegionsFormArray.push(new FormControl(false)));
    }

    moveToCustomRegions() {
        const selectedRegionIds = this.form.value.defaultRegions
            .map((checked, i) => checked ? this.defaultRegions[i] : null)
            .filter(v => v !== null);

        this.customRegions = selectedRegionIds;
        this.RegionsService.setCustomRegions(selectedRegionIds);
        
    }
}

function minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
        const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((prev, next) => next ? prev + next : prev, 0);

        return totalSelected >= min ? null : { required: true };
    };

    return validator;
}