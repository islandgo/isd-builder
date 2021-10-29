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
    // console.log(this.widget[1]["settings"]["qs_max_width"]["value"]);
  }

  resetCounter() {
    return this.RegionsService.convertNumberToWord(this.counter++);
  }
}
