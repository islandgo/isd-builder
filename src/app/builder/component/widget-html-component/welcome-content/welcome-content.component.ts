import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-welcome-content",
  templateUrl: "./welcome-content.component.html",
  styleUrls: ["./welcome-content.component.less"],
})
export class WelcomeContentComponent implements OnInit {
  @Input() public widget;
  constructor() {}

  ngOnInit() {
    console.log(this.widget[1]["name"]);
  }
}
