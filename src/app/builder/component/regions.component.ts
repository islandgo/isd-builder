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

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.customRegions, event.previousIndex, event.currentIndex);
        console.log(this.customRegions);
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
            this.defaultRegions = data['template_regions'];
            this.addCheckboxes();
        });
    }

    public getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            this.customRegions = data;
            this.customRegionsIds =  this.customRegions.map(function(item){
                return item.region_id;
            });
        });


    }
    

    private addCheckboxes() {
        this.defaultRegions.forEach((item) => 
        this.customRegionsIds.indexOf(item.region_id) !== -1 ? this.defaultRegionsFormArray.push(new FormControl(true)):this.defaultRegionsFormArray.push(new FormControl(false)));
    }

    moveToCustomRegions() {
        const selectedRegionIds = this.form.value.defaultRegions
            .map((checked, i) => checked ? this.defaultRegions[i] : null)
            .filter(v => v !== null);

        this.customRegions = selectedRegionIds;
        this.RegionsService.setCustomRegions(this.customRegions);
        
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