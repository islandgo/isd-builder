import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site-title",
  templateUrl: "./site-title.component.html",
  styleUrls: ["./site-title.component.less"],
})
export class SiteTitleComponent implements OnInit {
  @Input() public widget;

  siteTitleType: any;
  secondaryText: any;
  primaryText: any;
  numberText: any;
  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "siteTitle") {
      this.siteTitleType = this.widget[1]["settings"]["siteTitleType"]["value"];
      this.secondaryText = this.widget[1]["settings"]["secondaryText"]["value"];
      this.primaryText = this.widget[1]["settings"]["primaryText"]["value"];
      this.numberText = this.widget[1]["settings"]["numberText"]["value"];
    }
  }
}
