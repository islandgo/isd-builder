import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-section-background-html",
  templateUrl: "./section-background-html.component.html",
  styleUrls: ["./section-background-html.component.less"],
})
export class SectionBackgroundHtmlComponent implements OnInit {
  @Input() public regionData;
  constructor() {}

  ngOnInit() {}
}
