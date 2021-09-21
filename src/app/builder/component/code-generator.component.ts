import { RegionsService } from './../services/regions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'code-generator-root',
    templateUrl: './code-generator.component.html',
    styleUrls: ['./code-generator.component.less']
})
export class CodeGeneratorComponent {
    title = 'isd-builder';
    customRegions;
    cloneCustomRegions;
    sectionTagOpen = '<section>';
    sectionTagClose = '</section>';

    constructor(
        public RegionsService: RegionsService,
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
                console.log(this.cloneCustomRegions);
            }
        });
    }


    createOpenTagBuilder(tag, className, prefix, suffix ) {

        if (prefix) {
            className = prefix + className;
        }

        if (suffix) {
            className = className + suffix;
        }
        
        return '<'+tag+' class="'+className+'">';
    }

    createCloseTagBuilder(tag) {
        return '</'+tag+'>';
    }
}
