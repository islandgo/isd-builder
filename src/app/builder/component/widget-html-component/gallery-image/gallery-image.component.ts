import { RegionsService } from "./../../../services/regions.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gallery-image",
  templateUrl: "./gallery-image.component.html",
  styleUrls: ["./gallery-image.component.less"],
})
export class GalleryImageComponent implements OnInit {
  @Input() public widget;
  @Input() public regionClassName;

  widgetType;
  widgetSettings;
  galleryItem: any;
  imageType: any;
  imageWidth: any;
  imageHeight: any;
  contentType: any;
  contentPosition: any;
  hoverWithImgLogo: any;
  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    this.widgetType = this.widget[1]["name"];
    if (this.widgetType == "gallery-image") {
      this.widgetSettings = this.widget[1]["settings"];
      this.galleryItem = +this.widget[1]["settings"]["number_of_item"]["value"];
      this.imageType = this.widget[1]["settings"]["imageType"]["value"];
      this.imageWidth = this.widget[1]["settings"]["image_width"]["value"];
      this.imageHeight = this.widget[1]["settings"]["image_height"]["value"];
      this.contentType = this.widget[1]["settings"]["contentType"]["value"];
      this.contentPosition =
        this.widget[1]["settings"]["contentPosition"]["value"];
      this.hoverWithImgLogo =
        this.widget[1]["settings"]["hoverWithImgLogo"]["value"];
    }
  }
}
