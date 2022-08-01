import { Component, OnInit, Input } from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  selector: "app-button-css",
  templateUrl: "./button-css.component.html",
  styleUrls: ["./button-css.component.less"],
})
export class ButtonCssComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;
  buttonWidth: any;
  buttonHeight: any;
  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "siteButton") {
      this.buttonWidth = this.widget[1]["settings"]["buttonWidth"]["value"];
      this.buttonHeight = this.widget[1]["settings"]["buttonHeight"]["value"];
    }
  }
}
