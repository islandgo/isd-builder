import { Component, OnInit, Input } from "@angular/core";
import { PageService } from "./../services/page.service";
import { RegionsService } from "../services/regions.service";

@Component({
  selector: "html-widget-generator",
  templateUrl: "./html-widget-generator.component.html",
  styleUrls: ["./html-widget-generator.component.less"],
})
export class HtmlWidgetGeneratorComponent implements OnInit {
  @Input() public customRegions;
  @Input() public pageSettings;

  constructor(
    public RegionsService: RegionsService,
    public PageService: PageService
  ) {}

  ngOnInit() {}
}
