import { Component, OnInit, Input } from "@angular/core";
import { PageService } from "src/app/builder/services/page.service";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "app-gallery-image-mobile",
  templateUrl: "./gallery-image-mobile.component.html",
  styleUrls: ["./gallery-image-mobile.component.less"],
})
export class GalleryImageMobileComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;
  constructor(
    public RegionsService: RegionsService,
    public PageService: PageService
  ) {}

  ngOnInit() {}
}
