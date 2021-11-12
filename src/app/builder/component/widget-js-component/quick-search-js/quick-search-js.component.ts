import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-quick-search-js",
  templateUrl: "./quick-search-js.component.html",
  styleUrls: ["./quick-search-js.component.less"],
})
export class QuickSearchJsComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() {}

  ngOnInit() {}
}
