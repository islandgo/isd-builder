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


    getBackGroundSettings(bgName) {
        return {
            background: {
                enable: false,
                name: "section background",
                settings: {
                    imageFileName: {
                        value: bgName+"-bg.jpg",
                        inpuType: "text",
                        name: "Image File Name"
                    },
                    hasRbga: {
                        value: false,
                        inpuType: "select",
                        selectValue: [
                            true,
                            false
                        ],
                        selectTextValues: {
                            rbga: 'rgba(0,0,0,.5)'
                        },
                        name: "Enable Rbga"
                    },
                    isParallax: {
                        value: false,
                        inpuType: "select",
                        selectValue: [
                            true,
                            false
                        ],
                        name: "Enable Parallax"
                    }
                }
            }
        }
    }

}
