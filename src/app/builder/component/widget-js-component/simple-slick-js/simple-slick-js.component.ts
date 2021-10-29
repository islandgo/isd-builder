import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "simple-slick-js",
  templateUrl: "./simple-slick-js.component.html",
  styleUrls: ["./simple-slick-js.component.less"],
})
export class SimpleSlickJsComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() {}

  ngOnInit() {}
}
