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
    defaultRegions;
    customRegions ;
    customRegionsIds = [];
    defaultRegionsObject: [string, any][];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.customRegions, event.previousIndex, event.currentIndex);
        let jsonFormatRegions = this.regionJsonFormatter(this.customRegions);
        this.RegionsService.setCustomRegions(jsonFormatRegions);
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
            this.defaultRegions = data;
            this.defaultRegionsObject = Object.entries(data);
            this.addCheckboxes();
        });
    }

    public getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = Object.entries(data);
                this.customRegionsIds =  this.customRegions.map(function([key, value]){
                    return value['region_id'];
                });
            }
        });
    }
    

    private addCheckboxes() {
        Object.entries(this.defaultRegions).forEach(([key, value]) => 
        this.customRegionsIds.indexOf(value['region_id']) !== -1 ? this.defaultRegionsFormArray.push(new FormControl(true)):this.defaultRegionsFormArray.push(new FormControl(false)));
    }

    moveToCustomRegions() {
       let jsonCustomRegions = {};
        const defaultRegions = this.form.value.defaultRegions
            .map((checked, i) => checked ? this.defaultRegionsObject[i] : null)
            .filter(v => v !== null);
            jsonCustomRegions = this.regionJsonFormatter(defaultRegions);
      
        this.customRegions = Object.entries(jsonCustomRegions);
        this.RegionsService.setCustomRegions(jsonCustomRegions).subscribe(() => console.log("complete"));
        
    }

    regionJsonFormatter(regions) {
        let jsonCustomRegions = {};
        regions.forEach(function (value) {
            jsonCustomRegions[value[0]] = value[1];
        });
        return jsonCustomRegions;
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