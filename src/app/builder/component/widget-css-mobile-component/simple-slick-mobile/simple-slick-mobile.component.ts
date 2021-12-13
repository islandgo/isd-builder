import { Component, OnInit, Input } from "@angular/core";
import { PageService } from "src/app/builder/services/page.service";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "app-simple-slick-mobile",
  templateUrl: "./simple-slick-mobile.component.html",
  styleUrls: ["./simple-slick-mobile.component.less"],
})
export class SimpleSlickMobileComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;

  constructor(
    public RegionsService: RegionsService,
    public PageService: PageService
  ) {}

  ngOnInit() {}
}
