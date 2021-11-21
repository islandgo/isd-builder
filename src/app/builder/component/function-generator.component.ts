import { PageService } from "./../services/page.service";
import { RegionsService } from "../services/regions.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "function-generator",
  templateUrl: "./function-generator.component.html",
  styleUrls: ["./function-generator.component.less"],
})
export class FunctionGeneratorComponent {
  @Input() public customRegions;
  @Input() public pageSettings;

  constructor(RegionsService: RegionsService, PageService: PageService) {}

  ngOnInit() {}

  convertToCamelCase(name) {
    name = name.replace("-", " ");
    // name = this.convertToMethodName(name);
    return this.titleCase(name);
  }

  titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }
}
