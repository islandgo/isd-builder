import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-welcom-content-mobile",
  templateUrl: "./welcom-content-mobile.component.html",
  styleUrls: ["./welcom-content-mobile.component.less"],
})
export class WelcomContentMobileComponent implements OnInit {
  @Input() public widget;
  constructor() {}

  ngOnInit() {}
}
