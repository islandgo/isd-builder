import {Injectable} from "@angular/core";

@Injectable()
export class RegionSectionModel {   
    regionSection = {
        section_class_name:"",
        row_start:1,
        row_end:1,
        column_start:1,
        column_end:1,
        has_background:"false"
    };

}
