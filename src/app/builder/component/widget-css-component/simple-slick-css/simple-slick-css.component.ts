import { Component, Input, OnInit } from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "app-simple-slick-css",
  templateUrl: "./simple-slick-css.component.html",
  styleUrls: ["./simple-slick-css.component.less"],
})
export class SimpleSlickCssComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;

  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    // console.log(this.widget[1]["settings"]["max-width"]["value"]);
    console.log(this.widget[1]["settings"]["qs_max_width"]);
  }
}
