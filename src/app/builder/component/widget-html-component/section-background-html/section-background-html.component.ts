import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-section-background-html",
  templateUrl: "./section-background-html.component.html",
  styleUrls: ["./section-background-html.component.less"],
})
export class SectionBackgroundHtmlComponent implements OnInit {
  @Input() public regionData;
  backgroundWidth: any;
  backgroundHeight: any;
  backgroundOverlay: any;
  imageType: any;
  constructor() {}

  ngOnInit() {
    if (this.regionData[1]["background_setting"]["background"]["enable"]) {
      this.backgroundWidth =
        this.regionData[1]["background_setting"]["background"]["settings"][
          "width"
        ]["value"];
      this.backgroundHeight =
        this.regionData[1]["background_setting"]["background"]["settings"][
          "height"
        ]["value"];
      this.backgroundOverlay =
        this.regionData[1]["background_setting"]["background"]["settings"][
          "hasRbga"
        ]["value"];
      this.imageType =
        this.regionData[1]["background_setting"]["background"]["settings"][
          "imageFileName"
        ]["value"];
    }
  }
}
