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
    if (this.widget[1]["name"] == "simple-slick") {
      console.log(this.widget[1]["settings"]["overlay"]["value"]);
    }
  }
}
