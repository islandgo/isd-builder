import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.less"],
})
export class ContactFormComponent implements OnInit {
  @Input() public widget;

  template;

  constructor() {}

  ngOnInit() {
    if (this.widget[1]["name"] == "contact-form") {
      const templateName = this.widget[1]["settings"]["templateType"]["value"];
      this.template = templateName.split("-");
    }
  }
}
