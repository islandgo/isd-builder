import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-welcome-content",
  templateUrl: "./welcome-content.component.html",
  styleUrls: ["./welcome-content.component.less"],
})
export class WelcomeContentComponent implements OnInit {
  @Input() public widget;
  imageWidth: any;
  imageHeight: any;
  imageFileName: any;
  welcomeDetails: any;
  welcomeImage: any;
  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "welcome-content") {
      this.imageFileName = this.widget[1]["settings"]["imageFileName"]["value"];
      this.welcomeImage = this.widget[1]["settings"]["welcomeImage"]["value"];
      this.imageWidth = this.widget[1]["settings"]["image_width"]["value"];
      this.imageHeight = this.widget[1]["settings"]["image_height"]["value"];
      this.welcomeDetails =
        this.widget[1]["settings"]["welcomeDetails"]["value"];
    }
  }
}
