import { RegionsService } from "../services/regions.service";
import { Component } from "@angular/core";

@Component({
  selector: "widget-converter-root",
  templateUrl: "./widget-converter.component.html",
  styleUrls: ["./widget-converter.component.less"],
})
export class WidgetConverterComponent {
  htmlInput;
  htmlWidget;

  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {}

  convertToWidget() {
    const convertedText = this.convertHtmlToWidgetCode();
    this.htmlWidget = convertedText;
  }

  convertHtmlToWidgetCode() {
    var escapedFind = "<?php echo get_stylesheet_directory_uri() ?>".replace(
      /([.*+?^=!:${}()|\[\]\/\\])/g,
      "\\$1"
    );
    let newString = this.htmlInput.replace(
      new RegExp(escapedFind, "g"),
      "[stylesheet_directory]"
    );
    escapedFind = "<?php echo do_shortcode('".replace(
      /([.*+?^=!:${}()|\[\]\/\\])/g,
      "\\$1"
    );
    newString = newString.replace(new RegExp(escapedFind, "g"), "");
    escapedFind = "')?>".replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    newString = newString.replace(new RegExp(escapedFind, "g"), "");
    escapedFind = "<?php echo get_stylesheet_directory_uri()?>".replace(
      /([.*+?^=!:${}()|\[\]\/\\])/g,
      "\\$1"
    );
    newString = newString.replace(new RegExp(escapedFind, "g"), "");

    return newString;
  }
}
