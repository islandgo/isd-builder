import { RegionsService } from "src/app/builder/services/regions.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-element-peek-css",
  templateUrl: "./element-peek-css.component.html",
  styleUrls: ["./element-peek-css.component.less"],
})
export class ElementPeekCssComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;
  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "elementPeek") {
      console.log(this.regionData);
    }
  }
}
