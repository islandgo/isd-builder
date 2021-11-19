import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-quick-search-mobile-css",
  templateUrl: "./quick-search-mobile-css.component.html",
  styleUrls: ["./quick-search-mobile-css.component.less"],
})
export class QuickSearchMobileCssComponent implements OnInit {
  @Input() public widget;
  constructor(public RegionsService: RegionsService) {}
  counter = 1;
  ngOnInit() {
    if (this.widget[1]["name"] == "quick-search") {
      // console.log(this.widget[1]["settings"]);
    }
  }

  resetCounter() {
    if (this.widget[1]["name"] == "quick-search") {
      return this.RegionsService.convertNumberToWord(this.counter++);
    }
  }
}
