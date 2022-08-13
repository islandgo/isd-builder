import { RegionsService } from "../../../services/regions.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "simple-simple-slick",
  templateUrl: "./simple-slick.component.html",
  styleUrls: ["./simple-slick.component.less"],
})
export class SimpleSlickComponent implements OnInit {
  @Input() public widget;
  @Input() public regionClassName;

  slickItem: any;
  imageType: any;
  slickVideo: any;
  contentType: any;
  arrows: any;
  hoverWithImg: any;
  imageWidth: any;
  imageHeight: any;

  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "simple-slick") {
      this.slickItem = +this.widget[1]["settings"]["number_of_item"]["value"];
      this.imageType = this.widget[1]["settings"]["imageType"]["value"];
      // Start
      this.slickVideo = this.widget[1]["settings"]["slickVideo"]["value"];
      this.contentType = this.widget[1]["settings"]["contentType"]["value"];
      this.arrows = this.widget[1]["settings"]["arrows"]["value"];
      this.hoverWithImg = this.widget[1]["settings"]["hoverWithImg"]["value"];
      this.imageWidth = this.widget[1]["settings"]["image_width"]["value"];
      this.imageHeight = this.widget[1]["settings"]["image_height"]["value"];
    }
  }
}
