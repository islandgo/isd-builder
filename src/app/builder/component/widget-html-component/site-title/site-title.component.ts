import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site-title",
  templateUrl: "./site-title.component.html",
  styleUrls: ["./site-title.component.less"],
})
export class SiteTitleComponent implements OnInit {
  @Input() public widget;

  siteTitleType: any;
  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "siteTitle") {
      this.siteTitleType = this.widget[1]["settings"]["siteTitleType"]["value"];
    }
  }
}
