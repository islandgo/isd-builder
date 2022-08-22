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

  gradientBottomOverlay: any;
  overlay: any;
  hoverWithBorder: any;
  hoverWithImgLogo: any;
  hoverWithImg: any;
  grayScaleOnImage: any;
  contentType: any;
  contentPosition: any;
  constructor(
    public RegionsService: RegionsService,
    public PageService: PageService
  ) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "gallery-image") {
      this.gradientBottomOverlay =
        this.widget[1]["settings"]["gradientBottomOverlay"]["value"];
      this.overlay = this.widget[1]["settings"]["overlay"]["value"];
      this.hoverWithBorder =
        this.widget[1]["settings"]["hoverWithBorder"]["value"];
      this.hoverWithImgLogo =
        this.widget[1]["settings"]["hoverWithImgLogo"]["value"];
      this.hoverWithImg = this.widget[1]["settings"]["hoverWithImg"]["value"];
      this.grayScaleOnImage =
        this.widget[1]["settings"]["grayScaleOnImage"]["value"];
      this.contentType = this.widget[1]["settings"]["contentType"]["value"];
      this.contentPosition =
        this.widget[1]["settings"]["contentPosition"]["value"];
    }
  }
}
