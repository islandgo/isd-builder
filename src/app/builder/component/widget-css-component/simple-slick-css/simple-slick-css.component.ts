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
  slickVideo: any;
  grayscale: any;
  contentPosition: any;
  contentType: any;
  hoverWithImg: any;
  hoverWithImgLogo: any;
  hoverWithBorder: any;
  gradientBottomOverlay: any;
  dots: any;
  arrows: any;

  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "simple-slick") {
      this.slickVideo = this.widget[1]["settings"]["slickVideo"]["value"];
      this.grayscale = this.widget[1]["settings"]["grayScaleOnImage"]["value"];
      this.contentPosition =
        this.widget[1]["settings"]["contentPosition"]["value"];
      this.contentType = this.widget[1]["settings"]["contentType"]["value"];
      this.hoverWithImg = this.widget[1]["settings"]["hoverWithImg"]["value"];
      this.hoverWithImgLogo =
        this.widget[1]["settings"]["hoverWithImgLogo"]["value"];
      this.hoverWithBorder =
        this.widget[1]["settings"]["hoverWithBorder"]["value"];
      this.gradientBottomOverlay =
        this.widget[1]["settings"]["gradientBottomOverlay"]["value"];
      this.dots = this.widget[1]["settings"]["dots"]["value"];
      this.arrows = this.widget[1]["settings"]["arrows"]["value"];
    }
  }
}
