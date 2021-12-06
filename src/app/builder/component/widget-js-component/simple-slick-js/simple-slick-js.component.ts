import { Component, Input, OnInit } from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "simple-slick-js",
  templateUrl: "./simple-slick-js.component.html",
  styleUrls: ["./simple-slick-js.component.less"],
})
export class SimpleSlickJsComponent implements OnInit {
  @Input() region;
  @Input() widget;
  @Input() public regionData;
  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
  }
}
