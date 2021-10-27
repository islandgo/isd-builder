import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site-title",
  templateUrl: "./site-title.component.html",
  styleUrls: ["./site-title.component.less"],
})
export class SiteTitleComponent implements OnInit {
  @Input() public widget;
  constructor() {}

  ngOnInit() {}
}
