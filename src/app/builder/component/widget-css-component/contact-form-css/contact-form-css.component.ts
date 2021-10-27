import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contact-form-css",
  templateUrl: "./contact-form-css.component.html",
  styleUrls: ["./contact-form-css.component.less"],
})
export class ContactFormCssComponent implements OnInit {
  @Input() public widget;
  @Input() public regionData;

  template;
  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "contact-form") {
      const templateName = this.widget[1]["settings"]["templateType"]["value"];
      this.template = templateName.split("-");
    }
  }
}
