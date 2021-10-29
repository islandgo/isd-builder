import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-quick-search-css",
  templateUrl: "./quick-search-css.component.html",
  styleUrls: ["./quick-search-css.component.less"],
})
export class QuickSearchCssComponent implements OnInit {
  @Input() public widget;
  constructor() {}

  ngOnInit() {
    console.log(this.widget[1]["settings"]["templateType"]["value"]);
  }
}
