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
    if (this.widget["name"] == "gallery-image") {
      // console.log(this.widget[1]["settings"]["contentType"]["value"]);
      console.log(this.widget[1]["settings"]["grid_max_width"]["value"]);
    }
  }
}
