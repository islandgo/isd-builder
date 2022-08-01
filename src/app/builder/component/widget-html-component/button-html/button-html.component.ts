import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-html",
  templateUrl: "./button-html.component.html",
  styleUrls: ["./button-html.component.less"],
})
export class ButtonHtmlComponent implements OnInit {
  @Input() public widget;

  buttonText: any;
  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "siteButton") {
      this.buttonText = this.widget[1]["settings"]["buttonText"]["value"];
    }
  }
}
