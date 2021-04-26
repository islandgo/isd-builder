import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
    selector: 'regions-root',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.less']
})

export class RegionsComponent {
    form: FormGroup;
    defaultRegions = [];

    get defaultRegionsFormArray() {
        return this.form.controls.orders as FormArray;
    }

    constructor(
        public RegionsService: RegionsService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            orders: new FormArray([], minSelectedCheckboxes(1))
        });
    }

    ngOnInit() {
        this.getRegions();
    }

    public getRegions() {

        this.RegionsService.getRegions().subscribe(data => {
            console.log(data['template_regions']);
            this.defaultRegions = data['template_regions'];
            this.addCheckboxes();
        });
    }

    private addCheckboxes() {
        this.defaultRegions.forEach(() => this.defaultRegionsFormArray.push(new FormControl(false)));
    }

    submit() {
        const selectedRegionIds = this.form.value.orders
            .map((checked, i) => checked ? this.defaultRegions[i].region_id : null)
            .filter(v => v !== null);

        console.log(selectedRegionIds);
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