import { PageService } from './../services/page.service';
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
    regionsConfig;
    customRegionsIds = [];
    defaultRegionsObject: [string, any][];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.customRegions, event.previousIndex, event.currentIndex);
        let jsonFormatRegions = this.PageService.jsonFormatter(this.customRegions);
        this.RegionsService.setCustomRegions(jsonFormatRegions);
    }

    get defaultRegionsFormArray() {
        return this.form.controls.defaultRegions as FormArray;
    }

    constructor(
        public RegionsService: RegionsService,
        public PageService: PageService,
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
            this.defaultRegions = data[0];
            let regionConfig = data[1];
            this.defaultRegionsObject = Object.entries(this.defaultRegions);


            this.RegionsService.getGridParentSetting().subscribe(grid => {
                this.defaultRegionsObject.forEach(function (data) {
                    data[1]["region_sections"] = {};
                    data[1]["grid_setting"] = grid;
                    data[1]["config"] = regionConfig;
                });
               
            });

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
            jsonCustomRegions = this.PageService.jsonFormatter(defaultRegions);
      
        this.customRegions = Object.entries(jsonCustomRegions);
        this.RegionsService.setCustomRegions(jsonCustomRegions).subscribe(() => console.log("complete"));
        
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