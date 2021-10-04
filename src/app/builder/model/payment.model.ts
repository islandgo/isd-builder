import {Injectable} from "@angular/core";

@Injectable()
export class RegionSectionModel {   
    regionSection = {
        section_class_name:"",
        grid_settings: {
            grid_column: {
                inpuType: "text",
                value: "1/50",
                name: "grid-column"
            }
        }
    
    };

}
