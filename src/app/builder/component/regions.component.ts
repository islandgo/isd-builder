import { RegionSectionModel } from './../model/payment.model';
import { PageService } from './../services/page.service';
import { RegionsService } from './../services/regions.service';
import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
    selector: 'regions-root',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.less']
})

export class RegionsComponent {
    form: FormGroup;
    defaultRegions;
    customRegions;
    regionsConfig;
    newRegionName;
    selectedRegion;
    selectedRegionClassName;
    customRegionsIds = [];
    defaultRegionsObject: [string, any][];
    modalRef: BsModalRef;


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
        public RegionSectionModel: RegionSectionModel,
        public PageService: PageService,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
    ) {
        this.form = this.formBuilder.group({
            defaultRegions: new FormArray([], minSelectedCheckboxes(1))
        });
    }

    ngOnInit() {
        this.getCustomRegions();
        this.getDefaultRegions();
    }

    openRegionModal(template: TemplateRef<any>, region) {
        this.modalRef = this.modalService.show(template);
        this.newRegionName = '';
        this.selectedRegion = region[0];
        this.selectedRegionClassName = region[1]['keyword_class'];
    }

    public getDefaultRegions() {

        this.RegionsService.getDefaultRegions().subscribe(data => {
            this.defaultRegions = data;
            this.defaultRegionsObject = Object.entries(this.defaultRegions);


            this.RegionsService.getRegionSetting().subscribe(region => {
                var _this = this;
                this.defaultRegionsObject.forEach(function (data, i) {
                    data[1]["region_sections"] = {};
                    data[1]["grid_setting"] = region[0];
                    data[1]["background_setting"] = _this.RegionSectionModel.getBackGroundSettings(data[1]['keyword_class']);
                });
            });

            this.addCheckboxes();
        });
    }



    public getCustomRegions() {
        this.RegionsService.getCustomRegions().subscribe(data => {
            if (data) {
                this.customRegions = Object.entries(data);
                this.customRegionsIds = this.customRegions.map(function ([key, value]) {
                    return value['region_id'];
                });
            }
        });
    }


    private addCheckboxes() {
        Object.entries(this.defaultRegions).forEach(([key, value]) =>
            this.customRegionsIds.indexOf(value['region_id']) !== -1 ? this.defaultRegionsFormArray.push(new FormControl(true)) : this.defaultRegionsFormArray.push(new FormControl(false)));
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

    editRegion() {
        this.defaultRegions;
        this.selectedRegion;
        this.defaultRegions[this.selectedRegion].description = this.capitalizeWord(this.newRegionName) + ' Region';
        this.defaultRegions[this.selectedRegion].region_name = this.capitalizeWord(this.newRegionName) + ' Region';
        let replacedKeyWord = this.newRegionName.split(' ').join('-');
       
        this.defaultRegions[this.selectedRegion].keyword_class = replacedKeyWord;
        let replacedKey = this.newRegionName.split(' ').join('_');

        this.defaultRegions[replacedKey.toUpperCase() + '_HOMEPAGE'] = this.defaultRegions[this.selectedRegion];

        delete this.defaultRegions[this.selectedRegion];

        this.RegionsService.setDefaultRegions(this.defaultRegions);
        this.getDefaultRegions();
        this.modalRef.hide();
    }

    capitalizeWord(str) {
        const arr = str.split(" ");
        //loop through each element of the array and capitalize the first letter.
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        return arr.join(" ");
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