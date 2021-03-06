import { Component, OnInit, Input } from "@angular/core";
import { PageService } from "src/app/builder/services/page.service";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "app-gallery-image-css",
  templateUrl: "./gallery-image-css.component.html",
  styleUrls: ["./gallery-image-css.component.less"],
})
export class GalleryImageCssComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;
  constructor(
    public RegionsService: RegionsService,
    public PageService: PageService
  ) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "gallery-image") {
    }
  }
}
