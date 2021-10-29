import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-quick-search-mobile-css",
  templateUrl: "./quick-search-mobile-css.component.html",
  styleUrls: ["./quick-search-mobile-css.component.less"],
})
export class QuickSearchMobileCssComponent implements OnInit {
  @Input() public widget;
  constructor() {}

  ngOnInit() {
  
  }
}
